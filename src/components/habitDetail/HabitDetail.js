import React, { useEffect, useState } from 'react';
import styles from "./HabitDetail.module.css"

const HabitDetail = ({ habit, updateHabit }) => {
  const [newStatus, setNewStatus] = useState(habit.status);

  const handleStatusChange = (e) => {
    const status = e.target.value;
    setNewStatus(status);
    updateHabit(habit.name, status);
  };
  
  useEffect(() => {
    console.log('Change detected:', newStatus);
  }, [newStatus]);

  return (
    <div className={styles.habitDetailContainer}>
      <h2 className={styles.habitDetailTitle}>{habit.name}</h2>
      <p>Status: {habit.status}</p>
      <p>Update Status:</p>
      <select className={styles.habitDetailSelect} value={newStatus} onChange={handleStatusChange}>
        <option value='pending'>Pending</option>
        <option value='done'>Done</option>
        <option value='none'>None</option>
      </select>
    </div>
  );
};

export default HabitDetail;
