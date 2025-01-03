import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import { UserProvides } from "./context/UserContext";

function App() {
  return (
    <>
      <UserProvides>
        <RegisterPage />
        <LoginPage />
      </UserProvides>
    </>
  );
}

export default App;
