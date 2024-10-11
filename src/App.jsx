// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import MovieDescription from './Components/MovieDescription';
// import { Link } from 'react-router-dom';
import Contact from './Components/Contact';
import About from './Components/About';
import Navbar from './Components/Navbar';

const movies = [
  { id: 1, title: 'Inception', description: 'A thief who steals corporate secrets through the use of dream-sharing technology...', trailer: 'https://www.youtube.com/embed/YoHD9XEInc0' },
  { id: 2, title: 'The Matrix', description: 'A computer hacker learns from mysterious rebels about the true nature of his reality...', trailer: 'https://www.youtube.com/embed/vKQi3bBA1y8' },{id: 3, title: "Texas Cartel Heist",description:"Two daring thieves set their sights on an incredible prize: $80 million in hidden drug money stashed on a famous Texas ranch once owned by a notorious member of the cowboy mafia...", trailer: "https://www.youtube.com/embed/Pu8b1l0vCv8"},{ id: 4, title: "Redline: Fear Nothing, Risk Everything", description: "A gorgeous young automobile fanatic, and front to the hottest unsigned band on the West coast, finds herself caught up in illegal drag-racing competitions organized by exotic car fanatics.", trailer:"https://www.youtube.com/embed/nZumkTPjDrM"}
];

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home movies={movies} />} />
        <Route path="/movie/:id" element={<MovieDescription movies={movies} />} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </Router>
  );
};

export default App;
