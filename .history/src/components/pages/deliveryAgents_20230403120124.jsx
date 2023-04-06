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
          <Button >Add Delivery Agents</Button>
    
        </div>

        <div>
          <Table striped bordered hover> 
            <thead>
              <tr>
                <th></th>
              </tr>
            </thead>
          </Table>
        </div>

        </section>
    </>
  );
};

export default HOC(Restaurant);
