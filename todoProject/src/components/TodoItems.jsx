import TodoItem from './Todoitem'
console.log('TodoItems')
let TodoItems = ({ list }) => {
  return (
    <>
      {list.map((item)=>(
        <TodoItem key={item.name} name={item.name} DueDate={item.DueDate} />
      ))}
    </>
  );
}
export default TodoItems;
