import { createContext, useState, useEffect } from 'react'

export const GlobalContext = createContext()

const GlobalProvider = (props) => {
  const [darkMode, setDartMode] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  if (darkMode) {
    document.body.classList.add('dark')
  } else {
    if (document.body.classList.contains('dark')) {
      document.body.classList.remove('dark')
    }
  }

  useEffect(() => {
    if (localStorage.getItem('darkmode') === 'true') {
      setDartMode(true)
    }
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark')
    } else {
      if (document.body.classList.contains('dark')) {
        document.body.classList.remove('dark')
      }
    }

    localStorage.setItem('darkmode', darkMode)
  }, [darkMode])

  return (
    <GlobalContext.Provider
      value={{ darkMode, setDartMode, searchTerm, setSearchTerm }}
    >
      {props.children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider
