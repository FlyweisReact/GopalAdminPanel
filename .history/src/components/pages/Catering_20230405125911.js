import React from 'react'

const Catering = () => {
  return (
    <>
         <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <p style={{ fontSize: "20px", color: "black" }}>All Restaurant</p>
          <Button
            variant="outline-success"
            style={{ fontSize: "20px" }}
          >
            Add Restaurant
          </Button>
        </div>
    </>
  )
}

export default Catering