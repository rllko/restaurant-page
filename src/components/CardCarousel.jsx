import Card from "./Card";

function CardCarousel({title,items}){
    return(
    <div className="h-full px-3">
        <h4 className="ml-12 mx-3 pb-4 font-bold">{title}</h4>
        <div className="flex overflow-auto mb-4 max-w-screen-xl snap-x scroll-smooth">
            {
                items.map((item,index) => (
                    <Card key={index} name={item.name} image={item.image} 
                          deliveryTax={item.deliveryTax} minimumTime={item.minimumTime} 
                          maxTime={item.maxTime} rating={item.rating}/>
                ))
            }
        </div>
    </div>)
}

export default CardCarousel;