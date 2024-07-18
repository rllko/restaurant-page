import { useRef } from "react";
import Card from "./Card";

function CardCarousel({title,items,handlePrevious,handleNext}){
    const ref = useRef(null)

    return(
    <div className="h-full px-3 max-w-7xl mx-auto">
        <h4 className="ml-12 mx-3 pb-4 font-bold ">{title}</h4>
        <div className="flex">
            <div onClick={() => handlePrevious(ref)} class="text-5xl cursor-pointer p-2 flex items-center justify-center mr-auto">
                <i class="fas fa-angle-left"></i>
            </div>
            <div ref={ref} className="flex overflow-auto mb-4 max-w-screen-xl snap-x scroll-smooth">
                {
                    items.map((item,index) => (
                        <Card key={index} name={item.name} image={item.image} 
                            deliveryTax={item.deliveryTax} minimumTime={item.minimumTime} 
                            maxTime={item.maxTime} rating={item.rating}/>
                    ))
                }
            </div>
            <div onClick={() => handleNext(ref)} class="text-5xl cursor-pointer p-2 flex items-center justify-center mr-auto">
                <i class="fas fa-angle-right"></i>
            </div>
        </div>
    </div>)
}

export default CardCarousel;