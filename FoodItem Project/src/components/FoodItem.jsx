const FoodItem = (props) => {
  let name = props.name;
  let desc = props.desc;
  let img = props.img;
  return(
    <>
      <div id="FoodDiv">
          <h2>{name}</h2>
          {img == "true" && <img src="https://www.w3schools.com/vue/img_quality.svg" alt="" />}
          <p>{desc}</p>
      </div>
    </>
  );
}
export default FoodItem;