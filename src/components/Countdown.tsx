import React, { useContext } from 'react';

import { CountdownContext } from '../contexts/CountdownContext';

import styles from '../stylesheets/components/Countdown.module.css';

export default function Countdown () {
	const {
		minutes,
		seconds,
		hasFinished,
		isActive,

		startCountdown,
		resetCountdown
	} = useContext(CountdownContext);

	const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
	const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

	return (
		<React.Fragment>
			<div className={ styles.countdownContainer }>
				<div>
					<span>{ minuteLeft }</span>
					<span>{ minuteRight }</span>
				</div>

				<span>:</span>

				<div>
					<span>{ secondLeft }</span>
					<span>{ secondRight }</span>
				</div>
			</div>

			{ hasFinished ? (
				<button
					disabled
					className={ styles.countdownButton }
				>
					Ciclo encerrado
				</button>
			) : (
				<React.Fragment>
					{ isActive ? (
						<button
							type="button"
							className={`${ styles.countdownButton } ${ styles.countdownButtonActive }`}
							onClick={ resetCountdown }
						>
							Abandonar ciclo
						</button>
					) : (
						<button
							type="button"
							className={ styles.countdownButton }
							onClick={ startCountdown }
						>
							Iniciar um ciclo
						</button>
					) }
				</React.Fragment>
			) }
		</React.Fragment>
	);
}
