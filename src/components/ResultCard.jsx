const ResultCard = ({title, val1, val2, message}) => {
    return ( 
        <div>
            <h3>{title}</h3>
            <p className="result-value">
                {val1} {val2}
            </p>
            <p className="result-message">
                {message}
            </p>
        </div>
     );
}
 
export default ResultCard;