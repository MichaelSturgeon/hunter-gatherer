// Imports
import jwtDecode from "jwt-decode"
import { axiosReq } from "../api/axiosDefaults"
// Function to fetch more data, used for pagination or infinite scrolling
export const fetchMoreData = async (resource, setResource) => {
    try {
         // Making a GET request to the next page of the resource (pagination)
        const { data } = await axiosReq.get(resource.next)
        // Updating the resource state with the new data
        setResource(prevResource => ({
            ...prevResource,
            next: data.next,
            results: data.results.reduce((acc, cur) => {
                return acc.some(accResult => accResult.id === cur.id) ? acc : [...acc, cur]
            }, prevResource.results)
        }))
    } catch (error) {        
    }
}

export const setTokenTimestamp = (data) => {
    const refreshTokenTimestamp = jwtDecode(data?.refresh_token).exp;
    localStorage.setItem("refreshTokenTimestamp", refreshTokenTimestamp);
};
  
export const shouldRefreshToken = () => {
    return !!localStorage.getItem("refreshTokenTimestamp");
};

export const removeTokenTimestamp = () => {
    localStorage.removeItem("refreshTokenTimestamp");
};