import { ImgHTMLAttributes } from 'react';
import styles from './styles.module.css';

type TAvatarProps = ImgHTMLAttributes<HTMLImageElement> & {
  hasBorder?: boolean;
};

export function Avatar(props: TAvatarProps) {
  const { hasBorder = true, ...rest } = props;

  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      {...rest}
    />
  );
}
