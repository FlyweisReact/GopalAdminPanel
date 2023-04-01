import React, { useState } from 'react'
import HOC from '../layout/HOC'

const AdminBanner = () => {
  const [ data ,setData ] = useState([])

  const fetchData =  async () => {
    try{

    }catch(e){
      console.log()
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