function Footer() {
    return (
    <footer
        className="w-full  py-4 px-6 md:px-12
        bg-white/10 backdrop-blur-xl border border-white/20
        shadow-[0_8px_30px_rgba(0,0,0,0.12)] fixed bottom-0 left-0"
    >
        
        <div className="flex justify-around my-8 sm:my-16">
            <ul>
                {["Home", "Project", "Contact Me", "About"].map((item) => (
            <li
    key={item}
    className="hover:underline underline-offset-4 text-l sm:text-xl transition-all ease-in-out duration-300">
    <a href="#">{item}</a>
            </li>
    ))} 
            </ul>
        
        <span className="text-7xl md:text-8xl leading-normal font-mono font-bold
">
            Mandy
        </span>
        </div>
        
        <div className="text-sm text-center">© 2025 Your Company</div>
    </footer>
    );
}

export default Footer;
