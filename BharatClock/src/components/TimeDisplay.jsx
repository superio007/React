function TimeDisplay(){
  let time = new Date;
  return (
    <div>
      <p className="lead">This is the current time : {time.toLocaleDateString()} - {time.toLocaleTimeString()}</p>
    </div>
  );
}
export default TimeDisplay;