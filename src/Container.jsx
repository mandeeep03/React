function Container(props) {
    let name =
      "w-full border-8 border-black/20 rounded-lg";
    switch (props.index) {
      case "1":
        name += " md:w-[90%]  h-[30rem] ";
        break;
      case "2":
        name += " md:w-[45%]  h-[30rem] ";
        break;
      case "3":
        name += " md:w-[30%]  h-[20rem] ";
    }
  return <>
    <div className={name}></div>
  
  
  </>;
}

export default Container;
