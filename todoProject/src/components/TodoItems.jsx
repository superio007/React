import Todoitem from './Todoitem'
let TodoItems = ({itemsArr}) => {
  {itemsArr.map((item)=>{
    <Todoitem ItemProp={item}></Todoitem>
  })}
}
export default TodoItems;