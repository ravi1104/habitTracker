import React from 'react';
import { Link } from 'react-router-dom';
import HabitList from '../HabitList/HabitList';
import styles from './HabitListWeek.module.css';

const HabitListWeek = ({ weekView }) => {
  return (
    <div className={styles['habit-week-container']}>
      <h2>Habit Week List</h2>
      {weekView.map((day) => (
        <div key={day} className={styles['day-container']}>
          {day ? (
            <>
              <HabitList day={day} />
              <Link to={`/Habit-Detail/${day}`} className={styles.link}>
                View this day's Habit
              </Link>
            </>
          ) : (
            <div key="no-habit">No habit</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default HabitListWeek;
