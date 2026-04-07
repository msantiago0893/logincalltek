import React from 'react';
import styles from '../styles/components/_card.module.sass';
import { useTranslation } from 'react-i18next';

export const Card = (card) => {

  const { img } = card.item;

  const [t] = useTranslation('global');

  return (
    <div className={styles.card}>
      <div className={styles.card__oval}>
      <img className={styles.card__img} src={require(`../images/${img}.svg`)} alt='jugo'/>
      </div>
      <p className={styles.card__description}> { t(`app.${img}`) } </p>
    </div>
  )
}
