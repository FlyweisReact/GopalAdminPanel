import React from 'react'
import HOC from '../layout/HOC'

const AdminBanner = () => {
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