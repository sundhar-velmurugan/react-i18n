import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();
  const [choice, setChoice] = useState('');

  function handleClick(lang) {
    i18n.changeLanguage(lang);
    setChoice('');
  }

  function handleSelection(ch) {
    setChoice(ch);
  }

  const apple = t('app.quiz.choice.apple');
  const banana = t('app.quiz.choice.banana');

  return (
    <div className='App'>
      <nav style={{ width: '100%', padding: '2rem 0', backgroundColor: 'darkslategrey' }}>
        <button onClick={() => handleClick('en')}>English</button>
        <button onClick={() => handleClick('ko')}>Korean</button>
        <button onClick={() => handleClick('chi')}>Chinese</button>
      </nav>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <div>
          <span>
            <p>{t('app.quiz.question')} </p>
            <button onClick={() => handleSelection(apple)}>{apple}</button>
            <button onClick={() => handleSelection(banana)}>{banana}</button>
          </span>
          {choice && <p>{t('app.quiz.result', { choice })}</p>}
        </div>
        <p>{t('app.hello.friend')}</p>
        <p>{t('app.hello.stranger')}</p>
      </header>
    </div>
  );
}

export default App;
