import React from 'react';
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/saronph.png" />

          <div className={styles.authorInfo}>
            <strong>Saron Philippi</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time 
          dateTime='2022-05-11 08:13:30'
          title='11 de maio às 08:13h'
        >
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. 
          O nome do projeto é DoctorCare 🚀
        </p>
        <p><a href="">👉 jane.design/doctorcare</a></p>
        <p><a href="">#novoprojeto #nlw #rocketseat</a></p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          placeholder="Deixe um comentário"
        />

        <footer>
          <button type="submit">
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}