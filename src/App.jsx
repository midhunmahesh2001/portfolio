import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Certificates from './Components/Certificates/Certificates';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Nav from './Components/Navbar/Nav';
import Projects from './Components/Projects/Projects';
import ContactForm from './Components/ContactForm/ContactForm';

function App() {
  return (
    <Router>
      {/* Navigation bar available across all pages */}
      <Nav />  
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Projects />
            <Certificates />
            <Footer />
          </>
        } />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/projects" element={
          <>
            <Projects />
            <Footer />
          </>
        } />
        <Route path="/certificates" element={
          <>
            <Certificates />
            <Footer />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
