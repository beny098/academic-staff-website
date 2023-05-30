import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const ProfileCard = (props) => {
    const  book  = props.book;

    return(
        <div className="card-container">
            <Link to={`/show-book/${book._id}`}>
            <img src="https://st3.depositphotos.com/6672868/13701/v/1600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg" alt="" />
            </Link>
            <div className="desc">
                <h2>
                    <Link to={`/show-book/${book._id}`}>
                        { book.fullname }
                    </Link>
                </h2>
                <p>{book.position}</p>
            </div>
        </div>
    )
};

export default ProfileCard;
