import { Trash, ThumbsUp } from 'phosphor-react';
import { Avatar } from '../Avatar';

import styles from './styles.module.css';

export function Comment() {
    const profileImg = 'https://github.com/gamadv.png'
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src={profileImg} />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Moacir Gama</strong>
                            <time title="11 de março 08hrs" dateTime="2022-05-11 08:15:00"> Cerca de 1h atrás</time>
                        </div>

                        <button title="Deletar Comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp size={20} />
                        Aplaudir
                        <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}
