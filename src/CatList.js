import React from 'react'

class CatList extends React.Component {

    catList = () => {
        if (this.props.loading === true) {
            debugger
            return "Loading..."
        } else {
            debugger
            return this.props.catPics.map( catPic => <img key={catPic.id} src={catPic.url} alt={catPic.id} />)
        }
    }
    

    render() {
        return (
            <div>
                {this.catList()}
            </div>
        )
    }
}

export default CatList