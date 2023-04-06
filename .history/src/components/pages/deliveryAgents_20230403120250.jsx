import React from "react";
import { Button, Table } from "react-bootstrap";
import HOC from "../layout/HOC";

const Restaurant = () => {


  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <p style={{fontSize : '20px' , color  : 'black'}}>
            Delivery Agents
          </p>
          <Button variant="outline-success" style={{fontSize : '20px'}} >Add Delivery Agents</Button>
    
        </div>

        <div style={{width : '100%' , over}}>
          <Table striped bordered hover> 
            <thead>
              <tr>
                <th>restaurantId</th>
                <th>discountPercent</th>
                <th>name</th>
                <th>address</th>
                <th>phone</th>
                <th>email</th>
                <th>isAvailable</th>
                <th>currentOrder</th>
              </tr>
            </thead>
          </Table>
        </div>

        </section>
    </>
  );
};

export default HOC(Restaurant);
