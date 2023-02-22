import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NewIssueTemplate from "../../components/Issues/NewIssueTemplate";
import PageHeader from "../../components/Layouts/Header/PageHeader";
import { CreateIssue, NewIssueModel } from "../../Lib/issue";

const CreateIssuePage = () => {
  const navigate = useNavigate();
  const [newIssue, setNewIssue] = useState<NewIssueModel>({
    title: "",
    content: "",
  });

  const ChangeInputHandler = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setNewIssue({ ...newIssue, [name]: value });
  };

  const CreateIssueHandler = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    if (
      newIssue.title.trim().length == 0 ||
      newIssue.content.trim().length == 0
    ) {
      alert("Enter Title\nEnter Content");
      return;
    }

    const data = await CreateIssue(newIssue);

    if (!data.id) {
      window.location.reload();
      return;
    }

    navigate(`/issues/${data.id}`);
    return;
  };

  return (
    <div className="create_issue_page">
      <PageHeader text="New Issue" />
      <NewIssueTemplate
        ChangeInputHandler={ChangeInputHandler}
        CreateIssueHandler={CreateIssueHandler}
      />
    </div>
  );
};

export default CreateIssuePage;
