import classes from './EventContent.module.css';

const EventContent = (props) => {
	return <section className={classes.content}>{props.children}</section>;
	{
		props.children;
	}
};

export default EventContent;
