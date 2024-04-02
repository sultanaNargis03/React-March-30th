const posts = [
  { title: "React", description: "A popular JS Library" },
  { title: "Angular", description: "One of the in-demand JS Framework" },
];

//Fetches All posts
function getAllPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((thePost, index) => {
      output += `<li>${thePost.title}:${thePost.description}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createNewPost(thePost) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(thePost);

      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("Error:Sometinh went wrong");
      }
    }, 2000);
  });
}
createNewPost({ title: "Vue", description: "Another cool JS tool" })
  .then(getAllPosts)
  .catch((err) => console.log(err));
