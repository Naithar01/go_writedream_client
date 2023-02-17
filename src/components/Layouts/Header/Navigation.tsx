import { Link } from "react-router-dom";
import styles from "../../../styles/Layouts/Header/Navigation.module.css";

const Navigation = () => {
  return (
    <div className={styles.main_navigation}>
      <header className={styles.navigation_header}>
        <div className={styles.navigation_header_page_logo}>
          <Link to="/">Page Logo</Link>
        </div>
        <div className={styles.navigation_header_page_list}>
          <ul>
            <li>
              <a href="/issues?page=1&page_limit=5">Issues</a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Navigation;
