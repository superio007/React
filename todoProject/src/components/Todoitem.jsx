function Todoitem({dueDate , name,deleteItem,index}) {
  let todoName = name;
  let todoDate = dueDate;
    return (
      <div className="row mb-4"> 
        <div className="col-5 d-flex">
          <p className='font-bold'>{todoName}</p>
        </div>
        <div className="col-5 d-flex ">
          <p className='font-bold'>{todoDate}</p>
        </div>
        <div className='col-2'>
          <button type="submit" onClick={() => deleteItem(index)}  className='btn btn-danger delete'>Delete</button>
        </div>
      </div>
    );
}
export default Todoitem;