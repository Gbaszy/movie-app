// MovieDescription.js
import { useParams, Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const MovieDescription = ({ movies }) => {
  const { id } = useParams();
  // eslint-disable-next-line react/prop-types
  const movie = movies.find(m => m.id === parseInt(id));

  return (
    <div style={styles.container}>
      {movie ? (
        <div style={styles.movieDescription}>
          <h2>{movie.title}</h2>
          <p>{movie.description}</p>
          <iframe width="560" height="315" src={movie.trailer} frameBorder="0" allowFullScreen></iframe>
          <div><Link to="/" style={styles.backButton}>Back to Home</Link></div>
        </div>
      ) : (
        <p>Movie not found.</p>
      )}
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px'
  },
  movieDescription: {
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'left'
  },
  backButton: {
    display: 'inline-block',
    marginTop: '20px',
    padding: '10px 20px',
    background: '#007bff',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  }
};

export default MovieDescription;
