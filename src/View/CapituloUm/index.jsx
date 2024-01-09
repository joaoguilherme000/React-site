import './capUm.css'
import '../../Style/Reset.css'
import MinhaImagem from './felizErnie.png';

import React, { useEffect, useState } from 'react';

export default function CapituloUm () {
  const textToDisplay = "Olá, seja bem-vindo! Quando este texto terminar de ser escrito, aparecerá um botão de próximo.";
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [noPerson, setNoPerson] = useState(true);

  const [dialog, setDialog] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    const textToDisplay = [
      "Olá, seja bem-vindo!",
      "Eu sou um personagem do jogo.",
      "Estou aqui para ajudar você.",
      "Vamos começar a aventura!",
    ];

    setDialog(textToDisplay);
    setName('ernie');
  }, []);

  const handleNextLine = () => {
    if (currentLine < dialog.length - 1) {
      setCurrentLine(currentLine + 1);
      setNoPerson(false);
    }
  };

  const classes = ['parte1', 'parte2', 'parte3', 'parte4', 'parte5'];

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

  const [name, setName] = useState('');

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
        <h1 className="dialogText show">{dialog[currentLine]}</h1>
        {showPreviousButton && <h1 onClick={handlePrevClick}>Voltar</h1>}
      </section>
    </body>
  )
};
