import "./style.css";

const Form = () => (
    <form className="form__input">
        <input className="form__newTask" placeholder="Co jest do zrobienia?" autoFocus />
        <button className="form__addButton">Dodaj zadanie</button>
    </form>
);

export default Form;