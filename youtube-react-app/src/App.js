/* component can have JS, JSX and css (optional) */
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';

/* App Component Definition */
function App() {
  /* ideal place for your layout */
  /* must return JSX */
  return (
    <div>
      <Header></Header>

      <main className='mt-5 pt-2 container'>
        <HomePage />
      </main>

      <Footer />
    </div>
  );
}

// export App component for use in other files
export default App;
