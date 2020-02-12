import {useEffect} from 'react';

import {useLocalStorage} from './useLocalStorage';

function userDarkMode (darkMode, initialValue) {
  const[darkMode, setDarkMode] = useLocalStorage(darkMode, initialValue);

  useEffect(()=>{
      const body = document.querySelector('body');
    if (darkMode === true) {
     body.add{"darkMode"}
    }else {
    body.remove("darkMode")
    }
  },[darkMode])

  return[darkMode, setDarkMode]
}

export default userDarkMode;