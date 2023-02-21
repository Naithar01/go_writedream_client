import { DELETE_ISSUE_STATE, DELETE_STATUS } from "./action";
import { MemoModel } from "./memo";

export interface IssueModel {
  id: number;
  title: string;
  content: string;
  view_count: number;
  created_at: string;
  updated_at: string;
  memo_count: number;
}

export interface ReadIssueModel {
  id: number;
  title: string;
  content: string;
  view_count: number;
  created_at: string;
  updated_at: string;
  memos: MemoModel[];
}

export const GetIssuePagination = async (page: number, page_limit: number) => {
  if (page == 0 || page_limit == 0) {
    return await fetch(`/api/issues?page=1&page_limit=5`, {
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

export const ReadIssue = async (issue_id: Number) => {
  return await fetch(`/api/issues/${issue_id}`, {
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

export const DeleteIssue = async (id: number) => {
  return await fetch(`/api/issues/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (res.status == DELETE_ISSUE_STATE) {
        return true;
      }
      return false;
    })
    .catch((err) => {
      alert("Error");
    });
};
