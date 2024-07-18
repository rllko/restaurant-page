function Card({name,image,deliveryTax,rating,minimumTime,maxTime}){
    return (
        <div className="flex  flex-col gap-0 cursor-pointer w-full mx-2">
            <div>
                <img src={image} className="w-full shink-0 " alt={image}  />
            </div>
            <div className="">
                <div className="flex items-center w-[240px] justify-between">
                    <h5 className="font-bold ">{name}</h5>
                    <div className="rounded-full text-white p-1 h-5 bg-black text-[0.6em]">{rating}</div>
                </div>
                <div className="flex justify-between">
                    <p className="font-semibold text-[0.70em] w-full">Taxa de Entrega: {deliveryTax}€</p>
                    <p className=" text-[0.7em] w-[31%]">{minimumTime}-{maxTime} min</p>
                </div>
            </div>
        </div>)
}

export default Card;