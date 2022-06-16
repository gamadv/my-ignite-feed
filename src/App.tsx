import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { PostItem, IPostProps } from './components/PostItem';

import styles from './App.module.css';

import './global.css';

type TPostProps = IPostProps & {
  id: number;
};

function App() {
  const posts: TPostProps[] = [
    {
      id: 1,
      author: {
        avatarUrl: 'https://github.com/gamadv.png',
        name: 'Moacir Gama',
        role: 'Frontend Develoepr',
      },
      content: [
        {
          type: 'paragraph',
          content:
            'Olá, meu nome é Moacir Gama e eu sou um desenvolvedor Frontend.',
        },
        {
          type: 'paragraph',
          content:
            'Eu sou um desenvolvedor Frontend e atualmente estou estudando para formar um profissional Frontend.',
        },
        { type: 'link', content: 'gama.dev/front' },
      ],
      publishedAt: new Date('2022-06-14 20:00:00'),
    },
    {
      id: 2,
      author: {
        avatarUrl: 'https://github.com/UrquizaN.png',
        name: 'Urquiza Master',
        role: 'Full Stack Master',
      },
      content: [
        {
          type: 'paragraph',
          content:
            'Olá, meu nome é Urquiza Master e eu sou um desenvolvedor do caralho!.',
        },
        {
          type: 'paragraph',
          content:
            'Eu sou um desenvolvedor Frontend e atualmente sou o melhor do Mundo',
        },
        { type: 'link', content: 'github/urquizan' },
      ],
      publishedAt: new Date('2022-06-03 20:30:00'),
    },
  ];

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(({ id, author, content, publishedAt }) => {
            return (
              <PostItem
                key={id}
                author={author}
                content={content}
                publishedAt={publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
