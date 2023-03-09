export interface CategoryModel {
  id: number;
  title: string;
}

export const GetAllCategory = async () => {
  return await fetch(`/api/categories`, {
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
      console.log(err);
    });
};
