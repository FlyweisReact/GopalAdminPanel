import React from 'react'
import HOC from '../../layout/HOC'

const VendorCategory = () => {
  return (
    <>
      <div className="head-cont">
        <h1 className="display-6">Category</h1>
        <button className="btn btn-outline-success">Add Category</button>
      </div>
    </>
  )
}

export default HOC(VendorCategory)