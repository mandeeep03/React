

function Header() {
    return (
    <header className="w-full flex justify-center pt-4">
        <nav
        className=" py-2 sm:py-4
        flex items-center justify-between
        w-[90%] md:w-[80%] lg:w-[70%]
        py-4 px-8
        bg-white/10 backdrop-blur-xl
        border border-white/20
        shadow-[0_8px_30px_rgba(0,0,0,0.12)]
        rounded-2xl
        "
        >
        <h2 className="text-3xl font-semibold font-mono">Mandy</h2>

        <ul className="flex gap-8 text-xl">
            {["Home", "Project", "Contact Me", "About"].map((item) => (
            <li
                key={item}
                className="hover:underline underline-offset-8 transition-all ease-in-out duration-300"
            >
                <a href="#">{item}</a>
            </li>
            ))}
        </ul>
        </nav>
    </header>
    );
}

export default Header;
