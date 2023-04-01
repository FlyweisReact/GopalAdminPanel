import React, { useState } from 'react'
import HOC from '../layout/HOC'

const AdminBanner = () => {
  const [ data ,setData ] = useState([])

  const fetchData =  async () => {
    try{
      cosn
    }catch(e){
      console.log(e)
    }
  }

  return (
    <>
          <section>
        <div>
          <p
            style={{
              color: "black",
              fontSize: "20px",
              textDecoration: "underline",
            }}
          >
            {" "}
            All Banners
          </p>
        </div>

      </section>
    </>
  )
}

export default HOC(AdminBanner)