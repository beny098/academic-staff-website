import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class showBookDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: {}
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('https://academic-staff-website.herokuapp.com/api/books/'+this.props.match.params.id)
      .then(res => {
        // console.log("Print-showBookDetails-API-response: " + res.data);
        this.setState({
          book: res.data
        })
      })
      .catch(err => {
        console.log("Error from ShowBookDetails");
      })
  };

  onDeleteClick (id) {
    axios
      .delete('https://academic-staff-website.herokuapp.com/api/books/'+id)
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => {
        console.log("Error form ShowBookDetails_deleteClick");
      })
  };


  render() {

    const book = this.state.book;
    let BookItem = (
      <div className="book-item">
        <div className="grid-container-one">
        <div class="grid-item-two">
          <span class="big-title">{book.fullname}</span> <br></br>
          <span class="body-text">Email: </span> {book.email} <br></br>
          <span class="body-text">Current Position or Occupation</span> {book.position} <br></br>
        </div>
        <div class="grid-item-four">
          <span class="title">Bio: </span> <br></br>
          <span class="body-text">{book.bio}</span> <br></br>
        </div>
      </div>

      <div className="grid-container-two">
        <div class="grid-item-three">
          <span class="title">Degrees, Certificates and Qualifications</span> <br></br>
          <span class="body-text">{book.degrees} </span><br></br>
          <span class="title">Previous Positions and Work History</span> <br></br>
          <span class="body-text">{book.previousPositions} </span><br></br>
        </div>
      </div>
      </div>
    );

    return (
      <div className="ShowBookDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show All Profiles
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">{book.fullname}</h1>
              <br />
            </div>
          </div>
          <div>
            { BookItem }
          </div>

          <div className="row">
            <div className="col-md-6">
              <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={this.onDeleteClick.bind(this,book._id)}>Delete Profile</button><br />
            </div>

            <div className="col-md-6">
              <Link to={`/edit-book/${book._id}`} className="btn btn-outline-info btn-lg btn-block">
                    Edit Profile
              </Link>
              <br />
            </div>

          </div>
            {/* <br />
            <button type="button" class="btn btn-outline-info btn-lg btn-block">Edit Book</button>
            <button type="button" class="btn btn-outline-danger btn-lg btn-block">Delete Book</button> */}

        </div>
      </div>
    );
  }
}

export default showBookDetails;