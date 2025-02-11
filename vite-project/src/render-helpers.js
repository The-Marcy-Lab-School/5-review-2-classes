
/* Desired li structure
<li class='post-card'>
  <h3>Title</h3>
  <p>posted on...</p>
  <p class='post-content'>Content</p>
</li>
*/
export const renderPosts = (posts) => {
  const postsList = document.querySelector('ul#posts-list');
  postsList.innerHTML = '';

  posts.forEach((post) => {
    const { id, title, timestamp, content } = post;

    // <li class='post-card' data-post-id="1">
    const postListItem = document.createElement('li');
    postListItem.classList.add('post-card');
    postListItem.dataset.postId = id;
    // ^ add the id as a data-post-id attribute so we can find the post later

    // <h3>Title</h3>
    const postTitleHeading = document.createElement('h3')
    postTitleHeading.textContent = title;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button');

    // <p><i>Posted on ....</i></p>
    const postTimestamp = document.createElement('p')
    postTimestamp.innerHTML = `<i>Posted on ${timestamp.toLocaleString()}</i>`;

    // <p class='post-content'>Content</p>
    const postContent = document.createElement('p')
    postContent.textContent = content;
    postContent.classList.add('post-content');

    postListItem.append(postTitleHeading, deleteButton, postTimestamp, postContent);
    postsList.append(postListItem);
  })
}
