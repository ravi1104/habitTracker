import React from 'react';
import { useSelector } from 'react-redux';
import { habitSelector } from '../../redux/reducers/habit-reducer';
import styles from './HabitList.module.css';

const HabitList = ({ day }) => {
  const habits = useSelector(habitSelector);

  return (
    <div className={styles['habit-list-container']}>
      {habits[day] ? (
        habits[day].map((habit, index) => (
          <div key={index} className={styles['habit-item']}>
            <h1>Date: {day}</h1>
            <h1 className={styles.habitHeading}>Activity: {habit.name}</h1>
            <p>Status: {habit.status}</p>
          </div>
        ))
      ) : (
        <p>No habits on this day '{day}'</p>
      )}
    </div>
  );
};

export default HabitList;
