/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../../layout/HOC";
import axios from "axios";
import auth from "../../Auth";
import { Table } from "react-bootstrap";

const Orders = () => {
  const [plans, setPlans] = useState([]);

  const fetchOrders = async () => {
    const url = `https://b7w3czz0m2.execute-api.ap-south-1.amazonaws.com/development/api/admin/getAllPlanTypeByAdmin`;
    try {
      const res = await axios.get(url, auth);
      setPlans(res?.data);
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <>
      <section>
        <div>
          <p style={{fontSize : '20px' , color : 'black'}}>Plan Types</p>
        </div>

        <div  style={{width : '100%' , overflow : 'auto' ,fontSize : '16px' , marginTop : '20px'}}>
          <Table striped bordered hover>
            <thead>
              <tr >
                <th>
                  Plan Type
                </th>

                <th>
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {plans?.map((e, index) => {
                return (
                  <tr key={index} >
                    <td>
                      {e.Plantype}
                    </td>
                    <td><i class="fa-solid fa-trash" style={{}} ></i></td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </section>
    </>
  );
};

export default HOC(Orders);
