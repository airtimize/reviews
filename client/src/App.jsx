import React from 'react';
import axios from 'axios';
import ReviewList from './ReviewList';
import Ratings from './Ratings';
import Total from './Total';
import Search from './Search';
import Pages from './Pages';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalReviews: null,
      allReviews: [],
      displayedReviews: [],
      currentPage: 1,
      ratings: {},
    };
    this.getData = this.getData.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    const listingId = window.location.href.split('/').pop();
    axios.get(`/api/${listingId}/reviews`)
      .then((res) => {
        // console.log('axios res.data[0]', res.data[0]);
        this.setState({
          totalReviews: res.data[0].numReviews,
          allReviews: res.data[0].reviews,
          displayedReviews: res.data[0].reviews
            .slice(((this.state.currentPage - 1) * 7), (this.state.currentPage * 7)),
          ratings: res.data[0].ratings,
        });
      })
      .catch((err) => {
        console.log('axios error:', err);
      });
  }


  handlePageClick(e) {
    console.log(e.target.innerText);
  }

  render() {
    return (
      <div className="reviewApp">

        <div className="summary">
          <div className="summary-container">
            <div className="total-container">
              <Total totalReviews={this.state.totalReviews} ratings={this.state.ratings} />
            </div>
            <div className="search-container">
              <Search />
            </div>
          </div>
        </div>

        <div className="summary-border-bottom" />

        <div className="details">
          <Ratings ratings={this.state.ratings} />
          <ReviewList displayedReviews={this.state.displayedReviews} />
        </div>

        <div>
          <Pages handlePageClick={this.handlePageClick}/>
        </div>

      </div>
    );
  }
}

export default App;
