import { useRef } from 'react';
import Button from '../ui/Button';
import classes from './EventSearch.module.css';

const EventsSearch = (props) => {
	const yearInputRef = useRef();
	const monthInputRef = useRef();

	function submitHandler(evt) {
		evt.preventDefault();

		const selectedYear = yearInputRef.current.value;
		const selectedMonth = monthInputRef.current.value;
		props.onSearch(selectedYear, selectedMonth);
	}

	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<div className={classes.controls}>
				<div className={classes.control}>
					<label htmlFor="year">Year</label>
					<select id="year" ref={yearInputRef}>
						<option value="2021">2021</option>
						<option value="2022">2022</option>
					</select>
				</div>
				<div className={classes.control}>
					<label htmlFor="month">Month</label>
					<select id="month" ref={monthInputRef}>
						<option value="1">JAN</option>
						<option value="2">FEB</option>
						<option value="3">MAR</option>
						<option value="4">APR</option>
						<option value="5">MAY</option>
						<option value="6">JUN</option>
						<option value="7">JUL</option>
						<option value="8">AUG</option>
						<option value="9">SEP</option>
						<option value="10">OCT</option>
						<option value="11">NOV</option>
						<option value="12">DEC</option>
					</select>
				</div>
			</div>
			<Button>Find Events</Button>
		</form>
	);
};

export default EventsSearch;
