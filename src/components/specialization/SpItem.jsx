import React from 'react'

function SpItem({title,image,desc}) {
    return (
        <div className='SpItem'>
        
            <div className='SpItem-Container'>
              <img src={image} alt=""/>
            </div>
            <h5>{title}</h5>
            
            <div className='spItem-desc'>
            {desc}
            </div>
        </div>
    )
}

export default SpItem
