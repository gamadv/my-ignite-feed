import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from '../Avatar';
import { Comment } from '../Comment';

import styles from './styles.module.css';

type TAuthor = {
  name: string;
  avatarUrl: string;
  role: string;
};

type TContent = {
  type: 'paragraph' | 'link';
  content: string;
};

export interface IPostProps {
  author: TAuthor;
  publishedAt: Date;
  content: TContent[];
}

export function PostItem(props: IPostProps) {
  const { author, content, publishedAt } = props;

  const [comments, setComments] = useState([] as string[]);
  const [newCommentText, setNewCommentText] = useState('');

  const publishedFormated = format(publishedAt, "d 'de' LLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const parseContentType = (lineType: string, content: string) => {
    return lineType === 'paragraph' ? (
      <p key={content}> {content} </p>
    ) : (
      <p key={content}>
        {' '}
        <a href="#">{content}</a>
      </p>
    );
  };

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Por favor, digite um comentário');
  }

  function handleDeleteComment(commentTarget: string) {
    const commentsWithoutDeletedTarget = comments.filter(
      (comment) => comment !== commentTarget
    );

    setComments(commentsWithoutDeletedTarget);
  }

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} alt="Post Owner Profile Image"/>
          <div className={styles.authorInfo}>
            <strong> {author.name} </strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedFormated} dateTime={publishedAt.toISOString()}>
          {' '}
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          return parseContentType(line.type, line.content);
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong> Deixe Seu Feedback</strong>
        <textarea
          name="comment"
          placeholder="Deixe seu comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={handleDeleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
