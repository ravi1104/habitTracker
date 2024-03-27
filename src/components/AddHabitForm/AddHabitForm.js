import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addHabit, habitSelector } from '../../redux/reducers/habit-reducer';
import styles from './AddHabitFom.module.css'

const AddHabitForm = ({ day }) => {
  const [habitName, setHabitName] = useState('');
  const [habitStatus, setHabitStatus] = useState('none');

  const dispatch = useDispatch();
  const { habit } = useSelector(habitSelector);

  const habitNameInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = { name: habitName, status: habitStatus };
    dispatch(addHabit({ date: day, habit: payload }));
    setHabitName('');
    setHabitStatus('');
  };

  return (
    <div className={styles.formContainer}>
      <h2>Add New Habit</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter habit name"
          value={habitName}
          onChange={(e) => setHabitName(e.target.value)}
          ref={habitNameInputRef}
          required
        />
        <select
          value={habitStatus}
          onChange={(e) => setHabitStatus(e.target.value)}>
          <option value="None">Select status</option>
          <option value="Done">Done</option>
          <option value="Pending">Pending</option>
        </select>
        <button type="submit">Add Habit</button>
      </form>
    </div>
  );
};

export default AddHabitForm;
