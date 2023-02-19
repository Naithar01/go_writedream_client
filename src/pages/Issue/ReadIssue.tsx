import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ReadIssue, ReadIssueModel } from "../../Lib/issue";
import ReadIssueItem from "../../components/Issues/item/ReadIssueItem";

import styles from "../../styles/Issues/ReadIssue.module.css";

const ReadIssuePage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [issue, setIssue] = useState<ReadIssueModel>();

  const issue_id: string | undefined = params.issue_id;

  useEffect(() => {
    // 만약에 Params로 받은 Issue_id 가 없다면 .. or 정수가 아니라면
    if (Number(issue_id) <= 0 || Number.isNaN(Number(issue_id))) {
      navigate("/issues");
      return;
    } else {
      // 서버로부터 Issue 를 받고 useState에 넣음
      GetIssue();
    }
  }, [issue_id]);

  const GetIssue = async () => {
    const data = await ReadIssue(Number(issue_id));

    if (!data.issue) {
      navigate("/issues");
      return;
    }

    setIssue(data.issue);
  };

  const GoBack = () => {
    navigate(-1);
    return;
  };

  return (
    <div className="read_issue_page">
      <div onClick={GoBack} className={styles.go_back_btn}>
        Go Back
      </div>
      {issue && <ReadIssueItem issue={issue} />}
    </div>
  );
};

export default ReadIssuePage;
