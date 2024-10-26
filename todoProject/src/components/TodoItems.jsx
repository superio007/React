import TodoItem from './Todoitem'
let TodoItems = ({ list , deleteItem }) => {
  return (
    <>
      {list.map((item,index)=>(
        <TodoItem key={index} name={item.name} deleteItem={() => deleteItem(index)} dueDate={item.dueDate} />
      ))}
    </>
  );
}
export default TodoItems;
