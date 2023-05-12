import React, {useState, useRef} from "react";
import question from "../../images/questions.svg";
import flower from "../../images/flowerPull.svg";
import "./Questions.css";

function Questions() {
  const formRef = useRef(null)
  const scriptUrl = "https://script.google.com/macros/s/AKfycbzFZabR-MFxM1ypyjrLBTFVy8x5DIFMLxUln_xG6EM6e1uwhY5ZMoI-vHmChgGnVxvC/exec"
  const [loading, setLoading] = useState(false);
  const [isFormVisible, setisFormVisible] = useState(true);

  const handleSubmit = (e) =>{
      e.preventDefault();
      setLoading(true);
      const FormNew = new FormData(formRef.current);
      FormNew.append('Form', 'questions');

      fetch(scriptUrl, {
      method: 'POST',
      body: new FormData(formRef.current),

  }).then(res => {
          setLoading(false);
          setisFormVisible(false);
      })
      .catch(err => console.log(err))
  }
  
  return (
    <section className="question" id="questions">
      <div className="question__bloks">
        <img src={flower} alt="цветок" className="question__flower"></ img>
        { isFormVisible ?
          <div className="question__container">
            <img src={question} alt="опрос" className="question__header"></ img>
            <p className="question__text">Чтобы все прошло идеально и этот день запомнился надолго, пожалуйста, ответьте на несколько вопросов</p>
            <form className="question__form" ref={formRef} onSubmit={handleSubmit}>
            <p className="question__string">
              <label htmlFor="who" className="question__label-input">Имя и фамилия:</label>
              <input type="text" name="Имя и Фамилия" id="who" required className="question__input" minLength={2}></input>
            </p>
            <fieldset className="question__string">Предпочтения по еде:
              <label  htmlFor="trout" className="question__label">
                <input className="question__unvisible" type="radio" name="Еда" value="Форель на пару и цукини" id="trout"></input>
                <span className="question__visible-radio"></span>
                <span className="question__text-span">Форель на пару и цукини</span>
              </label>
              <label className="question__label" htmlFor="beef">
                <input className="question__unvisible" type="radio" name="Еда" value="Стейк из говядины и сырное пюре" id="beef"></input>
                <span className="question__visible-radio"></span>
                <span className="question__text-span">Стейк из говядины и сырное пюре</span>
              </label>
              <label className="question__label" htmlFor="duck">
                <input className="question__unvisible" type="radio" name="Еда" value="Утка, яблоки и сельдереевое пюре" id="duck"></input>
                <span className="question__visible-radio"></span>
                <span className="question__text-span">Утка, яблоки и сельдереевое пюре</span>
              </label>
            </fieldset>
            <fieldset className="question__string">Предпочтения по алкоголю:
            <label  htmlFor="whiskey" className="question__label">
                <input className="question__unvisible" type="checkbox" name="Виски" value="Виски" id="whiskey"></input>
                <span className="question__visible-checkbox"></span>
                <span className="question__text-span">Виски</span>
              </label>
              <label className="question__label" htmlFor="cognac">
                <input className="question__unvisible" type="checkbox" name="Коньяк" value="Коньяк" id="cognac"></input>
                <span className="question__visible-checkbox"></span>
                <span className="question__text-span">Коньяк</span>
              </label>
              <label className="question__label" htmlFor="dry white wine">
                <input className="question__unvisible" type="checkbox" name="Белое сухое" value="Белое сухое" id="dry white wine"></input>
                <span className="question__visible-checkbox"></span>
                <span className="question__text-span">Белое сухое вино</span>
              </label>
              <label className="question__label" htmlFor="sweet white wine">
                <input className="question__unvisible" type="checkbox" name="Белое сладкое" value="Белое сладкое" id="sweet white wine"></input>
                <span className="question__visible-checkbox"></span>
                <span className="question__text-span">Белое сладкое вино</span>
              </label>
              <label className="question__label" htmlFor="dry red wine">
                <input className="question__unvisible" type="checkbox" name="Красное сухое" value="Красное сухое" id="dry red wine"></input>
                <span className="question__visible-checkbox"></span>
                <span className="question__text-span">Красное сухое вино</span>
              </label>
              <label className="question__label" htmlFor="sweet red wine">
                <input className="question__unvisible" type="checkbox" name="Красное сладкое" value="Красное сладкое" id="sweet red wine"></input>
                <span className="question__visible-checkbox"></span>
                <span className="question__text-span">Красное сладкое вино</span>
              </label>
              <label className="question__label" htmlFor="no-alco">
                <input className="question__unvisible" type="checkbox" name="Б/а напитки" value="Б/а напитки" id="no-alco"></input>
                <span className="question__visible-checkbox"></span>
                <span className="question__text-span">Б/а напитки</span>
              </label>
            </fieldset>
            <button type="submit" className="question__button" disabled={loading ? true : false}>{loading ? "Отправка..." : "Подтвердить"}</button>
          </form> 
        </div>
        :
        <div>
          <img src={question} alt="опрос" className="question__header"></ img>
          <p className="question__answer">Форма отправлена!</p>
        </div>
        }
      </div>
    </section>
  );
}

export default Questions;