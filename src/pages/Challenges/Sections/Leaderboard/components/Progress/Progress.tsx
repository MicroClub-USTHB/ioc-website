import React from 'react';

// Components
import Day, { DayProps } from './components/Day/Day';

// Styles
import progStyle from './Progress.module.scss';

const Progress = () => {
  const dummy_data: DayProps[] = [
    { title: 'Day 1', main: { completed: true, points: 240 }, side: { completed: true, points: 200 } },
    { title: 'Day 2', main: { completed: true, points: 189.76 }, side: { completed: false, points: 0 } },
    { title: 'Day 3', main: { completed: false, points: 0 }, side: { completed: false, points: 0 } },
  ]
  return (
    <div className={progStyle.container}>
      <div>
        <h1 className={progStyle.title}>Your Story So Far</h1>
        <ul className={progStyle.list}>
          {
            dummy_data.map(day => (
              <li> <Day {...day} /> </li>
            ))
          }
        </ul>
      </div>
      <span className={progStyle.total}>Score Total:<span className={progStyle.points}> {dummy_data.flatMap(day => [day.main.points, day.side.points]).reduce((acc, curr) => acc += curr)} Points</span></span>
    </div>
  );
}

export default Progress;
