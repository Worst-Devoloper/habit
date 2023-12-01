import React, { useState } from "react";
import { addHabit } from "../../Redux/HabitSlice";
import { useDispatch } from "react-redux";
import "../Add/Addhabit.css";

const AddHabit = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addHabitHandler = (e) => {
    if(input === ""){
      alert("Enter a Habit first");
    }else{
    e.preventDefault();
    
    dispatch(addHabit(input)); // Pass the input value to the action creator
    setInput("");
    }
  };

  return (
    <form onSubmit={addHabitHandler}>
      <input
        className="input-part"
        type="text"
        placeholder="Enter a Habit"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="add-btn">
        Add Habit
      </button>
      
    </form>
  );
};

export default AddHabit;
