import React, {Component} from 'react';

class App extends Component {
  state = {
    isLoading: true,
    movies: []
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false});
    }, 6000);
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