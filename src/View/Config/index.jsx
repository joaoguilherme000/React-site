import './index.css'
import '../../Style/Reset.css'

import { firestore, collection,doc,setDoc, getDoc } from '../../assets/firebaseConfig.js';

import musica from './unao.m4a';
import efeito from './efeito.mp3';


import React, { useEffect, useState,useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Configuracao () {
  const version = "0.1";
  const [enable, setEnable] = useState(false);
  const [seeImage, setSeeImage] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volumeMusica, setVolumeMusica] = useState(50);
  const [volumeEfeitosSonoros, setVolumeEfeitosSonoros] = useState(50);
  const [volumeChanged, setVolumeChanged] = useState(false);
  const [explica, setExplica] = useState("");
  const efeitoRef = useRef(null);
  
  const navigate = useNavigate();

  const handleBackClick = async () => {
    if (volumeChanged) {
      console.log('Salvando alterações...');
    }
    try {
      const userCollection = collection(firestore, 'Config');
      const userDocRef = doc(userCollection, '9oEfvzZG2zhsn33NBtna');
  
      await setDoc(userDocRef, {
        volumeMusica: volumeMusica,
        volumeEfeitosSonoros: volumeEfeitosSonoros,
      }, { merge: true });
  
      navigate('/');
    } catch (error) {
      console.error('Erro ao salvar no Firestore:', error);
    }
    console.log('Voltando...');
    setVolumeChanged(false);
  };
  
  const toggleModoChorao = () => {
    setEnable(!enable);
    if (explica === "") {
      setExplica("Não tem kkk");
    } else {
      setExplica("");
    }
  };

  const toggleImage = () => {
    setSeeImage(!seeImage);
  };

  const handleVolumeMusicaChange = (event) => {
    setVolumeMusica(event.target.value);
    setVolumeChanged(true);
    if (audioRef.current) {
      audioRef.current.volume = event.target.value / 100;
    }
  };

  const handleVolumeEfeitosSonorosChange = (event) => {
    setVolumeEfeitosSonoros(event.target.value);
    setVolumeChanged(true);
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
    const fetchData = async () => {
      try {
        const userCollection = collection(firestore, 'Config');
        const userDocRef = doc(userCollection, '9oEfvzZG2zhsn33NBtna');

        const docSnapshot = await getDoc(userDocRef);
        if (docSnapshot.exists()) {
          const userData = docSnapshot.data();
          setVolumeMusica(userData.volumeMusica || 50);
          setVolumeEfeitosSonoros(userData.volumeEfeitosSonoros || 50);
        }
      } catch (error) {
        console.error('Erro ao obter dados do Firestore:', error);
      }
    };

    fetchData(); // Chamada à função que busca os dados
  }, []);

  const handleDenuncia = () => {
    const confirmDenuncia = window.confirm("Tem certeza que deseja denunciar o jogo?");
    
    if (confirmDenuncia) {
      const confirmOutro = window.confirm("Mesmo que isso dependa da sua vida?");
      if (confirmOutro) {
        navigate('/Denuncia');
      }
    }
  };

  return (
    <body className="telaConfig">
      {!seeImage ?(
      <>
        <section className="configContainer">
          <div className="configTitle">Configuração</div>
          <div className="configTexto" onClick={toggleModoChorao}>
            Modo Chorão: {enable ? 'ativado' : 'desativado'}
          </div>
          <div className="configTexto" onClick={handleDenuncia}>
            Denunciar jogo
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
          <div className="configToHome" onClick={handleBackClick}>
            {volumeChanged && "Salvar e "}
            Voltar
          </div>
        </section>
        <section className="configContent">
          <section className="configExplica">
            <div>Explicação: {explica}</div>
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
