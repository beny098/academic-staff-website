import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

class UpdateBookInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: '',
      email: '',
      position: '',
      degrees: '',
      bio: '',
      previousPublications: '',
      social: '',
      contactDetails: '',
      areasOfStudy: ''
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('https://academic-staff-website.herokuapp.com/api/books/'+this.props.match.params.id)
      .then(res => {
        // this.setState({...this.state, book: res.data})
        this.setState({
          fullname: res.data.fullname,
          email: res.data.email,
          position: res.data.position,
          degrees: res.data.degrees,
          bio: res.data.bio,
          previousPositions: res.data.previousPositions,
          publications: res.data.publications,
          social: res.data.social,
          contactDetails: res.data.contactdetails,
          areasOfStudy: res.data.areasofstudy
        })
      })
      .catch(err => {
        console.log("Error from UpdateBookInfo");
      })
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      fullname: this.state.fullname,
      email: this.state.email,
      position: this.state.position,
      degrees: this.state.degrees,
      bio: this.state.bio,
      previousPositions: this.state.previousPositions,
      publications: this.state.publications,
      social: this.state.social,
      contactDetails: this.state.contactDetails,
      areasOfStudy: this.state.areasOfStudy
    };

    axios
      .put('https://academic-staff-website.herokuapp.com/api/books/'+this.props.match.params.id, data)
      .then(res => {
        this.props.history.push('/show-book/'+this.props.match.params.id);
      })
      .catch(err => {
        console.log("Error in UpdateBookInfo!");
      })
  };


  render() {
    return (
      <div className="UpdateBookInfo">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Profile List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit Profile</h1>
              <p className="lead text-center">
                  Update Profile's Info
              </p>
            </div>
          </div>

          <div className="col-md-8 m-auto">
          <form noValidate onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label htmlFor="fullname">Fullname</label>
              <input
                type='text'
                placeholder='Fullname'
                name='fullname'
                className='form-control'
                value={this.state.fullname}
                onChange={this.onChange}
              />
            </div>
            <br />

            <div className='form-group'>
            <label htmlFor="email">Email</label>
              <input
                type='text'
                placeholder='Email'
                name='email'
                className='form-control'
                value={this.state.email}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="position">Current Position or Occupation</label>
              <input
                type='text'
                placeholder='position'
                name='position'
                className='form-control'
                value={this.state.position}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="degrees">Degrees, Certificates and Qualifications</label>
              <input
                type='text'
                placeholder='Degrees'
                name='degrees'
                className='form-control'
                value={this.state.degrees}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="bio">Bio and Hobbies</label>
              <input
                type='text'
                placeholder='Bio'
                name='bio'
                className='form-control'
                value={this.state.bio}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="previousPositions">Previous Positions and Work History</label>
              <input
                type='text'
                placeholder='previousPositions'
                name='previousPositions'
                className='form-control'
                value={this.state.previousPositions}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="publications">Publications</label>
              <input
                type='text'
                placeholder='publications'
                name='publications'
                className='form-control'
                value={this.state.publications}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="social">Social Media Links</label>
              <input
                type='text'
                placeholder='social'
                name='social'
                className='form-control'
                value={this.state.social}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="contactDetails">Contact Details</label>
              <input
                type='text'
                placeholder='contactDetails'
                name='contactDetails'
                className='form-control'
                value={this.state.contactDetails}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="areasOfStudy">Areas of Study and Interests</label>
              <input
                type='text'
                placeholder='areasOfStudy'
                name='areasOfStudy'
                className='form-control'
                value={this.state.areasOfStudy}
                onChange={this.onChange}
              />
            </div>

            <button type="submit" className="btn btn-outline-info btn-lg btn-block">Update Profile</button>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default UpdateBookInfo;