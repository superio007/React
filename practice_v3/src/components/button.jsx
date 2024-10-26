function button (props){

  return (
    <button type="button" onClick={() => props.handleclick()} className="btn btn-primary">Primary {props.count}</button>
  )
}
export default button;