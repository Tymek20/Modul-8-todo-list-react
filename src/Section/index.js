import "./style.css";

const Section = ({ title, body, extraHeaderContent }) => (

    <section className="tasks">
        <header className="tasks__header">
            <div className="tasks__title">{title}</div>
            {extraHeaderContent}
        </header>
        <div className="tasks__paragraph">
            {body}
        </div>
    </section>
);

export default Section;