import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component{

    state = {
      searchTerm: "",
      reviews: []
    }
  
    render(){
      return(
        <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" onChange={event=>this.setState({searchTerm: event.target.value})} />
        <input type="submit" value="search" />
        </form>
        <div className="searchable-movie-reviews" >
        <MovieReviews reviews={this.state.reviews} />
        </div>
        </div>
      )
    }
    handleSubmit = event => {
      event.preventDefault();
      fetch(URL.concat(this.state.searchTerm))
      .then(response => response.json())
        .then(data=> this.setState({ reviews: data.results })
      )
    }
  }
  
  export default SearchableMovieReviewsContainer;
  