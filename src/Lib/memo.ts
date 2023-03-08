import { DELETE_STATUS } from "./action";

export interface MemoModel {
  id: number;
  issue_id: number;
  text: string;
  created_at: string;
}

export const DeleteMemo = async (id: number) => {
  return await fetch(
    `http://ec2-3-39-189-105.ap-northeast-2.compute.amazonaws.com:8080/api/issues/memos/${id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((res) => {
      if (res.status == DELETE_STATUS) {
        return true;
      }
      return false;
    })
    .catch((err) => {
      alert("Error");
    });
};

export const CreateMemo = async (id: number, text: string) => {
  return await fetch(
    `http://ec2-3-39-189-105.ap-northeast-2.compute.amazonaws.com:8080/api/issues/memos/${id}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    }
  )
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      alert("Error");
    });
};
