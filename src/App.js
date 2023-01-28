import About from './Components/About';
import Header from './Components/Header';
import Home from './Components/Home';
import Menu from './Components/Menu';

function App() {
  return (
    <>
      <Header/>
      <main>
        <Home/>
        <About/>
        <Menu/>
      </main>
    </>
  );
}

export default App;
