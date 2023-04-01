import axios from 'axios'
import React, { useEffect, useState } from 'react'
import HOC from '../layout/HOC'

const AdminMeal = () => {

    const [ data , setData ] = useState([])

    const fetchData = async () => {
        try{
            const { data } = await axios.get("https://b7w3czz0m2.execute-api.ap-south-1.amazonaws.com/development/api/adminMeal")
            setData(data)
        }catch(e) { 
            console.log(e)
        }
    }

    useEffect(() => {
        fetchData()
    }.[])
  return (
    <>
    <div>
        <p style={{fontSize : '20px' , color : 'black'}}>Admin Meals</p>
    </div>
    </>
  )
}

export default HOC(AdminMeal)