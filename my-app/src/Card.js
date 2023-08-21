import React from 'react'

const Card = (props) => {
    return(
        <div className='tc bg-purple dib br4 pa3 ma2 grow bw-2 shadow-5'>
            <img alt="robots" src={`https://robohash.org/${props.id}?100x100`}/>
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    )
}


export default Card