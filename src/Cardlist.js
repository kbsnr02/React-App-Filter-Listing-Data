import React from 'react';

import Card from './Card';


const Cardlist = ({ list }) => {

    return (
        
        <div className="container"> 
            
            {
                                
                list.map((list, i) => {
                    return (
                        <Card
                            key={i}
                            id={list.id}
                            name={list.title}                            
                            url={list.url}                            
                        />
                    )
                })
            }
		</div>
	);
};

export default Cardlist;
