// write your CatList component here
import React from 'react'



export default function CatList(props) {
    return (
        <div>
            {props.catPics.map((catPic) => {return (<img src={catPic.url} alt=''/>)})}
        </div>
    )
}