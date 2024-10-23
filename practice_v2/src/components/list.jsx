import style from "./list.module.css";

function list(props) {
  let name = props.name;
  return (
    <>
      <div id={style.list} className={props.mark == true ? style.mark : ""}>
        <div className="list-group ">
          <a href="#" className="list-group-item list-group-item-action">
            {name}
          </a>
        </div>
        <button
          onClick={() => props.handleclick(name, event)}
          id="button"
          className="btn btn-danger"
        >
          Mark
        </button>
      </div>
    </>
  );
}
export default list;
