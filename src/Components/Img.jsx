let img = (props) => {
  console.log(props);
  return (
    <div>
      <img
        src={props.img}
        alt={props.img}
        style={{ width: props.width, height: props.height }}
      />
    </div>
  );
};
export default img;
