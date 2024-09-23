import Item from './item'
const Practice = ({ propItem }) =>{
  return (
    <>
    <ul className="list-group">
      {/* {propItem.length == 0 ? <li className="list-group-item text-bg-dark text-center text-danger text-capitalize">no Content</li> : null} */}
      {propItem.length == 0 && <li className="list-group-item text-bg-dark text-center text-danger text-capitalize">no Content</li>}
      {propItem.map((item)=>(
        <Item key={item} nameItem={item}></Item>
      ))};
    </ul>
    </>
  );
};
export default Practice;