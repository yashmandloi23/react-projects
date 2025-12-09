import Profile from "./components/Profile";
import "./App.css";
import Login from "./components/Login";
import ContextProvider from "./context/ContextProvider";

function App() {
  return (
    <ContextProvider>
      <Login />
      <Profile />
    </ContextProvider>
  );
}

export default App;
