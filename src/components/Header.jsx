function Header(){
    return(
    <header className="flex justify-between mx-auto max-w-7xl mt-5">
        <div className=" text-orange-300 text-5xl font-bold cursor-pointer" >
        Food<span className="text-black">Dash</span>
        </div>
        <div className="flex rounded-lg border border-zinc-600 w-[35%] h-[30%] bg-zinc-100 ">
            <img className="ml-2 my-auto w-[30px] h-[30px]" src="./icon-park-outline_local-two.png"  alt="" />
            <input type="text" className="bg-zinc-100 w-[89%] outline-none h-[50%] text-2xl font-semibold m-2 placeholder-zinc-500" placeholder="Rua Doutor Lourenço Peixinho, 19" name="" id="" />
        </div>
        <div className="flex gap-6">
            <div>
                <div className="relative rounded-lg bg-zinc-300 cursor-pointer p-2 m-auto">
                    <img src="./ion_cart-sharp.png" width={35} alt="" />
                    <div className="absolute left-0 top-[50px] font-semibold text-[0.8em]">Carrinho</div>
                    <div className="absolute -top-1 -right-2 text-white rounded-full bg-black">
                        <div className="cursor-pointer flex justify-center items-center text-sm h-4 w-4 text-center">1</div>
                    </div>
                </div>
            </div>
            <div>
                <div className="relative rounded-lg bg-zinc-950 cursor-pointer  p-2 m-auto">
                    <img src="./IconPerfil.png" width={35} alt="" />
                    <div className="absolute top-[50px] left-2 font-semibold text-[0.8em]">Perfil</div>
                </div>
            </div>
        </div>
    </header>);
}
export default Header;