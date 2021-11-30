import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Home from './Main/Home/Home';
import Contact from './Pages/Contact/Contact';
import BabyToys from './ServiceDetails/BabyToys/BabyToys';
import BookAchive from './ServiceDetails/BookAchive/BookAchive';
import MacBook from './ServiceDetails/MacBook/MacBook';
import MedicalApp from './ServiceDetails/MedicalApp/MedicalApp';
import TraliveApp from './ServiceDetails/TraliveApp/TraliveApp';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tralive" element={<TraliveApp />} />
          <Route path="/toys" element={<BabyToys />} />
          <Route path="/medical" element={<MedicalApp />} />
          <Route path="/macbook" element={<MacBook />} />
          <Route path="/medical" element={<BookAchive />} />
        </Routes>
      </BrowserRouter>,
    </div>
  );
}

export default App;
