import React from 'react'

const CatList = (props) => {
    return (
        <div>
            {props.catPics.map(c => <div key={c.id}><img src={c.url} alt=''/></div>)}
        </div>
    )
}

export default CatList
