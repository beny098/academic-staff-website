import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BookCard from './BookCard';

class ShowBookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  componentDidMount() {
    axios
      .get('https://academic-staff-website.herokuapp.com/api/books')
      .then(res => {
        this.setState({
          books: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowBookList');
      })
  };


  render() {
    const books = this.state.books;
    console.log("PrintBook: " + books);
    let bookList;

    if(!books) {
      bookList = "there is no book record!";
    } else {
      bookList = books.map((book, k) =>
        <BookCard book={book} key={k} />
      );
    }

    return (
      //<div className="ShowBookList">
        /*<div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Academic Staff</h2>
            </div>

            <div className="col-md-11">
              <Link to="/create-book" className="btn btn-outline-warning float-right">
                + Add New Profile
              </Link>
              <br />
              <br />
              <hr />
            </div>

          </div>*/

          <div>
            <section class="pb-12 md:pb-24 lg:pb-32 bg-black">
        <nav class="relative px-6 lg:px-16 py-9">
          <div class="flex items-center">
            <a class="inline-block text-lg font-bold" href="#">
              <img class="w-12 h-12" src="images/aut_university_icon.png" alt="AUT University Icon">
              </img>
            </a>
            <div class="lg:hidden ml-auto">
              <button class="navbar-burger flex items-center p-3 text-white hover:text-yellow-500">
                <svg class="block h-4 w-4" stroke="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <title>Mobile menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
              </button>
            </div>
            <ul class="hidden lg:flex lg:w-auto lg:space-x-12 ml-16 mr-auto">
              <li><a class="inline-block text-sm text-gray-50 hover:text-yellow-500 font-medium" href="#">Events</a></li>
              <li><a class="inline-block text-sm text-gray-50 hover:text-yellow-500 font-medium" href="#">Academic</a></li>
              <li><a class="inline-block text-sm text-gray-50 hover:text-yellow-500 font-medium" href="#">Campus</a></li>
              <li class="group relative">
                <a class="inline-flex items-center text-sm text-gray-50 hover:text-yellow-500 font-medium" href="#">
                  <span class="mr-3">Browse</span>
                  <svg width="12" height="7" viewbox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.6666 1L5.99998 5.66667L1.33331 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </a>
                <div class="hidden group-hover:block absolute top-full left-0 w-40 pt-3 pb-6 px-4 bg-black z-10">
      <a class="block text-sm mb-2 text-white hover:text-yellow-500" href="#">Link 1</a><a class="block text-sm mb-2 text-white hover:text-yellow-500" href="#">Link 2</a><a class="block text-sm text-white hover:text-yellow-500" href="#">Link 3</a>
      </div>
              </li>
            </ul>
            <div class="hidden lg:block">
              <a class="group inline-flex items-center" href="#">
                <span class="text-white group-hover:text-yellow-500">
                  
                </span>
                <span class="-ml-2 px-2 border-2 border-black bg-yellow-500 group-hover:bg-yellow-400 rounded-full">
                  <span class="text-sm font-bold">Find  people</span>
                </span>
              </a>
            </div>
          </div>
        </nav>
        <div class="container mx-auto px-4 relative">
          <div class="flex flex-wrap -mx-4 pt-20 justify-center items-center relative">
            <div class="xl:w-1/2 px-4 mb-16 lg:mb-0">
              <div class="relative xl:-ml-40 max-w-md md:max-w-lg lg:max-w-xl mx-auto lg:py-12">
                <h1 class="block font-heading text-6xl sm:text-8xl font-bold text-white">Congratulations</h1>
                <h1 class="sm:pl-6 lg:pl-16 font-heading text-6xl sm:text-8xl font-bold text-yellow-500 mb-6">Class  2023</h1>
                <div class="sm:ml-12 xl:ml-40">
                  <p class="text-2xl font-light text-white mb-6">Welcome to the new students. You can get to know your professor major in advance.</p>
                  <a class="group inline-flex items-center text-xl text-white hover:text-yellow-500 font-bold" href="#">
                    <span class="mr-3">Teaching 2023 details</span>
                    <span class="animate-bounce">
                      <svg width="11" height="12" viewbox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.95669 1.75742L9.55635 1.75742M9.55635 1.75742L9.55635 8.35709M9.55635 1.75742L1.07107 10.2427" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div class="xl:w-1/2 px-4 xl:order-first">
              <div class="block md:flex max-w-2xl lg:max-w-none mx-auto">
                <div class="flex flex-col justify-center mb-6 md:mb-0 md:mr-8 xl:mr-20">
                  <button class="inline-block mb-6 text-sm font-bold text-yellow-500">01</button>
                  <button class="inline-block mb-6 text-sm font-bold text-gray-400 hover:text-gray-200">02</button>
                  <button class="inline-block text-sm font-bold text-gray-400 hover:text-gray-200">03</button>
                </div>
                <div>
                  <img class="block mx-auto" src="https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?crop=entropy&amp;cs=srgb&amp;fm=jpg&amp;ixid=M3wzMzIzMzB8MHwxfHNlYXJjaHwxNXx8Z3JhZHVhdGlvbnxlbnwwfHx8fDE2ODQ1NjIzMzh8MA&amp;ixlib=rb-4.0.3&amp;q=85&amp;w=1920" alt="">
                  </img>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
          <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
          <nav class="relative flex flex-col py-6 px-6 w-full h-full bg-white border-r overflow-y-auto">
            <div class="flex items-center mb-8">
              <a class="mr-auto text-2xl font-medium leading-none" href="#">
                <img class="" src="images/aut_university_icon.png" alt="" width="auto">
                </img>
              </a>
              <button class="navbar-close">
                <svg class="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <div>
              <ul>
                <li class="mb-1"><a class="block p-4 font-medium text-black hover:bg-gray-50" href="#">Events</a></li>
                <li class="mb-1"><a class="block p-4 font-medium text-black hover:bg-gray-50" href="#">Academic</a></li>
                <li class="mb-1"><a class="block p-4 font-medium text-black hover:bg-gray-50" href="#">Campus</a></li>
                <li class="mb-1"><a class="block p-4 font-medium text-black hover:bg-gray-50" href="#">Browse</a></li>
              </ul>
            </div>
            <div class="mt-auto">
              <div class="pt-6">
      <a class="block mb-2 py-3 text-sm text-center border border-gray-200 hover:border-gray-400 font-bold" href="#">Login</a><a class="block py-3 text-sm text-center text-black bg-yellow-500 hover:bg-yellow-600 font-bold transition duration-200" href="#">Sign In</a>
      </div>
            </div>
          </nav>
        </div>
      </section>


          <div className="list">
                {bookList}
          </div>
          </div>
        //</div>
      //</div>
    );
  }
}

export default ShowBookList;