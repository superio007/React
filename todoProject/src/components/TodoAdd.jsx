function TodoAdd(){
return(
  <div className="row mb-4">
    <div className="col-5 d-flex">
      <input type="text" className='px-3 w-100' placeholder='Enter Todo here'/>
    </div>
    <div className="col-5 d-flex ">
      <input type="date" className='px-3 w-100'/>
    </div>
    <div className='col-2'>
      <button type="submit" className='btn btn-success px-5 py-3'>Add</button>
    </div>
  </div>
);
}
export default TodoAdd;