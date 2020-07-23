import React from 'react';
import '../css/theater.css';
import Nav from './Nav';
import MovieListing from './MovieListing';
import Order from './Order';
import MovieDisplay from './MovieDisplay';
import UpdateMovies from './UpdateMovies';
import sampleMovies from '../sample-movies';
import base from '../base';

class App extends React.Component {
  state = {
    movies: {},
    order: {},
    mobileNavOpen: false,
    cartModalOpen: false,
    selectedMovie: null,
  };

  componentDidMount() {
    const params = this.props.match.params.theaterId;
    const orderLocalStorage = JSON.parse(localStorage.getItem(`${params}`));
    if (orderLocalStorage) {
      this.setState({
        order: orderLocalStorage,
      });
    }

    // Update Movies from firebase
    this.ref = base.syncState(`${params}/movies`, {
      context: this,
      state: 'movies',
    });
  }

  componentDidUpdate() {
    const params = this.props.match.params.theaterId;
    const order = JSON.stringify(this.state.order);
    localStorage.setItem(`${params}`, order);
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  loadSampleMovies = () => {
    const movies = { ...this.state.movies, ...sampleMovies };
    this.setState({
      movies,
    });
  };

  addToOrder = (key) => {
    const order = { ...this.state.order };
    order[key] ? (order[key] = order[key] + 1) : (order[key] = 1);
    this.setState({
      order,
    });
  };

  subtractTicketFromOrder = (key) => {
    const order = { ...this.state.order };
    if (order[key] === 1) return;
    order[key] = order[key] - 1;
    this.setState({
      order,
    });
  };

  deleteFromOrder = (key) => {
    const order = {
      ...this.state.order,
    };
    delete order[key];
    this.setState({
      order,
    });
  };

  addMovie = (movie) => {
    const movieKey = `movie${Date.now()}`;
    const movies = {
      ...this.state.movies,
      [movieKey]: movie,
    };
    this.setState({
      movies,
    });
  };

  updateMovie = (movie, movieKey) => {
    const movies = {
      ...this.state.movies,
      [movieKey]: movie,
    };
    this.setState({
      movies,
    });
  };

  deleteMovie = (movieKey) => {
    const movies = {
      ...this.state.movies,
      [movieKey]: null,
    };
    this.setState({
      movies,
    });
  };

  selectMovie = (key) => {
    console.log(key);
    const selectedMovie = key;
    this.setState({
      selectedMovie,
    });
  };

  openMobileNav = () => {
    const mobileNavOpen = true;
    this.setState({
      mobileNavOpen,
    });
  };

  closeMobileNav = () => {
    const mobileNavOpen = false;
    this.setState({
      mobileNavOpen,
    });
  };

  openModalNav = () => {
    const cartModalOpen = true;
    this.setState({
      cartModalOpen,
    });
  };

  closeModalNav = () => {
    const cartModalOpen = false;
    this.setState({
      cartModalOpen,
    });
  };

  render() {
    return (
      <div className="theater_app">
        <Nav
          openMobileNav={this.openMobileNav}
          closeMobileNav={this.closeMobileNav}
          mobileNavOpen={this.state.mobileNavOpen}
          storeId={this.props.match.params.theaterId}
        />
        <main>
          <MovieListing
            movies={this.state.movies}
            selectMovie={this.selectMovie}
          />
          <MovieDisplay
            selectedMovie={this.state.selectedMovie}
            addToOrder={this.addToOrder}
            movies={this.state.movies}
          />
        </main>
        <div className="mid_pane">
          <Order
            movies={this.state.movies}
            order={this.state.order}
            deleteFromOrder={this.deleteFromOrder}
            subtractTicketFromOrder={this.subtractTicketFromOrder}
            addToOrder={this.addToOrder}
          />
        </div>
        <div className="right_pane">
          <UpdateMovies
            movies={this.state.movies}
            addMovie={this.addMovie}
            updateMovie={this.updateMovie}
            loadSampleMovies={this.loadSampleMovies}
            deleteMovie={this.deleteMovie}
          />
        </div>
      </div>
    );
  }
}

export default App;
