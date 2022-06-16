import { useState } from 'react';
import { Trash, ThumbsUp } from 'phosphor-react';
import { Avatar } from '../Avatar';

import styles from './styles.module.css';

type TCommentProps = {
  content: string;
  onDeleteComment: (commentTarget: string) => void;
};

export function Comment(props: TCommentProps) {
  const { content, onDeleteComment } = props;

  const [likeCount, setLikeCount] = useState(0);

  const profileImg = 'https://github.com/gamadv.png';

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((oldLikeCount) => oldLikeCount + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src={profileImg} />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Moacir Gama</strong>
              <time title="11 de março 08hrs" dateTime="2022-05-11 08:15:00">
                {' '}
                Cerca de 1h atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar Comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={20} />
            Aplaudir
            <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
