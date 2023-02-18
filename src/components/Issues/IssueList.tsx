import { IssueModel } from "../../Lib/issue";
import IssueItem from "./item/IssueItem";

import styles from "../../styles/Issues/Issues.module.css";

interface IProps {
  issues: IssueModel[];
}

const IssueList = ({ issues }: IProps) => {
  return (
    <div className={styles.issue}>
      {issues &&
        issues.map((issue) => <IssueItem issue={issue} key={issue.id} />)}
    </div>
  );
};

export default IssueList;
