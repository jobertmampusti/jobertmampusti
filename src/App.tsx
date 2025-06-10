import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-900">
      <Header />
      <Home />
      <About />
    </div>
  );
}

export default App;
