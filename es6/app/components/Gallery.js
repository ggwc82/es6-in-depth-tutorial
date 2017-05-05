import React, { Component } from 'react';

class Gallery extends Component {
	render(){
		let alternate = "https://literalminded.files.wordpress.com/2010/11/image-unavailable1.png";
		return (
			<div>
				{
					this.props.items.map((item, index) => {
						let {title, imageLinks, infoLink} = item.volumeInfo;
						return (
							<a key={index} className="book" href={infoLink} target="_blank">
							<img className="book-img" src={imageLinks !== undefined ? imageLinks.thumbnail : alternate} alt="book image"/>
							<div className="book-text">{title}</div>
							</a>
						)
					})
				}
			</div>
		)
	}
}

export default Gallery;