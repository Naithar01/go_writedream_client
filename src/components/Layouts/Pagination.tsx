import { useNavigate, useNavigation, useRoutes } from "react-router-dom";
import styles from "../../styles/Layouts/Pagination.module.css";

interface IProps {
  page: Number;
  page_limit: Number;
  issuePaginationMaxPage: Number;
  name: string;
}

const Pagination = ({
  page,
  page_limit,
  issuePaginationMaxPage,
  name,
}: IProps) => {
  const navigate = useNavigate();

  const createPaginationBtn = () => {
    const pagination_items = [];

    for (let i = Number(page) - 2; i <= Number(page) + 3; i++) {
      if (i < 1) {
        continue;
      } else if (i > issuePaginationMaxPage) {
        continue;
      } else {
        pagination_items.push(
          <li key={i}>
            <a
              href={`/${name}?page=${i}&page_limit=${page_limit}`}
              className="pagination_page_btn_item"
            >
              {i}
            </a>
          </li>
        );
      }
    }
    return pagination_items;
  };

  const changePageLimitHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const page_limit_value: number = +e.target.value;
    navigate(`/issues?page=${page}&page_limit=${page_limit_value}`);
    window.location.reload();
  };

  return (
    <div className={styles.pagination}>
      <ul className={styles.pagination_page_btn_list}>
        {createPaginationBtn()}
      </ul>
      <select
        name="pagination_page_limit_select_list"
        onChange={changePageLimitHandler}
      >
        <option value="" defaultChecked></option>
        <option value="3">3</option>
        <option value="5">5</option>
        <option value="10">10</option>
      </select>
    </div>
  );
};

export default Pagination;
