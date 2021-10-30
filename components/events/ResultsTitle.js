import Button from '../ui/Button';
import classes from './ResultsTitle.module.css';

const ResultsTitle = (props) => {
	const { date } = props;

	const readableDate = new Date(date).toLocaleDateString('en-us', {
		month: 'long',
		year: 'numeric'
	});
	return (
		<section className={classes.title}>
			<h1>Events in {readableDate}</h1>
			<Button link="/events">Show all events</Button>
		</section>
	);
};

export default ResultsTitle;
