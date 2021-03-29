import Loading from '../../Loading/Loading';

function Intro() {
  return (
    <>
      <h2 className="cooking__title">Press 'Suprise me' button to find something to cook</h2>
      <p className="cooking__subtitle">or search 'chicken', 'cake' or some other yammy staf</p>
      <Loading />
    </>
  );
}

export default Intro;
