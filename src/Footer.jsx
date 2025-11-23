function Footer() {
  return (
    <footer
      className="w-full py-4 px-6 md:px-12
      bg-white
      shadow-none
      fixed bottom-0 left-0
      shadow-[0_8px_30px_rgba(0,0,0,0.1)]
      "
    >
      <div className="flex justify-around my-4 md:my-8">
        <ul>
          {["Home", "Projects", "Skills", "About Me"].map((item) => (
            <li
              key={item}
              className="text-l md:text-xl hover:bg-black/10 transition-all ease-in-out duration-300 border border-black/40 m-2  md:border-none rounded-lg px-16"
            >
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>

        <span
          className=" hidden md:inline text-7xl md:text-8xl leading-normal font-mono font-bold m-4
"
        >
          Manni
        </span>
      </div>

      <div className="text-sm text-center">© 2025 Manni</div>
    </footer>
  );
}

export default Footer;
