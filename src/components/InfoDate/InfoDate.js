import React from "react";
import names from "../../images/names.svg";
import flower from "../../images/flower2.svg";
import where from "../../images/where.svg";
import banquet from "../../images/banquet.svg";
import flowermap from "../../images/flower.svg";
import flowermapWhite from "../../images/flowerw.svg";
import "./InfoDate.css";

function InfoDate() {
  return (
    <section className="info-date">
      <div className="info-date__invitation">
        <img className="info-date__who" alt="Сергей и Стефания" src={names}></img>
        <p className="info-date__text">Приглашают вас на свадьбу </p>
        <div className="info-date__info">
          <p className="info-date__text info-date__text_position_right">18 СЕНТЯБРЯ <br /> 2023 ГОДА</p>
          <img className="info-date__flower" alt="цветок" src={flower}></img>
          <p className="info-date__text info-date__text_position_left">ПОНЕДЕЛЬНИК <br />15 ЧАСОВ</p>
        </div>
      </div>
      <div className="info-date__place" id="place">
        <div className="info-date__check-in info-date__check-in_color_white">
          <div className="info-date__block-text">
            <img className="info-date__where" alt="торжественная регистрация" src={where}></img>
            <p className="info-date__text info-date__text_position_right">Дворец Бракосочетаяния 1 <br /> Английская набережная, 28 <br />Сбор гостей в 15.00<br />Начало в 15.20</p>
          </div>
          <div className="info-date__with-map">
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A46d88a0009071250c064c30503a26d3cf6644cf299e1b141f328c94ae0a5180d&amp;source=constructor"
              frameBorder="0" title="ЗАГС" className="info-date__map"></iframe>
            <img className="info-date__flower-map" alt="цветок" src={flowermap}></img>
          </div>
        </div>
        <div className="info-date__check-in info-date__check-in_color_grey">
          <div className="info-date__with-map">
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Abd356beb7724aa398fee8236be3b813cd4ed5afe081f36c6d5a33f67245094a3&amp;source=constructor" 
              frameBorder="0" title="ресторан" className="info-date__map info-date__map-left"></iframe>
            <img className="info-date__flower-map-white" alt="цветок" src={flowermapWhite}></img>
          </div>
          <div className="info-date__block-text">
            <img className="info-date__where info-date__where_position_left" alt="праздничный банкет" src={banquet}></img>
            <p className="info-date__text info-date__text_position_left">Бар "Сезоны"<br />Наб. реки Фонтанки, 66 <br />Начало в 16.20</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfoDate;