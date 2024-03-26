import React from "react";

const Homepage = ({obj2, value1 ,value2 ,ishomepage}) => { 
    
   

  return (
    <div>
      Home page cooming soon

      <h1>Name:{obj2.name}</h1>
      <h3>Age:{obj2.age}</h3>
      <p>
        {obj2.name} live in {obj2.Address}
      </p>

      <h1> {ishomepage ? value2 : value1} </h1>

    </div>
  );
};

export default Homepage;
