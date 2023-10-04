import React from 'react';

const SingleData = (props) => {
    console.log(props.singleData);
    const {image, features, name ,published_in}= props.singleData;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>Features:{features}</p>
    <p>Published_in:{published_in}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default SingleData;