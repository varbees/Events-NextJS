import React from 'react';
import EventItem from './EventItem';
import classes from './EventList.module.css';

const EventList = (props) => {
	const { items } = props;

	return (
		<ul className={classes.list}>
			{items.map((item) => (
				<EventItem
					key={item.id}
					id={item.id}
					date={item.date}
					title={item.title}
					image={item.image}
					location={item.location}
				/>
			))}
		</ul>
	);
};

export default EventList;
