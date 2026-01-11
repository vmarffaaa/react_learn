import React, { useState } from 'react';
import {usePrevious} from './hooks/UsePrevios'
import './App.css';
import styles from './hooks/UsePrevios.module.css'

const Counter = () => {
    const [value, setValue] = useState<number>(0);
    const previousValue = usePrevious(value);

    return (
        <div className={styles.box}>
            <div className={styles.flex}>
                <h2 className={styles.current_value}>Current value: {value}</h2>
                <h2 className={styles.previous_value}>Previous value: {previousValue}</h2>
            </div>
            <button
                className={styles.increment}
                onClick={() => {
                    setValue((prevState) => prevState + 1);
                }}
            >
                Increment
            </button>
        </div>
    );
}

export default Counter;
