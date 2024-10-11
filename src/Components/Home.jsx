/* eslint-disable react/prop-types */
// Home.js
import { Link } from 'react-router-dom';


 
const Home = ({ movies }) => {
  return (
    <>
        <h2>Welcome To the Movie App, Select your choice by a Click!.</h2>
    <div style={styles.container}>
      {movies.map(movie => (
        <div key={movie.id} style={styles.movieCard}>
          <h3><Link to={`/movie/${movie.id}`}>{movie.title}</Link></h3>
        </div>
      ))}
    </div>
    </>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px'
  },
  movieCard: {
    display: 'grid',
    gridTemplateRows: '1fr',
    margin: '10px',
    padding: '20px',
    background: 'white',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer'
  }
};

export default Home;
