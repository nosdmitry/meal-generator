function Button(props) {
  return (
    <button 
      className="col"
      onClick={ props.onHandle }
    >
      {props.title}
    </button>            
  );
}

export default Button;
