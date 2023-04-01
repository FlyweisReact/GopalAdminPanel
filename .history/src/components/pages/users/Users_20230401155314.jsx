import HOC from "../../layout/HOC";

const Users = () => {
  return (
    <>
      <section>
        <div>
        <p style={{color : 'black' , fontSize : '20px' , textDecoration : 'underline'}}> All Users</p>
        </div>

        <div style={{width : '100%' , overflowY : 'auto'}}>
        <Table
        </div>
      </section>
    </>
  );
};

export default HOC(Users);
