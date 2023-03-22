import React, { useState } from 'react';
import styles from './Square.module.css'

function Square({ value, onclick }) {


    let fcolor = "";
    if (value == "X") {
        fcolor = "blue";
    }
    else {
        fcolor = "red";
    }

    return (
        <div onClick={onclick} className={styles.square}>
            <h1 style={{ color: fcolor, fontSize: "50px", marginTop: "15px" }}>{value}</h1>
        </div>
    );
}

export default Square;
