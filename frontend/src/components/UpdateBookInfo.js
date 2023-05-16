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
      degrees: ''
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
          degrees: res.data.degrees
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
      degrees: this.state.degrees
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
            <label htmlFor="position">Position</label>
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
            <label htmlFor="degrees">Degrees</label>
              <input
                type='text'
                placeholder='Degrees'
                name='degrees'
                className='form-control'
                value={this.state.degrees}
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