import React from "react";
import Card from "./components/Card";
import data from "./data.json";





function App (){
  // console.log(data[0].description);
    //  use for loop
    // let items = [];
    // for(let x=0; x<data.length; x++){
    //   items.push( <Card titleText={data[x].title} descText={data[x].description} />);
    // }

    // use map
    let items = [];
   items = data.map((item, index) => <Card key={index} titleText={item.title} descText={item.description} />);

  return <div>
                 {/* <h1 className="headingStyle">TODO APP</h1>
                 <Card titleText = "Bangladesh 2.0" descText="I love My Country" />
                 <Card titleText = "Bangladesh 2.0" descText="I love My Country" />
                 <Card titleText = "Bangladesh 2.0" descText="I love My Country" /> */}
                 <h1 className="headingStyle">TODO APP</h1>
                 {/* <Card titleText = {data[0].title} descText = {data[0].description} />
                 <Card titleText = {data[1].title} descText = {data[1].description} />
                 <Card titleText = {data[2].title} descText = {data[2].description} />
                 <Card titleText = {data[3].title} descText = {data[3].description} /> */}
                 {items}
                 
                 

         
        </div>

}


export default App;