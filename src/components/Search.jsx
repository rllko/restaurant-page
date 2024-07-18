function Search(){
    return ( 
    <div className="flex flex-col mb-6 my-10 items-center justify-center">   
        <h2 className="font-bold mb-6">Restaurantes</h2>
        <div className="flex rounded-full border border-zinc-600 w-[46%] h-[30%] bg-zinc-100 ">
            <img className="ml-5 my-auto w-[20px] h-[20px]" src="./Vector.png"  alt="" />
            <input type="text" className="bg-zinc-100 w-[89%] outline-none h-[50%] text-2xl font-semibold m-2 placeholder-zinc-500" placeholder="Procurar comida (ex.: alimentos, bebidas, ...)" name="" id="" />
        </div>
    </div>)
}

export default Search