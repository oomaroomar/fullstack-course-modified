import React from 'react';

import Header from './components/Header';
import Content from './components/Content';
import Total from './components/Total';

import { CoursePart } from './types';

const App: React.FC = () => {
  const courseName = 'Half Stack application development';
  const courseParts: CoursePart[] = [
    {
      name: 'Fundamentals',
      exerciseCount: 10,
      description: 'This is an awesome course part',
    },
    {
      name: 'Using props to pass data',
      exerciseCount: 7,
      groupProjectCount: 3,
    },
    {
      name: 'Deeper type usage',
      exerciseCount: 14,
      description: 'Confusing description',
      exerciseSubmissionLink: 'https://fake-exercise-submit.made-up-url.dev',
    },
    {
      name: 'Design thinking',
      exerciseCount: 5,
      description: 'Learn to look for the correct problem',
    },
  ];

  return (
    <div>
      <Header title={courseName} />
      <Content content={courseParts} />
      <br />
      <Total
        total={courseParts.reduce(
          (carry, part) => carry + part.exerciseCount,
          0
        )}
      />
    </div>
  );
};

export default App;
