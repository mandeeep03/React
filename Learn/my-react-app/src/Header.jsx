function Header() {
return (
    <header>
    <nav className="flex items-center justify-between py-4 px-8
    bg-white/10 backdrop-blur-xl border border-white/20
    shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-xl
">
        <h2 className="text-3xl font-semibold">Mandy</h2>

        <ul className="flex w-[30%] justify-evenly text-xl">
    {["Home", "Project", "Contact Me", "About"].map((item) => (
            <li
    key={item}
    className="hover:underline underline-offset-8 transition-all ease-in-out duration-300">
    <a href="#">{item}</a>
            </li>
    ))}
        </ul>
    </nav>
    </header>
);
}

export default Header;
