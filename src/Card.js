import "./Card.css";

export default function Card({icon, title, body, color}) {
    return (
        <>
            <div className={`Card ${color}`}>
                <div className="Car">
                    <img src={icon} alt="icon" />
                </div>
                <h1 className="Title">
                    {title}
                </h1>
                <div className="Body">
                    {body}
                </div>
                <button className={`Button btn${color}`}>Learn More</button>
            </div>
        </>
    )
}