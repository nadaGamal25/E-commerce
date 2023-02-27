import React, { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext= createContext();

export default function ThemeProvider(props) {

    const [theme, SetTheme]=useState(JSON.parse(localStorage.getItem('theme')) || false);

    useEffect(()=>{
        localStorage.setItem('theme',JSON.stringify(theme));
    },[theme]);

  return (
    <ThemeContext.Provider value={{theme}}>
        {props.children}
    </ThemeContext.Provider>
  );
};

const useThemeHook=()=>{
    const{theme}= useContext(ThemeContext);
    return [theme];
}

export {ThemeContext, useThemeHook};