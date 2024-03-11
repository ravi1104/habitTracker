import React from 'react';
import { useParams } from 'react-router-dom';
import HabitDetail from '../components/habitDetail/HabitDetail';
import { useDispatch, useSelector } from 'react-redux';
import { habitSelector, updateHabitStatus } from '../redux/reducers/habit-reducer';
import AddHabitForm from '../components/AddHabitForm/AddHabitForm';

const HabitDetailPage = () => {
  let { day } = useParams();
  const dispatch=useDispatch();

  if(day==='today'){
    day=new Date().toISOString().split('T')[0];
  }
  const habits = useSelector(habitSelector);
  const habit = habits[day] || [];
  console.log(habit);

  const handleStatusUpdate=(name, newStatus)=>{
    const date=day;
    dispatch(updateHabitStatus({date, name, newStatus}));
  }

  return (
    <div>
      <h1>Habit Detail</h1>
      <h2>{day}</h2>
      {habit.map((h)=>{
        return <HabitDetail key={h.name} habit={h} updateHabit={handleStatusUpdate}/>
      })}
      <AddHabitForm day={day} />
    </div>
  );
};

export default HabitDetailPage;
