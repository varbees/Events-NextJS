import { Fragment } from 'react';
import EventList from '../../components/events/EventList';
import EventsSearch from '../../components/events/EventsSearch';
import { getAllEvents } from '../../dummy-data';

const AllEvents = () => {
	const events = getAllEvents();

	return (
		<Fragment>
			<EventsSearch />
			<EventList items={events} />
		</Fragment>
	);
};

export default AllEvents;
