import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NewIssueTemplate from "../../components/Issues/NewIssueTemplate";
import PageHeader from "../../components/Layouts/Header/PageHeader";
import { CategoryModel, GetAllCategory } from "../../Lib/category";
import { CreateIssue, NewIssueModel } from "../../Lib/issue";
import LoadingPage from "../IsLoading";

const CreateIssuePage = () => {
  const navigate = useNavigate();
  const [newIssue, setNewIssue] = useState<NewIssueModel>({
    title: "",
    content: ``,
  });
  const [categoryList, setCategoryList] = useState<CategoryModel[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");

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

    const data = await CreateIssue(newIssue, selectedCategory);

    if (!data.id) {
      window.location.reload();
      return;
    }

    navigate(`/issues/${data.id}`);
    return;
  };

  useEffect(() => {
    GetAllCategoryListHandler();
  }, []);

  const GetAllCategoryListHandler = async () => {
    const data = await GetAllCategory();

    const { categories } = data;

    if (!categories) {
      window.location.reload();
      return;
    }

    setCategoryList(data.categories);
    setSelectedCategory(data.categories[0].id);
  };

  const ChangeCategoryOptionHandler = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const category_id: string = e.target.value;

    if (!category_id) {
      return;
    }

    setSelectedCategory(category_id);
  };

  return selectedCategory ? (
    <div className="create_issue_page">
      <PageHeader text="新独白" />
      <NewIssueTemplate
        ChangeInputHandler={ChangeInputHandler}
        CreateIssueHandler={CreateIssueHandler}
        categoryList={categoryList}
        ChangeCategoryOptionHandler={ChangeCategoryOptionHandler}
      />
    </div>
  ) : (
    <LoadingPage />
  );
};

export default CreateIssuePage;
