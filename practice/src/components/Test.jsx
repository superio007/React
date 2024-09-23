import Item from './item'
function test({ propItem }){
    // let names = ['Kiran','Kartik','Ritika','Omkar','Mayur'];
    // let names =[];
    return(
        <>
        <ul className="list-group">
            {propItem.length == 0 ? <li className="list-group-item text-bg-dark text-center text-danger text-capitalize">no Content</li> : null}
            {/* {props.propItem.length == 0 && <li className="list-group-item text-bg-dark text-danger text-center">No content</li>} */}
            {propItem.map((item)=>(
                <Item key={item} nameItem={item}></Item>
            ))}
        </ul>
        </>
    );
}
export default test;