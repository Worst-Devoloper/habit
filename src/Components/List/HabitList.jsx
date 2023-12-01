import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { habitSelecter, removeHabit } from '../../Redux/HabitSlice'


// this was empty file so i created this 

const HabitList = () => {
  const dispatch = useDispatch();

const {habits} = useSelector(habitSelecter);
console.log(habits);

const handleRemove = () =>{
  dispatch(removeHabit());
  console.log("delerte is working")
}
  return (

    <>
  

{habits.map((Habit) =>(
  <li key={Habit.id}>{Habit.text}
  <button onClick={handleRemove}>Delete</button>
    </li>
    
))}
     

    </>
  )
}

export default HabitList


