// Imports
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import axios from "axios";
import { axiosReq, axiosRes } from "../api/axiosDefaults";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
// Creating contexts to hold current user data and setCurrentUser function
export const CurrentUserContext = createContext();
export const SetCurrentUserContext = createContext();
// Custom hooks to access current user and setCurrentUser functions
export const useCurrentUser = () => useContext(CurrentUserContext);
export const useSetCurrentUser = () => useContext(SetCurrentUserContext);
// CurrentUserProvider component - Provides the current user and setCurrentUser contexts to children
export const CurrentUserProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState(null)
  const history = useHistory();
  // Function to fetch the current user data from the backend
  const handleMount = async () => {
  try {
    const {data} = await axiosRes.get('dj-rest-auth/user/')
    setCurrentUser(data);
  } catch (error) {    
  }
};
 // useEffect hook to fetch the current user when the component mounts
useEffect(() => {
  handleMount();
},[]);
// useMemo hook to configure Axios interceptors for handling token refresh and authentication
useMemo(() => {
  axiosReq.interceptors.request.use(
    async (config) => {
      try {
        // Attempt to refresh the token
        await axios.post("/dj-rest-auth/token/refresh/");
      } catch (error) {
        // If token refresh fails, log out the user and redirect to sign-in page
        setCurrentUser((prevCurrentUser) => {
          if (prevCurrentUser) {
            history.push("/signin");
          }
          return null;
        });
        return config;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  // Response interceptor - Handles token refresh if a 401 Unauthorized error occurs
  axiosRes.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (error.response?.status === 401) {
        try {
          // Attempt to refresh the token
          await axios.post("/dj-rest-auth/token/refresh/");
        } catch (error) {
          // If token refresh fails, log out and redirect to sign-in page
          setCurrentUser((prevCurrentUser) => {
            if (prevCurrentUser) {
              history.push("/signin");
            }
            return null;
          });
        }
        return axios(error.config);
      }
      return Promise.reject(error);
    }
  );
}, [history]);
    // Returning the CurrentUserContext and SetCurrentUserContext providers
    return (
        <CurrentUserContext.Provider value={currentUser}>
            <SetCurrentUserContext.Provider value={setCurrentUser}>
                {children}
            </SetCurrentUserContext.Provider>
        </CurrentUserContext.Provider>
    )
};