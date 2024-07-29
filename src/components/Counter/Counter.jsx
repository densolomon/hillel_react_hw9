import { DECREMENT, DELETE, INCREMENT } from '@/constants/buttonConstants'
import Button from '@/components/Button/Button'
import './counter.scss'

const Counter = ({
	counter,
	handleDelete,
	handleIncrement,
	handleDecrement,
}) => {

	return (
		<div className="counter-container">
			<div className="counter-box">
				<Button title={INCREMENT} handleClick={handleIncrement} />
				<p>{counter}</p>
				<Button title={DECREMENT} handleClick={handleDecrement} />
			</div>

			<Button title={DELETE} handleClick={handleDelete} />
		</div>
	);
};

export default Counter;