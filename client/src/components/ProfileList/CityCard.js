// Generates card with City search and Park info displayed on Home Page

import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
// park seed data html
const CityCard = ({ data: {review, parkName, parkLocation, leash, address}}) => {
  console.log(leash)
  return (
      <> 
    <div className="card col-lg-4 col-sm-6 m-2" style={{width: "18rem"}}>
    <div class="card-body">
    <img src="https://source.unsplash.com/random" alt="display image" style={{width: "100%"}}/>
        <h5 class="card-title">{parkName}</h5>
        <p class="card-text">{parkLocation}</p>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">{address}</li> 
        <li class="list-group-item">{leash ? "Leash: ✔" : "Leash: ✖"}</li>
        <li class="list-group-item">{review}</li>
    </ul>
    <div class="card-body">
        <a href="#" class="card-link">Website</a>
    </div>
    </div>
    </>
  );
};

export default CityCard;
