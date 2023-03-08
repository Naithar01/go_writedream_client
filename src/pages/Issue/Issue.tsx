import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { GetIssuePagination, IssueModel } from "../../Lib/issue";
import IssueList from "../../components/Issues/IssueList";
import PageHeader from "../../components/Layouts/Header/PageHeader";
import Pagination from "../../components/Layouts/Pagination";
import LoadingPage from "../IsLoading";

const IssuePage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [issues, setIssues] = useState<IssueModel[]>([]);
  const [issues_list_count, setIssuesListCount] = useState<number>(0);
  const [issuePaginationMaxPage, setIssuePaginationMaxPage] =
    useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  let page: string | null = searchParams.get("page");
  let page_limit: number = Number(searchParams.get("page_limit"));

  // 서버에게 Issue List를 가져오게 API 요청을 보내는 코드
  useEffect(() => {
    if (page == "0") {
      page = "1";
    }

    if (page_limit == 0) {
      page_limit = 5;
    }

    GetIssues();
  }, [page]);

  const GetIssues = async () => {
    const datas = await GetIssuePagination(Number(page), page_limit);

    const issue_data = datas.issues;
    const issues_count = datas.issues_count;

    // 만약에 해당 페이지에 내용물이 없다면...
    if (!issue_data && page != "1") {
      navigate(`/issues?page=1&page_limit=${page_limit}`);
      window.location.reload();
      return;
    }
    // Issue list
    setIssues(issue_data);
    // 최대 몇 개의 Issue가 있는지
    setIssuesListCount(issues_count);
    // 최대 페이지를 구하는 코드
    // page_limit Query가 있으면 Query로 Max Page 계산
    // 그게 아니면 서버에서 빈 값으로 왔을 때 page_limit을 5로 해놨음
    if (page_limit) {
      setIssuePaginationMaxPage(Math.ceil(issues_count / page_limit));
    } else {
      setIssuePaginationMaxPage(Math.ceil(issues_count / 5));
    }

    setIsLoading(true);
  };

  return isLoading ? (
    <div className="issue_page">
      <PageHeader text="独白列表" />
      {/* 서버에서 가져온 Issue들을 Issue 컴포넌트로, Issue 컴포넌트에서는 map 함수 사용, Issue List 컴포넌트로 */}
      {issues && <IssueList issues={issues} />}
      {/* 페이징 처리를 해주는 코드 */}
      <Pagination
        page={Number(page)}
        page_limit={page_limit}
        issuePaginationMaxPage={issuePaginationMaxPage}
        name={"issues"}
      />
    </div>
  ) : (
    <LoadingPage />
  );
};

export default IssuePage;
