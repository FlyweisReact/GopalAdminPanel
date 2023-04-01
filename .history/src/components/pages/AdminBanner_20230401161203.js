import axios from 'axios'
import React, { useState } from 'react'
import HOC from '../layout/HOC'

const AdminBanner = () => {
  const [ data ,setData ] = useState([])
  const token = localStorage.getItem('direct')
  console.log(token)

  const fetchData =  async () => {
    try{
      const  { data } = await axios.get("https://b7w3czz0m2.execute-api.ap-south-1.amazonaws.com/development/api/adminbanner" , {
        headers : {
          Auth
        }
      })
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