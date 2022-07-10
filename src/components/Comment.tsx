import { ThumbsUp, Trash } from 'phosphor-react';
import React, { useState } from 'react';
import { Avatar } from './Avatar';

import styles from './Comment.module.css';

interface CommentProps {
  content: string;
  handleDeleteComment: (commentToDelete: string) => void;
}

export function Comment({ content, handleDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function takeContentToDelete() {
    handleDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1;
    });
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src='https://github.com/saronph.png' alt='' />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Saron Medeiros Philippi</strong>
              <time dateTime='2022-05-11 08:13:30' title='11 de maio às 08:13h'>
                Cerca de 1h atrás
              </time>
            </div>

            <button onClick={takeContentToDelete} title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
