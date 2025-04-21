import React from 'react';
import styles from './SpecialCard.module.css';

function SpecialCard({ special, ...aosProps }) {
  return (
    <div className={styles.card} {...aosProps}>
      <img
        src={special.image}
        alt={special.name}
        className={styles.image}
      />
      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.name}>{special.name}</h3>
          <span className={styles.price}>{special.price}</span>
        </div>
        <p className={styles.description}>{special.description}</p>
        <button className={styles.orderButton}>Order a delivery 🔗</button>
      </div>
    </div>
  );
}

export default SpecialCard;