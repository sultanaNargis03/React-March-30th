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
async function doIt() {
  await createNewPost({
    title: "New Post",
    description: "Added using Async/await",
  })
    .then(getAllPosts)
    .catch((err) => console.log(err));
}
//doIt();

async function fetchAllUserFromRemoteAPI() {
  const respone = await fetch("https://jsonplaceholder.typicode.com/posts");
  const dataFetched = respone.json();
  console.log(dataFetched);
}
fetchAllUserFromRemoteAPI();
