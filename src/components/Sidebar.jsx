import React from 'react';
import { PencilLine } from 'phosphor-react';

import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover}
        src="https://images.unsplash.com/photo-1515705576963-95cad62945b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40" 
        alt="Personal background"
      />

      <div className={styles.profile}>
        <img 
          className={styles.avatar}
          src="https://avatars.githubusercontent.com/u/54987514?v=4" 
          alt="Avatar"
        />
        <strong>Saron Medeiros</strong>
        <span>Front-end Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}