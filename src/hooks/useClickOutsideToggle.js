// Imports
import { useEffect, useRef, useState } from "react";
// Custom hook to toggle a state when clicking outside of an element
const useClickOutsideToggle = () => {  
  const [expanded, setExpanded] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    // Collapse the element if clicked outside    
    const handleClickOutside = (event) => {      
      if (ref.current && !ref.current.contains(event.target)) {
        setExpanded(false); 
      }
    };
    // Add event listener when the component mounts
    document.addEventListener("mouseup", handleClickOutside);
    return () => {
      // Clean up the event listener when the component unmounts
      document.removeEventListener("mouseup", handleClickOutside);
    };
  }, [ref]);

  return { expanded, setExpanded, ref };
};

export default useClickOutsideToggle;