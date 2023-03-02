import { CategoryModel } from "../../Lib/category";
import styles from "../../styles/Issues/NewIssue.module.css";

interface IProps {
  ChangeInputHandler: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  CreateIssueHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
  categoryList: CategoryModel[];
  ChangeCategoryOptionHandler: (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => void;
}

const NewIssueTemplate = ({
  ChangeInputHandler,
  CreateIssueHandler,
  categoryList,
  ChangeCategoryOptionHandler,
}: IProps) => {
  return (
    <div className={styles.create_issue_template}>
      <select
        name="create_issue_template_category"
        onChange={ChangeCategoryOptionHandler}
      >
        {categoryList.map((category) => (
          <option key={category.id} value={category.id}>
            {category.title}
          </option>
        ))}
      </select>
      <div className={styles.create_issue_template_inp}>
        <label htmlFor="title">输入独白标题</label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="输入独白标题"
          autoComplete="off"
          onChange={ChangeInputHandler}
        />
      </div>
      <div className={styles.create_issue_template_inp}>
        <label htmlFor="content">独白</label>
        <textarea
          name="content"
          id="content"
          placeholder="独白"
          autoComplete="off"
          onChange={ChangeInputHandler}
        ></textarea>
      </div>
      <div>
        <button type="button" onClick={CreateIssueHandler}>
          创造
        </button>
      </div>
    </div>
  );
};

export default NewIssueTemplate;
