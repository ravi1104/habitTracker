import React from 'react';
import { useSelector } from 'react-redux';
import { habitSelector } from '../../redux/reducers/habit-reducer';
import styles from './HabitList.module.css';

const HabitList = ({ day }) => {
  let habits = useSelector(habitSelector);
  let arr = habits.habits;
  let data;
  for (let i = 0; i < arr.length; i++) {
    let date = arr[i].date
    if (date == day) {
      data = arr[i];
    }

  }

  return (
    <div className={styles['habit-list-container']}>
      {data ? (
        data.habit.map((habit) => (
          <div key={habit._id} className={styles['habit-item']}>
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
