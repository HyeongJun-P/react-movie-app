import React, {Component} from 'react';
import axios from 'axios';

class App extends Component {
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async() => {
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");

  }
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading } = this.state;
    return(
      <div className="">
        {isLoading ? "Loading..." : "We are ready"}
      </div>
    );
  }
}

export default App;