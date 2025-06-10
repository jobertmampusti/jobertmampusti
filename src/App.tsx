import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-900">
      <Header />
      <Home />
      <About />
      <Projects />
    </div>
  );
}

export default App;
