import React from 'react'

const Box = (props) => {
    // let thisStyle = {
    //     backgroundColor: props.color,
    //     marginLeft: 200,
    // };
    // return (
    //     <div className="aws" key={props.key} style={thisStyle}></div>
    // )
    // let x = props.dives;
    let x = Array.from(props.dives);
    return (
        <div style={{display:'flex'}} className="boxz">
            {x.map(
                (item, index) => {
                    let arr = [];
                    for(let i = 1; i <= item.number; i++) {
                        arr.push(<div className="onebox" style={{width:item.width+ 'px', height: item.height+'px', backgroundColor: item.color, margin:3+'px'}}></div>)
                    }
                    return arr;
                } 
            )}
        </div>
    )
}

export default Box
