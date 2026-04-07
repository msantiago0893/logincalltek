import { useState } from 'react';
import styles from './styles/components/_app.module.sass';

import { Card } from './components/Card';

import { useTranslation } from 'react-i18next';


const EN_US = 'en-us';
const EN_MX = 'es-mx';
const LONG = 'long';
const NUMERIC = 'numeric';
const TWO_DIGITS = '2-digit';

function App() {
  const [t, i18n] = useTranslation('global');

  const [isEnglish, setisEnglish ] = useState(true);

  const date = new Date().toLocaleDateString(
    isEnglish ? EN_US : EN_MX,
    { weekday: LONG, month: LONG, day: NUMERIC }
  )

  const changeLang = (isEnglish) => {
    if (isEnglish) {
      i18n.changeLanguage('en');
      setisEnglish(true);
    } else {
      i18n.changeLanguage('es');
      setisEnglish(false);
    }
  }

  const data = require('./data.json');

  return (
    <div className = {styles.main}>

      <div className = {styles.sidebar}>

        <div className = {styles.form}>
          <img className = {styles.form__iconUser} src = {require('./images/user.svg').default} alt="user"/>

          <div className = {styles.setting}>
            <img className = {styles.setting__icon} src = {require('./images/settings.svg').default} alt="setting"/>
            <p className = {styles.setting__text}> { t("app.settings") } </p>
          </div>

          <h1 className = {styles.form__title}> { t("app.welcome") } </h1>

          <div className = {styles.lang}>
            <img className = {styles.lang__icon} src = {require('./images/world.svg').default} alt="world"/>
            <p className= {`${styles.lang__item} ${isEnglish ? styles['lang__item--selected'] : ''}`} onClick={() => changeLang(true)}>
              { t("app.en") }
            </p>
            <p className={`${styles.lang__item} ${!isEnglish ? styles['lang__item--selected'] : ''}`} onClick={()=> changeLang(false) }>
              { t("app.es") }
            </p>
          </div>

          <button className = {styles.btnSignout}>
          { t("app.sign-out") }
          </button>

          <div className = {styles.date}>
            <p className = {styles.date__hour}>
              {new Date().toLocaleTimeString(
                isEnglish ? EN_US : EN_MX,
                { hour: TWO_DIGITS, minute: TWO_DIGITS }
              )}
            </p>
            <p className = {styles.date__today}> { date } </p>
          </div>
        </div>

      </div>
      <div className = {styles.wrapper}>
        <h1 className = {styles.wrapper__title}> { t("app.logo") } </h1>
        <div>
          <div className = {styles.cards}>
            {data.map((item, i) =>
              <Card item={item} key={i} />
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
