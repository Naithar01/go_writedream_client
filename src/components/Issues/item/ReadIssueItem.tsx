import { ReadIssueModel } from "../../../Lib/issue";

import styles from "../../../styles/Issues/ReadIssue.module.css";
import MemoList from "../../memos/MemoList";

interface IProps {
  issue: ReadIssueModel;
  DeleteMemoHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
  ChangeCreateMemoHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  CreateMemoHandler: () => void;
  DeleteIssueHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const ReadIssueItem = ({
  issue,
  DeleteMemoHandler,
  ChangeCreateMemoHandler,
  CreateMemoHandler,
  DeleteIssueHandler,
}: IProps) => {
  return (
    <div className="read_issue_item">
      <header className={styles.read_issue_item_header}>
        <div className={styles.read_issue_item_header_title}>{issue.title}</div>
        <p className="read_issue_item_header_create_at">
          Create: {new Date(issue.created_at).toLocaleString()}
        </p>
        <span className={styles.read_issue_item_header_issue_count}>
          Memos: {issue.memos ? issue.memos.length : 0} || Views:
          {issue.view_count}
        </span>
        <p className="read_issue_item_header_issue_actions">
          <button type="button" onClick={DeleteIssueHandler}>
            Delete
          </button>
        </p>
      </header>
      <div className={styles.read_issue_item_content}>
        <div className={styles.read_issue_item_content_text}>
          {issue.content.split("\n").map((contentData, i) =>
            contentData.length ? (
              <p key={i} className="content">
                {contentData}
              </p>
            ) : (
              <p key={i} className="content">
                &nbsp;
              </p>
            )
          )}
        </div>
        <div className={styles.read_issue_item_content_memos}>
          <MemoList
            memos={issue.memos}
            DeleteMemoHandler={DeleteMemoHandler}
            ChangeCreateMemoHandler={ChangeCreateMemoHandler}
            CreateMemoHandler={CreateMemoHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default ReadIssueItem;
