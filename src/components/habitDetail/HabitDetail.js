import React, { useEffect, useState } from 'react';
import styles from "./HabitDetail.module.css"
import {useDispatch} from 'react-redux';
import { updateAsyncHabitStatus } from '../../redux/reducers/habit-reducer';

const HabitDetail = ({ habit }) => {
  const [newStatus, setNewStatus] = useState(habit.status);
  const dispatch= useDispatch();
  const handleStatusChange = (e) => {
    const status =e.target.value
    dispatch(updateAsyncHabitStatus({id:habit._id,status:status}));
    setNewStatus(status);
  };
  
  useEffect(() => {
    console.log('Change detected:', newStatus);
  }, [newStatus]);

  return (
    <div className={styles.habitDetailContainer}>
      <h2 className={styles.habitDetailTitle}>Habit Name: {habit.name}</h2>
      {(habit.status)?<p>Status: {habit.status}</p>:<p>Status :none</p>}
      <p>Update Status:</p>
      <select className={styles.habitDetailSelect} onChange={handleStatusChange}>
        <option value='Pending'>Pending</option>
        <option value='Done'>Done</option>
        <option value='None'>None</option>
      </select>
    </div>
  );
};

export default HabitDetail;
