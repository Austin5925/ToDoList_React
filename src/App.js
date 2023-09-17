import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { useState, useEffect } from 'react';
import { ThemeProvider, useTheme } from '../src/contexts/ThemeContext'

function App() {
  // const [darkMode, setDarkMode] = useState(false);
  // const [systemDarkMode, setSystemDarkMode] = useState(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);

  // // 初始化和响应系统的颜色偏好变化
  // useEffect(() => {
  //     const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  //     if (mediaQuery.matches !== systemDarkMode) {
  //         setSystemDarkMode(mediaQuery.matches);
  //     }

  //     const listener = (e) => {
  //         setSystemDarkMode(e.matches);
  //     };

  //     mediaQuery.addListener(listener);

  //     return () => {
  //         mediaQuery.removeListener(listener);
  //     }
  // }, [systemDarkMode]);

  // useEffect(() => {
  //     if (darkMode || systemDarkMode) {
  //         document.body.classList.add('dark-mode');
  //     } else {
  //         document.body.classList.remove('dark-mode');
  //     }
  // }, [darkMode, systemDarkMode]);

  // return (
  //   <div className="App">
  //     <Home />            
  //     <button onClick={() => setDarkMode(prev => !prev)}>
  //         Toggle Dark Mode
  //     </button>
  //   </div>
  // );
  return (
    <ThemeProvider>
        <Home />
        <ToggleTheme />
    </ThemeProvider>
  );

}

function ToggleTheme() {
  const { theme, setTheme } = useTheme();
  
  return (
      <div>
          <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
              Toggle Theme
          </button>
      </div>
  );
}

export default App;
