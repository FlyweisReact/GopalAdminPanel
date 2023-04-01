import HOC from "../../layout/HOC";

const Users = () => {
  return (
    <>
      <section>
        <div>
        <p style={{color : 'black' , fontSize : '20px'}}> All Users</p>
        </div>

        <div className="wcomp overflow-y-auto">

        </div>
      </section>
    </>
  );
};

export default HOC(Users);
