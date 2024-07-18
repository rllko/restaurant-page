function Footer(){
    return (
    <footer className="px-12 flex flex-col text-teal-50 mt-7 bg-zinc-900 w-full">
        <div className="w-full border-b-2 border-zinc-800">
            <h2 className="font-bold mt-6 mb-2 ml-6">FoodDash</h2>
        </div>
        <div className="flex justify-between">
            <div>
                <p className="text-[2.4em] font-bold text-orange-400">Conta Cliente</p>
                <div><span className="hover:underline cursor-pointer">Iniciar Sessão</span></div>
                <div><span className="hover:underline cursor-pointer">Registar-se</span></div>
            </div>
            <div>
                <p className="text-[2.4em] font-bold text-orange-400">Conta Empresarial</p>
                <div><span className="hover:underline cursor-pointer">Iniciar Sessão</span></div>
                <div><span className="hover:underline cursor-pointer">Registar-se</span></div>
            </div>
            <div>
                <p className="text-[2.4em] font-bold text-orange-400">Sobre</p>
                <div><span className="hover:underline cursor-pointer">Nossa história</span></div>
                <div><span className="hover:underline cursor-pointer">Equipa</span></div>
            </div>
            <div>
                <p className="text-[2.4em] font-bold text-orange-400">Contactos</p>
                <div><span className="hover:underline cursor-pointer">Apoio ao Cliente</span></div>
                <div><span className="hover:underline cursor-pointer">Contacto empresarial</span></div>
            </div>
        </div>
        <div className="text-center border-b-2 border-zinc-800">
           <span className="text-7xl font-bold">FD</span> 
        </div>
        <div className="text-end text-sm mt-2">
            <span>Todos os direitos reservados</span>
            <span> © </span>
            <span>Food Dash, 2024</span>
        </div>
    </footer>)
}

export default Footer;