import Description from "./Description/Description";
import Input from "./Input/Input";
import api from '../../utils/Api';
import { useEffect, useState } from "react";

function Main() {

  const [reciepe, setReciepe] = useState([]);

  function handleRandomButton(event) {
    event.preventDefault();
    handleRandomRequest();
  }

  function handleRandomRequest() {
    return api.handleRandomQuery()
      .then(data => {
        setReciepe(data.meals[0]);
      })
      .catch(err => console.log('## ERROR ##', err))
  }

  useEffect(() => {
    handleRandomRequest();
  }, [])

  console.log(reciepe);

  return (
    <main>
      <section className="input-form">
        <form>
          <div className="container">
            
            <Input />
            <button className="col">find</button>
            
          </div>
          <button className="col" onClick={ handleRandomButton }>surprise me</button>
        </form>
      </section>

      <Description 
        src={ reciepe.strMealThumb }
      />

    </main>
  );
}

export default Main;
