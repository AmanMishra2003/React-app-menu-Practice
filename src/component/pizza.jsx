export default function Pizza({details}){
    const isSoldOut = details.soldOut;
    return (
        <div className={`pizza ${isSoldOut?'sold-out':''}`}>
            <img src={details.photoName} alt=""/>
            <div className="pizzadetail">
                <h3>{details.name}</h3>
                <p>{details.ingredients}</p>
                <span>{details.soldOut? 'Sold Out' : details.price}</span>
            </div>
        </div>
    )
}