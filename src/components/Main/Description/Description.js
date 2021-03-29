import './Description.scss';
import Ingredients from './Ingredients';

function Description(props) {

  return (
    <>
      <h2 className="cooking__title cooking__title_type_reciepe">{ props.title }</h2>
      <img className="cooking__image" src={props.src} alt="test" />
      <ul className="cooking__ingredients">
        {
          props.ingredients.map((item, i) => {
            return (
              <Ingredients 
                key={ i }
                ingredient={ item }
                measure= { props.measure[i] }
              />
            )
          })
        }
      </ul>
      <article className="cooking__instruction">
        { props.instructions }
      </article>
    </>
  );
}

export default Description;
