import './index.css'
import '../../Style/Reset.css'

import React, { useEffect, useState } from 'react';

export default function Home () {
  const [isReadyVisible, setIsReadyVisible] = useState(false);
  const [choose1, setChoose1] = useState(false);
  const [path, setPath] = useState(false);

  const [claro, setClaro] = useState(false);
  const [nao, setNao] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsReadyVisible(true);
    }, 2300);
    return () => clearTimeout(timeoutId);
  }, []);

  function afirmativo() {
    setClaro(true);
  };

  function negativo() {
    setNao(true);
    setIsReadyVisible(false);
    setPath(true);

    const pathTime = setTimeout(() => {
      setChoose1(true);
    }, 3300);
    return () => clearTimeout(pathTime);
  };

  return (
    <body className={nao ? "black-background" : ""}>
      {!path && (
      <main>
        {!isReadyVisible && (
          <>
            <h3 className="fade-in">Eae suave</h3>
          </>
        )}
        {isReadyVisible && (
          <section className="button-container">
            <h4 className="button-NotReady" onClick={negativo}>Não</h4><h4 className="button-Ready" onClick={afirmativo}>Claro</h4>
          </section>
        )}
      </main>
      )}
      {nao && (
        <main className="bad-path">
          {!choose1 && (
            <>
              <h3 className="ready">Oque??!</h3>
            </>
          )}
          {choose1 && (
            <section className="button-container">
              <h4 className="button-NotReady" >bravo?🤨</h4><h4 className="button-Ready">Sem tempo irmão🥱</h4>
            </section>
          )}
        </main>
      )}
      {claro && (
        <main className="good-path">
          <h3 className="ready">Preparado?!</h3>
        </main>
      )}
    </body>
  )
};
