import { AiOutlineLoading } from 'react-icons/ai';

import { SpinnerSizeEnum } from '@/shared/enums/spinner.enum';
import styles from './Spinner.module.css';

type SpinnerSizeType = SpinnerSizeEnum.SM | SpinnerSizeEnum.MD | SpinnerSizeEnum.LG;

interface SpinnerProps {
  size?: SpinnerSizeType;
}

export const Spinner = ({ size = SpinnerSizeEnum.SM }: SpinnerProps) => {
  return (
    <AiOutlineLoading className={styles.spinner} size={size} />
  );
};
