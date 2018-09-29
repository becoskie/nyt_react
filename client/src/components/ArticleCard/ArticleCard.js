import React from "react";
import "./ArticleCard.css";

const ArticleCard = props => (
    <div className="container col-12">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="card-link">
            Card link
          </a>
        </div>
      </div>
    </div>
);

export default ArticleCard;
