import { useRouter } from 'next/router';
import { Fragment } from 'react';

import Button from '../../components/ui/Button';
import EventList from '../../components/events/EventList';
import ResultsTitle from '../../components/events/ResultsTitle';
import ErrorAlert from '../../components/ui/ErrorAlert';
import { getFilteredEvents } from '../../dummy-data';

const FileteredEvetnsPage = () => {
	const router = useRouter();
	const filteredData = router.query.slug;

	if (!filteredData) {
		return <p className="center">Loading...</p>;
	}
	const [filteredYear, filteredMonth] = filteredData;

	const numYear = +filteredYear;
	const numMonth = +filteredMonth;

	if (
		isNaN(numYear) ||
		isNaN(numMonth) ||
		numYear > 2030 ||
		numYear < 2021 ||
		numMonth < 1 ||
		numMonth > 12
	) {
		return (
			<Fragment>
				<ErrorAlert>
					<h2 className="center" style={{ color: '#94fdfd' }}>
						Invalid Filter, Please adjust filter values
					</h2>
				</ErrorAlert>
				<div className="center">
					<Button link="/events">Show All Events</Button>
				</div>
			</Fragment>
		);
	}
	const filteredEvents = getFilteredEvents({
		year: numYear,
		month: numMonth
	});
	console.log(filteredEvents);
	if (!filteredEvents || filteredEvents.length === 0) {
		return (
			<Fragment>
				<ErrorAlert>
					<h2 className="center" style={{ color: '#94fdfd', padding: '2rem 2rem' }}>
						No Events for now
					</h2>
				</ErrorAlert>
				<div className="center">
					<Button link="/events">Show All Events</Button>
				</div>
			</Fragment>
		);
	}

	const date = new Date(numYear, numMonth - 1);

	return (
		<Fragment>
			<ResultsTitle date={date} />
			<EventList items={filteredEvents} />
		</Fragment>
	);
};

export default FileteredEvetnsPage;
