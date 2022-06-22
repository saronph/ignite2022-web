import { ThumbsUp, Trash } from "phosphor-react";
import React from 'react';
import { Avatar } from "./Avatar";

import styles from './Comment.module.css';

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar 
        hasBorder={false}
        src="https://github.com/saronph.png" 
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Saron Medeiros Philippi</strong>
              <time 
                dateTime='2022-05-11 08:13:30'
                title='11 de maio às 08:13h'
              >Cerca de 1h atrás</time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom, parabéns!!!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}