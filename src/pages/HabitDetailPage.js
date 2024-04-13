import React from 'react';
import { useParams } from 'react-router-dom';
import HabitDetail from '../components/habitDetail/HabitDetail';
import {  useSelector } from 'react-redux';
import { habitSelector } from '../redux/reducers/habit-reducer';
import AddHabitForm from '../components/AddHabitForm/AddHabitForm';

const HabitDetailPage = () => {
  let { day } = useParams();

  if (day === 'today') {
    day = new Date().toISOString().split('T')[0];
  }
  const habits = useSelector(habitSelector);
  const arr = habits.habits || [];
  let data;
  for (let i = 0; i < arr.length; i++) {
    let date = arr[i].date
    if (date == day) {
      data = arr[i];
    }

  }

  return (
    <div className='container-mid'>
      <h1>Habit Detail</h1>
      <h2>{day}</h2>
      <div>
        {data && data.habit.map((h) => {
          return <HabitDetail key={h._id} habit={h} />
        })}
      </div>
      <AddHabitForm day={day} />
    </div>
  );
};

export default HabitDetailPage;
