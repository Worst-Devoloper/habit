import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState ={
     habits :[{id :1 , text : " Habits"}]
    };

export const habitSlice = createSlice({
    name:'habit',
    initialState: initialState,
    reducers:{
        addHabit:(state, action) =>{
            const habit = {
                id : nanoid(),
                text: action.payload,
            }
            state.habits.push(habit);
        },
        removeHabit:(state, action) =>{
            state.habits = state.habits.filter((habit) => habit.id !== action.payload ) 

        }

    }
})

export const{ addHabit, removeHabit} = habitSlice.actions;

export const habitReducer =  habitSlice.reducer;
export const habitSelecter = (state) => state.habitReducer;