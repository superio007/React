function ListMap(){
  let FoodList = ['Dal','Rice','Biryani','Pizzza','Choclate cake','Ice cream']
  return(
    <>
      <h1>Healthy List</h1>
      <ul classname="list-group">
        {FoodList.map((item)=>(
          <li key={item} classname="list-group-item">{item}</li>
        ))}
      </ul>
    </>
  );
}
export default ListMap;