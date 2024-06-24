import { useEffect, useState } from 'react';
import axios from 'axios';

const Showtable = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios.get('https://api.tvmaze.com/shows')
      .then(response => {
        setShows(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the shows!', error);
      });
  }, []);

  return (
    <div>
      <h1>Show List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Language</th>
            <th>Genres</th>
            <th>Premiered</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {shows.map(show => (
            <tr key={show.id}>
              <td>{show.id}</td>
              <td>{show.name}</td>
              <td>{show.language}</td>
              <td>{show.genres.join(', ')}</td>
              <td>{show.premiered}</td>
              <td>{show.rating.average}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Showtable;
