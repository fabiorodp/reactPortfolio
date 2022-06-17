import React from "react";
import Card from './card.js';


const Cardlist = ( {robots} ) => {

    // console.log(robots);
    
    /*
    if (true) {
        throw new Error('Nooooooo');
    };
    */

    const cardsArray = robots.map(
        (user, i) => {
            return(
                <Card key={robots[i].id} id={robots[i].id} name={robots[i].name} email={robots[i].email} />
            );
        }
    );

    return(
        <div>
            {cardsArray}
        </div>
    );
    
};

export default Cardlist;
