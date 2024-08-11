export default function Order({isOpen}){
    return(
        <div className="order">
            {isOpen && <div className="btn">Order Now</div> }
        </div>
    )
}