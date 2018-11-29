import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as BookData from './data';
import './App.css';

class Collection extends Component {
  constructor(props) {
  	super(props);
  	this.state = {
  		books: BookData.collection
  	}
  }
  renderBook(book) {
  	return <Book key={book.title} title={book.title} description={book.description} image={book.image} link={book.link}/>;
  }
  render() {
    return (
      <div className="Collection">
      	{this.state.books.map((book) => this.renderBook(book))}
      </div>
    );
  }
}

class Book extends Component {
  render() {
    return (
      <div className="Book">
	      <img src={this.props.image} className="Book-cover" alt="Book Cover" />
	      <h2 className="Book-title">{this.props.title}</h2> 
	      <p className="Book-description">{this.props.description}</p>
	      <a
	        className="Book-buy"
	        href={this.props.link}
	      >
	        Buy {this.props.title}
	      </a>
      </div>
    );
  }
}

ReactDOM.render(<Collection/>, document.getElementById("root"));
export default Collection;
