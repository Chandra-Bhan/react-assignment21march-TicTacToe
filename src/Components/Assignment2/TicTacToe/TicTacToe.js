import React, { useState } from 'react';
import Square from '../Square/Square';
import styles from './TicTacToe.module.css'

function TicTacToe() {

    const [state, setState] = useState(Array(9).fill(null));
    const [isXturn, setIsXturn] = useState(true);
    const [count, setCount] = useState(0);
    const [error, setError] = useState(false);


    function winnerLogic() {
        const winnerPossibility = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];


        for (let logic of winnerPossibility) {
            let [a, b, c] = logic;
            if (state[a] != null && state[a] == state[b] && state[b] == state[c]) {
                return state[a];
            }

        }
        return false;
    }



    const isWinner = winnerLogic();




    const handleClick = (index) => {
        const copyState = [...state];
        if (copyState[index] == null && !isWinner) {
            copyState[index] = isXturn ? "X" : "O";
        }

        setState(copyState);
        setIsXturn(!isXturn);

        if (isWinner == false && count == 8) {
            setError(true);
        }
        setCount(count + 1);

    }


    const handleReset = () => {
        setState(Array(9).fill(null))
        setError(false);
        setCount(0);
    }


    return (
        <div>

            <h1 style={{ color: "skyblue", marginTop: "400px" }}>Assignment 2 - Tic-Tac-Toe Game</h1>

            <div className={styles.mainDiv}>

                <div className={styles.boardContainer}>
                    <div className={styles.boardRow}>
                        <Square onclick={() => handleClick(0)} value={state[0]} />
                        <Square onclick={() => handleClick(1)} value={state[1]} />
                        <Square onclick={() => handleClick(2)} value={state[2]} />
                    </div>
                    <div className={styles.boardRow}>
                        <Square onclick={() => handleClick(3)} value={state[3]} />
                        <Square onclick={() => handleClick(4)} value={state[4]} />
                        <Square onclick={() => handleClick(5)} value={state[5]} />
                    </div>
                    <div className={styles.boardRow}>
                        <Square onclick={() => handleClick(6)} value={state[6]} />
                        <Square onclick={() => handleClick(7)} value={state[7]} />
                        <Square onclick={() => handleClick(8)} value={state[8]} />
                    </div>
                </div>
                <div>
                    <button className={styles.startAgainBtn} onClick={handleReset}>Start Again</button><br /><br />
                    {
                        isWinner && <h1 className={styles.winnerText}> Player {isWinner} is Winner</h1>
                    }
                    {
                        error ? <h1 className={styles.winnerText}> Game Over</h1> : null

                    }
                </div>
            </div>
        </div>
    );
}

export default TicTacToe;
