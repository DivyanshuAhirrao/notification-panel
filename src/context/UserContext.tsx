import axios from "axios";
import React, { createContext, useReducer } from "react";
import authReducer, { AuthState } from "./../reducer/AuthReducer";
import { PayloadProps } from "../types/PayloadType";

type UserContextProviderProps = {
  children: React.ReactNode;
};

interface ContextValueType {
  authState: AuthState;
  signup: (payload: PayloadProps | null) => Promise<void>; // Return type added for consistency
}

export const UserContextApi = createContext<ContextValueType | null>(null);

const initialState: AuthState = {
  payload: null,
  isLoading: true,
};

const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [auth, dispatch] = useReducer(authReducer, initialState);
//signup
  const signup = async (payload: PayloadProps | null): Promise<void> => {
    try {
      if (payload) {
        const { data } = await axios.post("http://localhost:5000/users", payload);
     
        dispatch({ type: "SIGNUP", payload: data });
      } else {
       
        console.error("Payload is null");
      }
    } catch (error) {
     
      console.error("Error occurred during signup:", error);
    }
  };



  const contextValue: ContextValueType = {
    authState: auth,
    signup: signup,
  };

  return (
    <UserContextApi.Provider value={contextValue}>
      {children}
    </UserContextApi.Provider>
  );
};

export default UserContextProvider;
