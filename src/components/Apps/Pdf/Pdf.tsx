import styles from './Pdf.module.scss';

interface PropsType {
  data: string,
};

export default function Pdf({ data: href }: PropsType) {
  const hideCursor = () => {
    (document.querySelector('.cursor') as HTMLElement)!.style.display = 'none';
  };

  const showCursor = () => {
    (document.querySelector('.cursor') as HTMLElement)!.style.display = 'block';
  };

  return <div className={styles.pdfWr}>
    <iframe
      onMouseOver={hideCursor}
      onMouseLeave={showCursor}
      src={href}
    />
  </div>
}