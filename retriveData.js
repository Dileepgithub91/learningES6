fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(data => {
    data.forEach(post => {
      let userId = post.userId;
      let id = post.id;
      let title = post.title;
      let body = post.body;
      console.log("userId:", userId, "id:", id, "title:", title, "body:", body);
    });
  })
  .catch(error => {
    console.error("error", error);
  });
