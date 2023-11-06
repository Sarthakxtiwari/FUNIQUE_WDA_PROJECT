"use client"

const data = {
  nav : {
    heading: "Hello",
    subHeading : "Pranshat Singh"
  },
  main: {
    navigationPanel: {
      h1:"intrests",
      h2:"acivements"
    },
    Posts: ["sarthak","karan"]
  }
}

function Nav(){
  return (
    <h1>{data.main.navigationPanel.h2}</h1>
  );
}

export default function Home() {
  return (
    <>sarthak tiwari
     <Nav/>
    </>
   
  )
}
