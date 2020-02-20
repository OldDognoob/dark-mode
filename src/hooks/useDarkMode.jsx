import React from "react";
import  {useLocalStorage}  from "./useLocalStorage";

export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage("enabled");

    React.useEffect(() => {
        const body = document.querySelector("body");
        if (darkMode === true) {
            body.classList.add("dark-mode")
        } else {
            body.classList.remove("dark-mode")
        }
        console.log(body)
    }, [darkMode, setDarkMode])

    return [darkMode, setDarkMode];
};

// export default userDarkMode;