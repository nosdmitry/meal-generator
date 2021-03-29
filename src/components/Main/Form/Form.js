import Button from '../Button/Button';
import './Form.scss';

function Form({ onSubmit }) {
  return (
    <form onSubmit={ onSubmit }>
      <div className="">
        <input type="text" className="col" placeholder="Enter something" />
        <Button
          title="Search"
          className="input-form__button"
        />
      </div>
    </form>
  );
}

export default Form;
