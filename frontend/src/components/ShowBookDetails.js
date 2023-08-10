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
    let BookItem = <div>
      <table className="table table-hover table-dark">
        <tbody>
          <tr>
            <td>Email</td>
            <td>{ book.email }</td>
          </tr>
          <tr>
            <td>Current Position or Occupation</td>
            <td>{ book.position }</td>
          </tr>
          <tr>
            <td>Degrees, Certificates and Qualifications</td>
            <td>{ book.degrees }</td>
          </tr>
          <tr>
            <td>Bio and Hobbies</td>
            <td>{ book.bio }</td>
          </tr>
          <tr>
            <td>Previous Positions and Work History</td>
            <td>{ book.previousPositions }</td>
          </tr>
          <tr>
            <td>Publications</td>
            <td>{ book.publications }</td>
          </tr>
          <tr>
            <td>Social Media Links</td>
            <td>{ book.social }</td>
          </tr>
          <tr>
            <td>Contact Details</td>
            <td>{ book.contactDetails }</td>
          </tr>
          <tr>
            <td>Areas of Study and Interests</td>
            <td>{ book.areasOfStudy }</td>
          </tr>
        </tbody>
      </table>
    </div>

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