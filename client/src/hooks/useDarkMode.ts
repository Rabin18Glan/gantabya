import { useEffect } from "react";

export function useDarkMode(){
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = () => {
          if (mediaQuery.matches) {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
        };
    
        // Set initial theme based on system preference
        handleChange();
    
        // Listen for changes in system preference
        mediaQuery.addEventListener('change', handleChange);
    
        // Cleanup listener on unmount
        return () => mediaQuery.removeEventListener('change', handleChange);
      }, []);

      
}