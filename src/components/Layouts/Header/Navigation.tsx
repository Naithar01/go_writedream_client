import { Link } from "react-router-dom";
import styles from "../../../styles/Layouts/Header/Navigation.module.css";

const Navigation = () => {
  return (
    <div className={styles.main_navigation}>
      <header className={styles.navigation_header}>
        <div className={styles.navigation_header_page_logo}>
          <Link to="/">Zl존정호</Link>
        </div>
        <div className={styles.navigation_header_page_list}>
          <ul>
            <li>
              <Link to="/issues?page=1&page_limit=5">兹洛独白</Link>
            </li>
            <li>
              <Link to="/issues/new">独白</Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Navigation;
