function TodoAdd(props){
  function getData(){
    let name = document.getElementById("name").value;
    let dueDate = document.getElementById("date").value;
    props.addItem(name,dueDate);
  }
return(
  <div className="row mb-4">
    <div className="col-5 d-flex">
      <input type="text" id="name" className='px-3 w-100' placeholder='Enter Todo here'/>
    </div>
    <div className="col-5 d-flex ">
      <input type="date" id="date" className='px-3 w-100'/>
    </div>
    <div className='col-2'>
      <button type="submit" onClick={() => getData()} className='btn btn-success px-5 py-3'>Add</button>
    </div>
  </div>
);
}
export default TodoAdd;