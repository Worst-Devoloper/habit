import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { habitSelecter, removeHabit } from '../../Redux/HabitSlice'
import "../List/HabitList.css"

// this was empty file so i created this 

const HabitList = () => {
  const dispatch = useDispatch();

const {habits} = useSelector(habitSelecter);


const handleRemove = () =>{
  dispatch(removeHabit());
  console.log("delete is working")
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


