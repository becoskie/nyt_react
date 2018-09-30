import React from "react";
import "./SavedCard.css";

const SavedCard = props => {
  const saveCard = props.saved.map(a => (
    <div className="container col-12 mb-4" key={a._id}>
      <div className="card">
        <div className="card-body">
        <a href={a.url} target="_blank" className="card-link">
            <h5 className="card-title">{a.title}</h5>
          </a>
          <p className="author card-text">{a.author}</p>
          <p className="card-text">{a.desc}</p>
          <p className="card-text">{a.section}</p>
          <p className="card-text">{a.date}</p>
          <button type="submit" className="btn btn-danger" onClick={() => props.handleDelete(a._id)} title="Click to delete this article.">Delete</button>
        </div>
      </div>
    </div>
  ));

  return <div className="row">{saveCard}</div>;
};

export default SavedCard;