import "./style.css";

const Section = ({ title, body, extraHeaderContent }) => (
    <section className="sections">
        <header className="sections__header">
            <div className="sections__title">{title}</div>
            {extraHeaderContent}
        </header>
        <div className="sections__paragraph">
            {body}
        </div>
    </section>
);

export default Section;