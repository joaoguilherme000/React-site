import './index.css'
import '../../Style/Reset.css'

import musica from './unao.m4a';
import efeito from './efeito.mp3';

import React, { useEffect, useState,useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Configuracao () {
  const version = "0.1";
  const [enable, setEnable] = useState(false);
  const [seeImage, setSeeImage] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [effect, setEffect] = useState(false);
  const [volumeMusica, setVolumeMusica] = useState(50);
  const [volumeEfeitosSonoros, setVolumeEfeitosSonoros] = useState(50); 
  const efeitoRef = useRef(null);
  
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };
  
  
  const toggleModoChorao = () => {
    setEnable(!enable);
  };

  const toggleImage = () => {
    setSeeImage(!seeImage);
  };

  const handleVolumeMusicaChange = (event) => {
    setVolumeMusica(event.target.value);
    if (audioRef.current) {
      audioRef.current.volume = event.target.value / 100;
    }
  };

  const handleVolumeEfeitosSonorosChange = (event) => {
    setVolumeEfeitosSonoros(event.target.value);
    if (efeitoRef.current) {
      efeitoRef.current.volume = event.target.value / 100;
    }
  };

  const audioRef = React.createRef();

  const handleTogglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((error) => {
          console.error('Erro ao iniciar a reprodução:', error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleEffect = () => {
    if (efeitoRef.current) {
      efeitoRef.current.play().catch((error) => {
        console.error('Erro ao iniciar a reprodução do efeito:', error);
      });
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  }, []);

  return (
    <body className="telaConfig">
      {!seeImage ?(
      <>
        <section className="configContainer">
          <div className="configTitle">Configuração</div>
          <div className={`configTexto ${enable ? 'ativado' : 'desativado'}`} onClick={toggleModoChorao}>
            Modo Chorão: {enable ? 'ativado' : 'desativado'}
          </div>
          <div className="configTexto">Volume da musica {volumeMusica}
          <input
            type="range"
            min="0"
            max="100"
            value={volumeMusica}
            onChange={handleVolumeMusicaChange}
          />
          </div>
          <div className="configTexto">Volume dos efeitos sonoros: {volumeEfeitosSonoros}
          <input
            type="range"
            min="0"
            max="100"
            value={volumeEfeitosSonoros}
            onChange={handleVolumeEfeitosSonorosChange}
          />
          </div>
          <audio ref={audioRef}>
            <source src={musica} type="audio/mp4" />
            Seu navegador não suporta o elemento de áudio.
          </audio>
          <div className="configTexto" onClick={handleTogglePlay}>
            {isPlaying ? 'Já ta bom' : 'Testar musica'}
          </div>
          <div className="configTexto" onClick={handleEffect}>
            Testar Efeito
          </div>
          <audio ref={efeitoRef}>
            <source src={efeito} type="audio/mp3" />
            Seu navegador não suporta o elemento de áudio.
          </audio>
          <div className="configToHome configTexto" onClick={handleBackClick}>Voltar</div>
        </section>
        <section className="configContent">
          <section className="configExplica">
            <div>Explicação: </div>
          </section>
          <section className="configVersion">
            <div>Versão dessa merda: {version}</div>
          </section>
        </section>
        <div className="seeImage" onClick={toggleImage}>Ver imagem!</div>
      </>
      ) : (
      <div className="seeImage" onClick={toggleImage}>Imposivel desver isso</div>
      )}
    </body>
  )
};
