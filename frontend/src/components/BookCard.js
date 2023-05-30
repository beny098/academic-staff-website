import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const ProfileCard = (props) => {
    const  book  = props.book;

    return(
        <div className="card-container">
            <Link to={`/show-book/${book._id}`}>
            <img src="https://www.seekpng.com/png/full/966-9665493_my-profile-icon-blank-profile-image-circle.png" alt="" />
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
