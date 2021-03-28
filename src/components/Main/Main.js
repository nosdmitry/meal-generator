import Description from "./Description/Description";
import Form from "./Form/Form";
import api from '../../utils/Api';
import { useEffect, useState } from "react";
import Button from "./Button/Button";
import Ingredients from "./Description/Ingredients";

function Main() {

  const [reciepe, setReciepe] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [ingredients, setIngredients] = useState({
    ingredients: [],
    measure: []
  });

  function handleRandomButton(event) {
    event.preventDefault();
    handleRandomRequest();
  }

  function handleRandomRequest() {
    return api.handleRandomQuery()
      .then(data => {
        setReciepe(data.meals[0])
        const inrgArray = [];
        const measureArray = [];
        for (let i = 1; i <= 20; i++) {
          const ingr = 'strIngredient' + i;
          const meas = 'strMeasure' + i;
          if (data.meals[0][ingr] === "" || data.meals[0][ingr] === null) { break; }
          
          inrgArray.push(data.meals[0][ingr]);
          measureArray.push(data.meals[0][meas]);

        }
        setIngredients({
          ingredients: inrgArray,
          measure: measureArray
        });
      })
      .catch(err => console.log('## ERROR ##', err))
  }

  function handleQueryRequest() {
    return api.search(searchQuery)
      .then(data => console.log(data))
      .catch(err => console.log('## search query failed ##', err));
  }

  function handleSubmitButton(event) {
    event.preventDefault();
    handleQueryRequest()
  }

  useEffect(() => {
    handleRandomRequest();
  }, [])

  useEffect(() => {
    handleQueryRequest()
  }, [searchQuery]);

  return (
    <main>
      <section className="input-form">
        <Form
          onSubmit={() => handleSubmitButton}
        />
        <Button
          title="Surprise me"
          onHandle={handleRandomButton}
        />
      </section>

      <Description
        title={ reciepe.strMeal }
        src={ reciepe.strMealThumb }
        instructions={ reciepe.strInstructions }
        ingredients={ ingredients.ingredients }
        measure={ ingredients.measure }
      />
    </main>
  );
}

export default Main;
