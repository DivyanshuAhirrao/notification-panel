import Layout from "./components/Layout";
import UserContextProvider from "./context/AuthContext";
import UsersContextProvider from "./context/UserContext";
// import GlobalContext from "./components/context/GlobalContext";

const App = () => {
  return (
    <>
      <UserContextProvider>
        <UsersContextProvider>
          <Layout />
        </UsersContextProvider>
      </UserContextProvider>
    </>
  );
};

export default App;
