import Logo from "../assets/cat_icon.png";

export const NavBar = () => {
    return (
        <nav className="bg-white border-gray-200 bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto">
                <div className="self-center flex items-center">
                    <img src={Logo} className="h-20 mr-1" alt="Cat Logo" />
                    <span className="text-4xl font-semibold whitespace-nowrap text-white">CatStuff!</span>
                </div>
            </div>
        </nav>
    )
}
