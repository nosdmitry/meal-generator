import './Description.scss';
import Ingredients from './Ingredients';

function Description(props) {

  return (
    <section className="cooking">
      <h2 className="cooking__title">{ props.title }</h2>
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
      <article className="cooking__description">
        { props.instructions }
      </article>
    </section>
  );
}

export default Description;
