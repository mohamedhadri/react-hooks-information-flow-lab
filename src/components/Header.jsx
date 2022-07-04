import React from 'react'
 
export default function header({handleDarkModeClick, isDarkMode}) {
    

    

  return (
    <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeClick}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
      </header>
  )
}
