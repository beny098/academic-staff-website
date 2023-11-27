import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


class CreateBook extends Component {
  constructor() {
    super();
    this.state = {
      fullname: '',
      email:'',
      position:'',
      degrees:'',
      bio:'',
      previousPositions:'',
      publications:'',
      social:'',
      contactDetails:'',
      areasOfStudy:''
    };
  }

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
      .post('https://academic-staff-website-3c01a8711142.herokuapp.com/api/books', data)
      .then(res => {
        this.setState({
          fullname: '',
          email:'',
          position:'',
          degrees:'',
          bio:'',
          previousPositions:'',
          publications:'',
          social:'',
          contactDetails:'',
          areasOfStudy:''
        })
        this.props.history.push('/');
      })
      .catch(err => {
        console.log("Error in CreateBook!");
      })
  };

  render() {
    return (
      <div className="CreateBook">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Profile List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Profile</h1>
              <p className="lead text-center">
                  Create new Profile
              </p>

              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
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
                  <input
                    type='text'
                    placeholder='Position'
                    name='position'
                    className='form-control'
                    value={this.state.position}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
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
                  <input
                    type='text'
                    placeholder='Previous Positions'
                    name='previousPositions'
                    className='form-control'
                    value={this.state.previousPositions}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Publications'
                    name='publications'
                    className='form-control'
                    value={this.state.publications}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Social'
                    name='social'
                    className='form-control'
                    value={this.state.social}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Contact Details'
                    name='contactDetails'
                    className='form-control'
                    value={this.state.contactDetails}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Areas Of Study'
                    name='areasOfStudy'
                    className='form-control'
                    value={this.state.areasOfStudy}
                    onChange={this.onChange}
                  />
                </div>

                <input
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateBook;