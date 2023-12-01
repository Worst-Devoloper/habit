import AddHabit from "./Components/Add/AddHabit";
import HabitList from "./Components/List/HabitList";
import { Provider } from "react-redux";
import { store } from "./Store";
function App() {
  return (
   <Provider store={store}>
   <AddHabit/>
   <HabitList/>
   </Provider>
  );
}

export default App;
