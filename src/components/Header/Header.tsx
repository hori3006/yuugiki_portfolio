import { Link } from "react-router-dom";
import * as styles from "./Header.css";

const Header = () => {
  return (
    <div className={styles.header}>
         <h1 className={styles.headerTitle}>ポートフォリオ</h1>
        <div className={styles.headerLink}>
                <Link to="/" className={styles.primaryButton}>
                    HOME
                </Link>

                <Link to="/demo" className={styles.primaryButton}>
                    ぱちんこ図柄揃い演出
                </Link>

                {/* <Link to="/simulator" className={styles.primaryButton}>
                    出玉シミュレーター
                </Link> */}

      </div>
    </div>
  );
};

export default Header;
