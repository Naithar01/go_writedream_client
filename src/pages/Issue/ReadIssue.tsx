import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DeleteIssue, ReadIssue, ReadIssueModel } from "../../Lib/issue";
import ReadIssueItem from "../../components/Issues/item/ReadIssueItem";

import styles from "../../styles/Issues/ReadIssue.module.css";
import { CreateMemo, DeleteMemo } from "../../Lib/memo";

const ReadIssuePage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [issue, setIssue] = useState<ReadIssueModel>();
  const [createMemoText, setCreateMemoText] = useState<string>("");

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

  const DeleteMemoHandler = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    const id = event.currentTarget.name;

    if (!id) {
      return;
    }

    // 서버로 Delete 하고싶은 Memo id를 보내고 성공했다면 true
    // 그게 아니라 오류가 생겼다면 false를 반환받음
    const check_status = await DeleteMemo(Number(id));
    if (!check_status) {
      alert("Delete Memo Fail");
      return;
    }

    window.location.reload();
    return;
  };

  const ChangeCreateMemoHandler = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCreateMemoText(event.target.value);
  };

  const CreateMemoHandler = async () => {
    if (!createMemoText.trim().length) {
      alert("Check Memo Input State");
      return;
    }

    const data = await CreateMemo(Number(issue_id), createMemoText);

    const created_id: number = data.id;

    if (!created_id) {
      alert("Craete Memo Fail");
      return;
    }
    window.location.reload();
    return;
  };

  const DeleteIssueHandler = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    const check_status = await DeleteIssue(Number(issue_id));
    if (!check_status) {
      alert("Delete Memo Fail");
      return;
    }

    navigate("/issues");
    return;
  };

  return (
    <div className="read_issue_page">
      <div onClick={GoBack} className={styles.go_back_btn}>
        准备独白
      </div>
      {issue && (
        <ReadIssueItem
          issue={issue}
          DeleteMemoHandler={DeleteMemoHandler}
          ChangeCreateMemoHandler={ChangeCreateMemoHandler}
          CreateMemoHandler={CreateMemoHandler}
          DeleteIssueHandler={DeleteIssueHandler}
        />
      )}
    </div>
  );
};

export default ReadIssuePage;
