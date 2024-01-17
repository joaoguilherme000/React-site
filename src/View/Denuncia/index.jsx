import './index.css'
import '../../Style/Reset.css'

import him from './walking.gif';
import sad from './sad.png';

import React, { useEffect, useState,useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import Draggable from 'react-draggable';

export default function Denuncia () {
  const [showHim, setShowHim] = useState(false);
  const [showHimSad, setShowHimSad] = useState(false);

  const primeiroTextToDisplay = ["Funcionou","Está feliz?"];
  const primeiroSimTextToDisplay = ["parabéns","agora ele está triste"];
  const primeiroNaoTextToDisplay = ["você faz escolhas erradas","porque quis denunciar?"];
  const [currentLine, setCurrentLine] = useState(0);

  const [escolhaFeitaPrimeira, setEscolhaFeitaPrimeira] = useState(false);
  const [escolhaFeitaSegunda, setEscolhaFeitaSegunda] = useState(false);
  const [escolhaFeitaTerceira, setEscolhaFeitaTerceira] = useState(false);

  const [primeiraEscolha, setPrimeiraEscolha] = useState(false);
  const [segundaEscolha, setSegundaEscolha] = useState(false);

  const [primeiroSim, setPrimeiroSim] = useState(false);
  const [primeiroNao, setPrimeiroNao] = useState(false);
  const [segundoSim, setSegundoSim] = useState(false);
  const [segundoNao, setSegundoNao] = useState(false);

  const handleNextLine = () => {
    if (currentLine < primeiroTextToDisplay.length - 1) {
      setCurrentLine(currentLine + 1);
    } else {
      setPrimeiraEscolha(true);
      setCurrentLine(0)
    }
  };

  const segundoSimHandleNextLine = () => {
    if (currentLine < primeiroTextToDisplay.length - 1) {
      setCurrentLine(currentLine + 1);
    } else {
      setSegundaEscolha(true);
      setCurrentLine(0)
    }
  };

  const segundoNaoHandleNextLine = () => {
    if (currentLine < primeiroTextToDisplay.length - 1) {
      setCurrentLine(currentLine + 1);
    } else {
      setSegundaEscolha(true);
    }
  };

  const primeiroHandleEscolha = (opcao) => {
    if (opcao === 'sim') {
      setPrimeiroSim(true);
      setPrimeiroNao(false);
    } else if (opcao === 'nao') {
      setPrimeiroNao(true);
      setPrimeiroSim(false);
    }
    if (!escolhaFeitaPrimeira) {
      setEscolhaFeitaPrimeira(true);
    }
  };

  const segundoHandleEscolha = (opcao) => {
    if (opcao === 'sim') {
      setShowHim(true);
    } 
    if (!escolhaFeitaSegunda) {
      setEscolhaFeitaSegunda(true);
    }
  };

  const props = useSpring({
    left: showHim ? '0%' : '35%',
    config: { duration: 7500 },
  });

  useEffect(() => {
    let timeoutId;

    if (showHim) {
      timeoutId = setTimeout(() => {
        setShowHim(false);
        setShowHimSad(true);
      }, 7500);
    }

    return () => clearTimeout(timeoutId);
  }, [showHim]);

  return (
    <>
      <div className="telaDenuncia">
        {(!primeiraEscolha && (
          <h1 className="denunciaTexto" onClick={handleNextLine}>
            {primeiroTextToDisplay[currentLine]}
          </h1>
        ))}
        {primeiraEscolha && !escolhaFeitaPrimeira && (
          <>
            <div className="denunciaRow">
              <h1
                className="denunciaTexto denunciaEscolha"
                onClick={() => primeiroHandleEscolha('sim')}
              >
                Sim
              </h1>
              <h1
                className="denunciaTexto denunciaEscolha"
                onClick={() => primeiroHandleEscolha('nao')}
              >
                Não
              </h1>
            </div>
          </>
        )}

        {primeiroSim && (
          <>
          {(!segundaEscolha && (
            <h1 className="denunciaTexto" onClick={segundoSimHandleNextLine}>{primeiroSimTextToDisplay[currentLine]}</h1>
          ))}
            {segundaEscolha && !escolhaFeitaSegunda && (
              <>
                <h1
                  className="denunciaTexto denunciaEscolha"
                  onClick={() => segundoHandleEscolha('sim')}
                >De quem você esta falando?
                </h1>
              </>
            )}
            {showHim && (
              <animated.img
                src={him}
                alt="him"
                className="denunciaHim"
                style={{
                  position: 'relative',
                  ...props,
                }}
              />
            )}
            {showHimSad && (
              <Draggable>
                <img src={sad} alt="sadhim" className="denunciaHim" />
              </Draggable>
            )}
          </>
        )}
        {primeiroNao && (
          <h1 className="denunciaTexto" onClick={segundoNaoHandleNextLine}>{primeiroNaoTextToDisplay[currentLine]}</h1>
        )}
      </div>
    </>
  )
};