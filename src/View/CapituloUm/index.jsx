import './capUm.css'
import '../../Style/Reset.css'
import MinhaImagem from './felizErnie.png';

import React, { useEffect, useState } from 'react';

export default function CapituloUm () {
  const textToDisplay = ["Numa gravadora...","Dois amigos contam histórias muito engraçadas...",];
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [noPerson, setNoPerson] = useState(true);
  const classes = ['parte1', 'parte2', 'parte3', 'parte4', 'parte5'];

  const [name, setName] = useState('');

  const [currentLine, setCurrentLine] = useState(0);

  const handleNextLine = () => {
    if (currentLine < textToDisplay.length - 1) {
      setCurrentLine(currentLine + 1);
      setNoPerson(false);
    } else {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? classes.length - 1 : prevIndex - 1
      );
    }
  };

  /*useEffect(() => {
    personTalk();
  }, []);

  const personTalk = () => {
    if (classes = 'parte1') {
      setName("Ernie");
    } else if (classes = 'parte2'){
      setName("parte3");
    } else if (classes = 'parte3'){
      setName("parte4");
    } else if (classes = 'parte4'){
      setName("parte5");
    } else {
      setName("erro");
    }
    */

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % classes.length);
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? classes.length - 1 : prevIndex - 1
    );
  };

  const showPreviousButton = currentIndex !== 0;
  const showNextButton = currentIndex !== classes.length - 1;

  const currentClass = classes[currentIndex];

  

  useEffect(() => {
    document.body.className = classes[currentIndex];

    return () => {
      document.body.className = '';
    };
  }, [currentIndex]);

  return (
    <body className={`parte1 ${classes[currentIndex]}`}>
      <section className="dialogBox" onClick={handleNextLine}>
        {!noPerson &&(
          <>
          <div className="name">
            <h1>{name}</h1>
          </div>
          <img src={MinhaImagem} alt="personagem" />
          </>
        )}
        <h1 className="dialogText show">{textToDisplay[currentLine]}</h1>
        {showPreviousButton && <h1 onClick={handlePrevClick}>Voltar</h1>}
      </section>
    </body>
  )
};
