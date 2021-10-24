import classes from './EventItem.module.css';
import Button from '../ui/Button';
import DateIcon from '../icons/icons/DateIcon';
import AddressIcon from '../icons/icons/AddressIcon';
import ArrowRightIcon from '../icons/icons/ArrowRightIcon';

const EventItem = (props) => {
	const { image, title, date, location, id } = props;

	const readableDate = new Date(date).toLocaleDateString('en-US', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	});

	const formattedAddress = location.replace(',', '\n');
	const eventLink = `/events/${id}`;

	return (
		<li className={classes.item}>
			<img src={'/' + image} alt="" />
			<div className={classes.content}>
				<div>
					<h2>{title}</h2>
				</div>
				<div className={classes.date}>
					<DateIcon />
					<time>{readableDate}</time>
				</div>
				<div className={classes.address}>
					<AddressIcon />
					<address>{formattedAddress}</address>
				</div>
			</div>
			<div className={classes.actions}>
				<Button link={eventLink}>
					<span>Explore</span>
					<span className={classes.icon}>
						<ArrowRightIcon />
					</span>
				</Button>
			</div>
		</li>
	);
};

export default EventItem;
