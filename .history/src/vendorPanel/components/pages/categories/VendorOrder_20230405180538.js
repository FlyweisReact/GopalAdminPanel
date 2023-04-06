import React from 'react'
import HOC from '../../layout/HOC'

const VendorOrder = () => {
  const data = [
    {
      image:
        "https://loveincorporated.blob.core.windows.net/contentimages/gallery/d9e900e4-212e-4c3d-96d5-cb14a023c659-worlds-most-delicious-dishes.jpg",
      title: "Dum Biryani",
      Description: "Lorem Ipsum dolor adame",
      price: "229.5",
      dPrice: "525.5",
      rating: "5",
      discount: "5",
    },
  ];

  return (
    <>
      <div className="head-cont">
        <h1 className="display-6">Dishes</h1>
        <button className="btn btn-outline-success">Add Dishes</button>
      </div>

      <div className="table-cont">
        <Table striped bordered hover className="table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Description</th>
              <th>Price</th>
              <th>Discounted Price</th>
              <th>Rating</th>
              <th>Discount</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((i, index) => (
              <tr key={index}>
                <td>
                  <img src={i.image} alt="" className="img-thumbnail" />
                </td>
                <td> {i.title} </td>
                <td> {i.Description} </td>
                <td> ₹{i.price} </td>
                <td style={{ textDecoration: "line-through" }}>
                  {" "}
                  ₹{i.dPrice}{" "}
                </td>
                <td> {i.rating} </td>
                <td> {i.discount} </td>
                <td> Lunch </td>
                <td>
                  <i className="fa-solid fa-trash" />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default HOC(VendorOrder)