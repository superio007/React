
function list(props) {
  let name = props.name
  return (
    <>
        <div className="list-group">
            <a href="#" className="list-group-item list-group-item-action">{name}</a>
        </div>
    </>
  )
}
export default list