import styles from './Txt.module.scss';

interface Props {
  data: string,
};

export default function Txt({ data }: Props) {
  return <div className={styles.txtWr}>
    <div dangerouslySetInnerHTML={{ __html: data }} />
  </div>
}