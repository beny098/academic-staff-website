import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

class UpdateBookInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      isbn: '',
      author: '',
      description: ''
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:8082/api/books/'+this.props.match.params.id)
      .then(res => {
        // this.setState({...this.state, book: res.data})
        this.setState({
          title: res.data.title,
          isbn: res.data.isbn,
          author: res.data.author,
          description: res.data.description
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
      title: this.state.title,
      isbn: this.state.isbn,
      author: this.state.author,
      description: this.state.description
    };

    axios
      .put('http://localhost:8082/api/books/'+this.props.match.params.id, data)
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
              <label htmlFor="title">Fullname</label>
              <input
                type='text'
                placeholder='Title of the Book'
                name='title'
                className='form-control'
                value={this.state.title}
                onChange={this.onChange}
              />
            </div>
            <br />

            <div className='form-group'>
            <label htmlFor="isbn">Email</label>
              <input
                type='text'
                placeholder='ISBN'
                name='isbn'
                className='form-control'
                value={this.state.isbn}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="author">Position</label>
              <input
                type='text'
                placeholder='Author'
                name='author'
                className='form-control'
                value={this.state.author}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="description">Degrees</label>
              <input
                type='text'
                placeholder='Describe this book'
                name='description'
                className='form-control'
                value={this.state.description}
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