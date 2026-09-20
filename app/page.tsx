import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <button type="button" className={styles.btn}>浮く・文字間</button> 
      <button type="button" className={styles.slide}>スライド</button>  
      <button type="button" className={styles.push}>沈む</button> 
      <button type="button" className={styles.big}>でかい</button>
      <div className={styles.Xmove}>これは横に動く</div>
      <div className={styles.small}>小さくなる</div>
      <span className={styles.line}>ラインがひかれる</span>
      <span className={styles.marker}>マーカーされる</span>
      <div className={styles.grad}>グラデーション</div>

    </div>

  );
}
