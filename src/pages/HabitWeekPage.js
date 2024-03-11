import React, { useState, useEffect } from 'react';
import HabitListWeek from '../components/HabitListWeek/HabitListWeek';

const HabitWeekPage = () => {
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
    <div>
      <h1>Habit List - Week View</h1>

      <div style={{textAlign:"center"}}>
        <button onClick={handlePreviousWeek}>Previous Week</button>
        <span>{currentDate.toISOString().split('T')[0]}</span>
        <button onClick={handleNextWeek}>Next Week</button>
      </div>
      
      <HabitListWeek weekView={weekView} />
    </div>
  );
};

export default HabitWeekPage;
