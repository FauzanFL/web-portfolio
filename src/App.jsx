import { useEffect, useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
  );

  useEffect(() => {
    localStorage.setItem('theme', theme);
    const localTheme = localStorage.getItem('theme');
    document.documentElement.setAttribute('data-theme', localTheme);
  }, [theme]);

  const handleThemeSwitch = (e) => {
    if (e.target.checked) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  return (
    <>
      <div className="">
        <Header theme={theme} switchTheme={handleThemeSwitch} />
        <Hero />
        <About theme={theme} />
        <Portfolio theme={theme} />
        <Contact theme={theme} />
        <Footer theme={theme} />
      </div>
    </>
  );
}

export default App;
