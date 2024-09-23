function NameList(){
  let PlayerNames = ['Kiran','Kartik','Mayur','Omkar','Veenu sir','Ritika'];
  // let PlayerNames = [];
  //conditional render using if else

  // if(PlayerNames.length === 0){
  //   return <h3>No plyers are available</h3>
  // }

  
  return (
    <>
      <h1>Players List</h1>
      {/* conditional render using ternary operator */}
      {/* {PlayerNames.length===0 ? <h3>No plyers are available</h3> : null} */}
      {/* conditional render using logical operator */}
      {PlayerNames.length===0 && <h3>No plyers are available</h3>}
      <ul className="list-group">
        {PlayerNames.map((item)=>(
          <li key={item} className="list-group-item">{item}</li>
        ))}
      </ul>
    </>
  );
}
export default NameList;