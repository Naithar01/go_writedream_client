import styles from "../../styles/Issues/NewIssue.module.css";

interface IProps {
  ChangeInputHandler: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  CreateIssueHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const NewIssueTemplate = ({
  ChangeInputHandler,
  CreateIssueHandler,
}: IProps) => {
  return (
    <div className={styles.create_issue_template}>
      <div className={styles.create_issue_template_inp}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Enter Title"
          autoComplete="off"
          onChange={ChangeInputHandler}
        />
      </div>
      <div className={styles.create_issue_template_inp}>
        <label htmlFor="content">Content</label>
        <textarea
          name="content"
          id="content"
          placeholder="Enter Content"
          autoComplete="off"
          onChange={ChangeInputHandler}
        ></textarea>
      </div>
      <div>
        <button type="button" onClick={CreateIssueHandler}>
          Create
        </button>
      </div>
    </div>
  );
};

export default NewIssueTemplate;
