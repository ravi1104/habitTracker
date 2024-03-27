import React from 'react';
import { Link } from 'react-router-dom';
import HabitList from '../HabitList/HabitList';
import styles from './HabitListWeek.module.css';
import { useState, useEffect } from 'react';
const HabitListWeek = () => {

  const [currentDate, setCurrentDate] = useState(new Date());
  const [weekView, setWeekView] = useState([]);

  useEffect(() => {
    const curr = currentDate
    const dates = [];

    for (let i = 0; i < 7; i++) {
      let date = new Date();
      date.setDate(curr.getDate() - i);
      dates.push(date.toISOString().split('T')[0]);
    }
    setWeekView(dates.map(date => (date)));
  }, [currentDate]);

  const handlePreviousWeek = () => {
    const prevDate = new Date(currentDate);
    prevDate.setDate(prevDate.getDate() - 7);
    setCurrentDate(prevDate);
  };

  const handleNextWeek = () => {
    const nextDate = new Date(currentDate);
    nextDate.setDate(nextDate.getDate() + 7);
    setCurrentDate(nextDate);
  };

  return (
    <div className={styles['habit-week-container']}>
      <h1>Habit Week View</h1>

      <div className={styles.changeweek} style={{ textAlign: "center" }}>
        <div onClick={handlePreviousWeek}>Previous Week</div>
        <span>{currentDate.toISOString().split('T')[0]}</span>
        <div onClick={handleNextWeek}>Next Week</div>
      </div>
      
      <div className={styles['day-container']}>
        {weekView.map((day) => (
          <div key={day} className={styles.singleDay}>
            <h2> {day}</h2>
            {day ? (
              <div>
                <HabitList day={day} />
                <Link to={`/Habit-Detail/${day}`} className={styles.link}>
                  View this day's Habit
                </Link>
              </div>
            ) : (
              <div key="no-habit">No habit</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HabitListWeek;
