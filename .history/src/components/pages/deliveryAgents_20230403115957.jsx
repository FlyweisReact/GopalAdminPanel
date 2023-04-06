import React from "react";
import HOC from "../layout/HOC";

const Restaurant = () => {
  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <p style={{fontSize : '20px' , color  : 'black'}}>
            Delivery Agents
          </p>
    
        </div>
  
        <div className=" wcomp overflow-y-auto">

   
        </div>
      </section>
    </>
  );
};

export default HOC(Restaurant);
