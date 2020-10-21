import React from 'react';

// Functional Component

const Movie = (props) => {
    return (
        <div className="card">
            {
                // Minified if statement, condition ? true : false
                // image = movie.poster
                props.image == null || props.image === "N/A" ? <img className="default_img" src={'https://lh3.googleusercontent.com/proxy/KITMK-yIGyegP3_LSHQFE1BRv7GnjY4Qy726SgK9-GD47Dfd3ARXycJ_pDunYopx6CmFjPu2yrMR169tN3qT7VWplEI_4qzzsHhphOpVUtQKtwP-JCHtkoKVo3QsNxwf'} alt="No poster available" /> : <img src={props.image} alt="Movie Poster" />
            }
            <div className="content">
                <h4><a href="#">{props.title}</a></h4>
            </div>
        </div>
    )
}

export default Movie;