import React from 'react';
import styles from './Card1.module.css'
function Card1({ img, name, designation, exp }) {
  return (
    <div className={styles.card}>
      <div className={styles.imgDiv}>
        <img src={img} width="200px" height="200px" />
      </div>
      <p className={styles.name}>{name}</p>
      <p className={styles.designation}>{designation}</p>
      <a className={styles.exp} href="#">{exp}</a>
    </div>
  );
}

export default Card1;
