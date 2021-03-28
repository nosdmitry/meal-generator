function Ingredients(props) {
  return (
    <li className="cooking__list">{ props.ingredient } - { props.measure }</li>
  ); 
}

export default Ingredients;
