import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-900">
      <Header />
      <Home />
      <About />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;
