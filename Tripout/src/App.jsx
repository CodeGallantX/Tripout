import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Destinations from './pages/destinations';
import DestinationDetail from './pages/destinationDetail';
import Contact from './pages/contact';
import Blog from './pages/blog';
import NotFound from './pages/404';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/destinations/destination-detail" element={<DestinationDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App;