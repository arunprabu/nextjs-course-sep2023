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
import { PageContext } from './contexts/PageContext';

/* App Component Definition */
function App() {
  // sample data to be supplied to some components thru context
  const userStatus = {
    isLoggedIn: true,
    lastLogin: '04/Oct/2023'
  }

  /* ideal place for your layout */
  /* must return JSX */
  return (
    <BrowserRouter>
      <Header></Header>

      <main className="mt-5 pt-2 container">
        {/* Step 2 of context api --- providing data thru the context */}
        <PageContext.Provider value={userStatus}>
          {/* Let's config the routing */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/todos" element={<TodosPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </PageContext.Provider>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

// export App component for use in other files
export default App;
