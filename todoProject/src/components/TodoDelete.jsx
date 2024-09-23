function TodoDelete(props){
  let todoName = props.name;
  let todoDate = props.Date;
    return (
      <div className="row mb-4">
        <div className="col-5 d-flex">
          <p className='font-bold'>{todoName}</p>
        </div>
        <div className="col-5 d-flex ">
          <p className='font-bold'>{todoDate}</p>
        </div>
        <div className='col-2'>
          <button type="submit" className='btn btn-danger delete'>Delete</button>
        </div>
      </div>
    );
}
export default TodoDelete;