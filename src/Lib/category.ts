export interface CategoryModel {
  id: number;
  title: string;
}

export const GetAllCategory = async () => {
  return await fetch(
    `http://ec2-3-39-189-105.ap-northeast-2.compute.amazonaws.com:8080/api/categories`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
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
