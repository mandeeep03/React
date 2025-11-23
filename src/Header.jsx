import Menu from "./Menu";
import Button from "./Button";

function Header() {
  return (
    <header className="flex w-full pt-4 justify-center">
      <nav
        className="
          flex w-[90%]
          py-2 pl-4 md:pl-8 px-4
          bg-white/10 rounded-2xl
          shadow-[0_8px_30px_rgba(0,0,0,0.12)]
          items-center justify-between backdrop-blur-xl 
          sm:py-4 md:w-[80%] lg:w-[70%]
        "
      >
        <h2 className="text-3xl font-bold font-mono">Manni</h2>

        <ul className="hidden md:flex text-xl gap-4 md:gap-8">
          {["Home", "Projects", "Skills", "About Me"].map((item) => (
            <li
              key={item}
              className="transition-all hover:underline underline-offset-8 ease-in-out duration-300"
            >
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex gap-3">
            <Button name="Login" />
            <Button name="Signup" />
          </div>
          <Menu />
        </div>
      </nav>
    </header>
  );
}

export default Header;
