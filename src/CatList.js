// write your CatList component here
import React, { Component } from 'react';

class CatList extends Component {
    renderImages = list => {
        return list.map(cat => {
            return (
                <img src={cat.url} alt="loading"></img>
            )
        })
    }

    render() {
        console.log(this.props)
        return (
            <div>
                {this.renderImages(this.props.catPics)}
            </div>
        )
    }
}

export default CatList