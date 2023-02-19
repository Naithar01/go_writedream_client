import { ReadIssueModel } from "../../../Lib/issue";

import styles from "../../../styles/Issues/ReadIssue.module.css";
import MemoList from "../../memos/MemoList";

interface IProps {
  issue: ReadIssueModel;
}

const ReadIssueItem = ({ issue }: IProps) => {
  return (
    <div className="read_issue_item">
      <header className={styles.read_issue_item_header}>
        <div className={styles.read_issue_item_header_title}>{issue.title}</div>
        <p className="read_issue_item_header_create_at">
          Create: {new Date(issue.created_at).toLocaleString()}
        </p>
        <span className="read_issue_item_header_issue_count">
          Memos: {issue.memos ? issue.memos.length : 0} || Views:
          {issue.view_count}
        </span>
      </header>
      <div className={styles.read_issue_item_content}>
        <p className={styles.read_issue_item_content_text}>{issue.content}</p>
        <div className={styles.read_issue_item_content_memos}>
          <MemoList memos={issue.memos} />
        </div>
      </div>
    </div>
  );
};

export default ReadIssueItem;
