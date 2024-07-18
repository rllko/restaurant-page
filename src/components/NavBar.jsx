function NavBar(){
    return (
    <nav className="flex flex-row gap-16 pl-12 pb-6 border-zinc-900 pt-4 border-b-2 w-full text-2xl justify-center my-4">
        <div className="cursor-pointer rounded-md uppercase hover:bg-orange-300 hover:text-white p-1 font-bold space-x-4">home</div>
        <div className="cursor-pointer rounded-md uppercase hover:bg-orange-300 hover:text-white p-1 font-bold space-x-4">menu</div>
        <div className="cursor-pointer rounded-md uppercase hover:bg-orange-300 hover:text-white p-1 font-bold space-x-4">contactos</div>
        <div className="cursor-pointer rounded-md uppercase hover:bg-orange-300 hover:text-white p-1 font-bold space-x-4">empresarial</div>
    </nav>)
}

export default NavBar;