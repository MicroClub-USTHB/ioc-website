import React from 'react';
import { useGetUserDataQuery } from '../../../../../../redux/api/backend';

// Components
import Day, { DayProps } from './components/Day/Day';

// Styles
import progStyle from './Progress.module.scss';

const Progress = () => {
  const { data, isLoading } = useGetUserDataQuery();
  return (
    <div className={progStyle.container}>
      <div>
        <h1 className={progStyle.title}>Your Story So Far</h1>
        <ul className={progStyle.list}>
          {
            data?.days.map(day => (
              <li key={day.number}>
                <Day
                  title={`Day ${day.number}`}
                  main={{
                    completed: !!day.completed.main.completed,
                    points: day.completed.main.score
                  }}
                  side={{
                    completed: !!day.completed.side.completed,
                    points: day.completed.side.score
                  }}
                />
              </li>
            ))
          }
        </ul>
      </div>
      <span className={progStyle.total}>Score Total:<span className={progStyle.points}> {data?.scores[Number(new Date().getFullYear())]} Points</span></span>
    </div>
  );
}

export default Progress;
