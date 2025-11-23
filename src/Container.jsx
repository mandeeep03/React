function Container(props) {
    let name;
    switch (props.index) {
      case "1":
        name = "w-full md:w-[90%]  h-[30rem] border-8 border-black/20 rounded-lg";
        break;
      case "2":
        name = "w-full md:w-[45%]  h-[30rem] border-8 border-black/20 rounded-lg";
        break;
      case "3":
        name = "w-full md:w-[30%]  h-[20rem] border-8 border-black/20 rounded-lg";
        break;
    }
  return <>
    <div className={name}></div>
  
  
  </>;
}

export default Container;
