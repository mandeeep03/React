import Container from "./Container"


function Layout(){
    
    return (
      <>
      <div className="mt-24 md:mt-32 mb-24"
      ><div className="flex justify-center m-4">
          <Container index="1" />
        </div>

        <div className="flex flex-col gap-3 m-4 justify-center md:flex-row">
          <Container index="2" />
          <Container index="2" />
        </div>
        <div className="flex justify-center m-4">
          <Container index="1" />
        </div>
        <div className="flex flex-wrap justify-around gap-6 m-4 items-center">
          <Container index="3" />
          <Container index="3" />
          <Container index="3" />
          <Container index="3" />
          <Container index="3" />
          <Container index="3" />
          <Container index="3" />
          <Container index="3" />
          <Container index="3" />
        </div></div>
        
      </>
    );
}
export default Layout