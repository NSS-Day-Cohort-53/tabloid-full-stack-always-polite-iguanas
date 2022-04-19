import { getToken } from "./authManager";

const baseUrl = '/api/Comment';

// export const getAllPostComments = (id) => {
//   return getToken().then((token) => {
//     return fetch(`${baseUrl}/${id}`, {
//       method: "GET",
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     }).then((resp) => {
//       if (resp.ok) {
//         return resp.json();
//       } else {
//         throw new Error("An error occured retrieving comments");
//       }
//     });
//   });
// };

export const addComment = (comment) => {
  return getToken().then((token) => {
    return fetch(baseUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else if (res.status === 401) {
      throw new Error("Unauthorized");
    } else {
      throw new Error("An error has occured while creating new comment");
    }
  });
  });
};