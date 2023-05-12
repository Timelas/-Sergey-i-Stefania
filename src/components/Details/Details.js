import React from "react";
import details from "../../images/Details.svg";
import "./Details.css";

function Details() {
  return (
    <section className="details" id="details">
      <img src={details} alt="детали" className="details__header"></ img>
      <p className="details__text">Приятным комплиментом для нас будет, если вместо цветов вы решите подарить нам бутылочку красного мартини для нашего
семейного бара.</p>
      <p className="details__text">Мы будем признательны, если вы поможете нам осуществить мечту о путешествии, подарив ваши пожелания в конверте.</p>
      <p className="details__text">От всего сердца просим вас воздержаться от криков "Горько!"
и сохранить атмосферу уютного семейного праздника.</p>
    </section>
  );
}

export default Details;