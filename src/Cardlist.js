import React from "react";
import Card from "./Card";
import { robots } from "./robots";


const Cardlist=({robots})=>{
    const CardComponent=robots.map((user,i)=>{
        return(
            <Card
               key={i}
               id={robots[i].id}
               name={robots[i].name}
               email={robots[i].email} 
            ></Card>
        )
    })
    return(
        <div>
            {CardComponent}
        </div>
    )
}

export default Cardlist;