import { useRouter } from 'next/router';
import EventList from '../../components/events/EventList';
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
		numYear < 2020 ||
		numMonth < 1 ||
		numMonth > 12
	) {
		return <h2 className="center">Invalid Filter, Please adjust filter values</h2>;
	}
	const filteredEvents = getFilteredEvents({
		year: numYear,
		month: numMonth
	});

	if (!filteredEvents || filteredEvents === 0) {
		return <h2 className="center">Working, No Events for now</h2>;
	}

	return (
		<div>
			<EventList items={filteredEvents} />
		</div>
	);
};

export default FileteredEvetnsPage;
