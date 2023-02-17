export interface IssueModel {
  id: number;
  title: string;
  content: string;
  view_count: number;
  created_at: string;
  updated_at: string;
  memo_count: number;
}

export const GetIssuePagination = async (page: number, page_limit: number) => {
  if (page == 0 || page_limit == 0) {
    return await fetch(`/api/issues?page=1&page_limit=5`)
      .then((res) => res.json())
      .then((data) => {
        return data;
      })
      .catch((err) => {
        alert("Error");
      });
  }

  return await fetch(`/api/issues?page=${page}&page_limit=${page_limit}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      alert("Error");
    });
};
