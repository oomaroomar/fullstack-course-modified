import { State } from './state';
import { Patient, Diagnosis } from '../types';

export type Action =
  | {
      type: 'SET_PATIENT_LIST';
      payload: Patient[];
    }
  | {
      type: 'ADD_PATIENT';
      payload: Patient;
    }
  | {
      type: 'UPDATE_PATIENT';
      payload: Patient;
    }
  | {
      type: 'SET_DIAGNOSIS_LIST';
      payload: Diagnosis[];
    };

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_PATIENT_LIST':
      return {
        ...state,
        patients: {
          ...action.payload.reduce(
            (memo, patient) => ({ ...memo, [patient.id]: patient }),
            {}
          ),
          ...state.patients,
        },
      };
    case 'ADD_PATIENT':
      return {
        ...state,
        patients: {
          ...state.patients,
          [action.payload.id]: action.payload,
        },
      };
    case 'UPDATE_PATIENT':
      return {
        ...state,
        patients: {
          ...state.patients,
          [action.payload.id]: action.payload,
        },
      };
    case 'SET_DIAGNOSIS_LIST':
      return {
        ...state,
        diagnoses: {
          // Map returns an array so we need a sort of hacky solution to map into an object. Kind of weird tbh
          ...action.payload.reduce(
            (memo, diagnosis) => ({ ...memo, [diagnosis.code]: diagnosis }),
            {}
          ),
          ...state.diagnoses,
        },
      };
    default:
      return state;
  }
};

export const setPatientList = (patientList: Patient[]): Action => ({
  type: 'SET_PATIENT_LIST',
  payload: patientList,
});

export const updatePatient = (patient: Patient): Action => ({
  type: 'UPDATE_PATIENT',
  payload: patient,
});

export const addPatient = (patient: Patient): Action => ({
  type: 'ADD_PATIENT',
  payload: patient,
});

export const setDiagnosisList = (diagnosisList: Diagnosis[]): Action => ({
  type: 'SET_DIAGNOSIS_LIST',
  payload: diagnosisList,
});
