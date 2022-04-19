const baseUrl = '/api/Comment';

export const getAllPostComments = (id) => {
    return fetch(`${baseUrl}/${id}`)
        .then ((res) => res.json())
};

export const addComment = (comment) => {
    return fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment),
    });
  };

  