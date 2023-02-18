import { Link } from "react-router-dom";
import { IssueModel } from "../../../Lib/issue";

import styles from "../../../styles/Issues/Issues.module.css";

interface IProps {
  issue: IssueModel;
}

const IssueItem = ({ issue }: IProps) => {
  return (
    <div className={styles.issue_list}>
      <header className={styles.issue_list_header}>
        <Link to={`/issues/${issue.id}`}>
          <p className={styles.issue_list_header_title}>
            {issue.title.length >= 14 ? (
              <>{issue.title.slice(0, 14)}...</>
            ) : (
              issue.title
            )}
            <span className={styles.issue_list_header_title_memo_count}>
              [{issue.memo_count}]
            </span>
          </p>
        </Link>
        <p className={styles.issue_list_header_create_at}>
          작성일: {new Date(issue.created_at).toLocaleString()}
        </p>
        <p className={styles.issue_list_header_create_at}>
          조회 횟수: {issue.view_count}
        </p>
      </header>
    </div>
  );
};

export default IssueItem;
