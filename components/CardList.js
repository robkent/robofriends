import React from 'react';
import Card from './Card'

const CardList = ({		robots	}) => {
	const CardArray = robots.map((user, i) =>{
		return(
			<Card 
				key={i} 
				id={robots[i].id} 
				name={robots[i].email} 
				email={robots[i].name}
			/>
		);
	})
	return(
    <div>
    {
    	CardArray
    }
    </div>
    );
}

export default CardList;