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

//create a new post
function createNewPost(thePost, callBack) {
  setTimeout(() => {
    posts.push(thePost);
    callBack();
  }, 2000);
}
getAllPosts();
createNewPost(
  {
    title: "Spring",
    description: "Evreyones favorite Java Framework",
  },
  getAllPosts
);
