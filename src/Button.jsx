function Button(props) {
  let name;
  if (props.name === "Login") {
    name =
      "px-5 py-2 rounded-xl font-semibold    bg-white/10 border border-black/20 backdrop-blur-xl      hover:bg-black/5 active:scale-95      transition-all duration-200      "
  } else {
    name =
      "px-6 py-2 rounded-xl font-semibold text-white  bg-black/90 shadow-lg hover:bg-black/80   hover:opacity-90 active:scale-95      transition-all duration-200";
  }
  return (
    <>
      <button class={name}>{props.name}</button>
    </>
  );
}
export default Button;
