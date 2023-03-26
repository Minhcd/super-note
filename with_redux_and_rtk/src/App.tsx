import { useState } from 'react'
import NoteList from './components/NoteList'
import Search from './components/Search'
import Header from './components/Header'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={`${darkMode && 'dark'}`}>
      <div className="dark:bg-slate-800">
        <div className="max-w-[960px] min-h-screen mr-auto ml-auto pr-[15px] pl-[15px]">
          <Header handleToggleDarkMode={setDarkMode} />
          <Search />
          <NoteList />
        </div>
      </div>
    </div>
  )
}

export default App
