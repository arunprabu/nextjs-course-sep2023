/* component can have JS, JSX and css (optional) */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import UsersPage from "./pages/UsersPage/UsersPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import TodosPage from './pages/TodosPage/TodosPage';

/* App Component Definition */
function App() {
  /* ideal place for your layout */
  /* must return JSX */
  return (
    <BrowserRouter>
      <Header></Header>

      <main className="mt-5 pt-2 container">
        {/* Let's config the routing */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/todos" element={<TodosPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

// export App component for use in other files
export default App;
