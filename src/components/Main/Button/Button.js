function Button(props) {
  return (
    <button 
      className={ props.className }
      onClick={ props.onHandle }
    >
      {props.title}
    </button>            
  );
}

export default Button;
