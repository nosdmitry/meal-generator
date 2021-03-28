function Description(props) {
  return (
    <section className="cooking">
      <img className="cooking__image" src={props.src} alt="test" />
      <ul className="cooking__ingredients">
        <li>one</li>
        <li>two</li>
        <li>three</li>
      </ul>
      <article className="cooking__description">

      </article>
    </section>
  );
}

export default Description;
