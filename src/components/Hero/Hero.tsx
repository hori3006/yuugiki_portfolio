import profileImage from "../../assets/profile.PNG";
import demoImage from "../../assets/demoImage.png";
// import simulatorImage from "../../assets/simulatorImage.png";
import * as styles from "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <main className={styles.hero}>
      {/* 自己紹介 */}
      <section
        className={styles.heroProfile}
        aria-labelledby="profile-heading"
      >
        <img
          src={profileImage}
          alt="堀壮心のプロフィール"
          className={styles.profileImage}
          loading="lazy"
        />
        <h1 id="profile-heading">堀 壮心 (Hori Soshin)</h1>
        <h2>自己紹介</h2>
        <p className={styles.heroMessage}>
          こんにちは。熊本大学大学院 自然科学教育部 理学専攻の堀 壮心です。<br />
          パチンコ・スロットが好きで、週2〜3回ホールに通っています。<br />
          自分は物理学科を卒業予定ですが、プログラミングが好きで、プログラミングを用いて何か開発に携わりたいと考えていました。<br />
          それならば、自分が好きなぱちんこ・パチスロを開発してみたいと考え、遊技機業界の開発職のエンジニアを志望しました。<br />
          その先駆けとして、簡易的ではありますが、Web上でぱちんこの図柄揃い演出を制作してみました。<br />
          これからここに他のカットイン演出を取り入れて迫力を出したり、自分が好きな台の演出に近い演出を再現できたらいいなと考えています。
        </p>
      </section>

      {/* 志望理由 */}
      <section className={styles.heroReason} aria-labelledby="reason-heading">
        <h2 id="reason-heading">志望理由</h2>
        <p>
          私は、自分自身が日々ぱちんこ・パチスロを遊技する中で、
          遊技機ならではのゲーム性や演出に強い魅力を感じると同時に、
          そのシステム開発を通じてユーザーに楽しみや感動を届けたいと考えています。<br />
          ぱちんこの通常時に訪れる「先バレ」や右打ち中の演出、
          パチスロの大事な局面でのレバーONやレア役を引いた瞬間には、
          他の娯楽にはない独特の緊張感と高揚感があります。<br />
          この体験から遊技機の魅力というものを強く感じ、
          開発職のエンジニアとして新しい演出を創造し、多くのユーザーに感動を届けたいと考えています。
        </p>
      </section>

      {/* 作品紹介 */}
      <section
        className={styles.projectPreview}
        aria-labelledby="projects-heading"
      >
        <h2 id="projects-heading" className={styles.projectPassage}>
          制作したアプリ
        </h2>
        <i
          className={`fa-solid fa-down-long ${styles.downIcon}`}
          aria-hidden="true"
        />

        <div className={styles.cards}>
          {/* 演出デモ */}
          <div className={styles.card}>
            <h3>ぱちんこ図柄揃い演出</h3>
            <img
              src={demoImage}
              alt="演出デモのプレビュー"
              className={styles.demoImage}
              loading="lazy"
            />
            <p className={styles.cardText}>
             自分が好きな台である「e Re:ゼロから始める異世界生活season2」のRUSH中の図柄揃いをリールの回転やカットイン演出を簡易的にを再現しました。
            </p>
            <Link
              to="/demo"
              className={styles.primaryButton}
              aria-label="演出デモの詳細ページへ移動"
            >
              →演出デモを見る
            </Link>
          </div>

          {/* 出玉シミュレーター
          <div className={styles.card}>
            <h3>出玉シミュレーター</h3>
            <img
              src={simulatorImage}
              alt="出玉シミュレーターのプレビュー"
              className={styles.simulatorImage}
              loading="lazy"
            />
            <p className={styles.cardText}>
              確率計算や出玉設計をブラウザで体験できるツール。
            </p>
            <Link
              to="/simulator"
              className={styles.primaryButton}
              aria-label="出玉シミュレーターの詳細ページへ移動"
            >
              シミュレーターを見る
            </Link>
          </div> */}
        </div>
      </section>
    </main>
  );
};

export default Hero;
