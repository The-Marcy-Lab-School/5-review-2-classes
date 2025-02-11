import './style.css'

import { renderPosts } from './render-helpers';
import Post from './models/Post-solution';

const handlePostSubmit = (e) => {
  e.preventDefault();
  const form = e.target;

  const title = form.title.value;
  const content = form.content.value;

  new Post(title, content);

  renderPosts(Post.getAllPosts());

  form.reset();
}

const handlePostUpdate = (e) => {
  if (!e.target.matches('.post-content')) return;

  const postContent = e.target;
  const postCard = postContent.closest('.post-card');
  const postId = postCard.dataset.postId;

  // use the postId to find the Post instance
  const post = Post.getPostById(postId);

  const textarea = document.createElement('textarea')
  textarea.value = e.target.textContent;
  postCard.append(textarea);

  textarea.focus();
  textarea.addEventListener('focusout', (e) => {
    // update the post and re-render
    post.update(textarea.value);
    renderPosts(Post.getAllPosts());
  }, { once: true });
  // ^ this removes the event listener after first use
}

const handleDeletePost = (e) => {
  if (!e.target.matches('.delete-button')) return;

  const postContent = e.target;
  const postCard = postContent.closest('.post-card');
  const postId = postCard.dataset.postId;

  Post.deletePostById(postId);

  renderPosts(Post.getAllPosts());
}


const main = () => {
  renderPosts(Post.getAllPosts());

  // When the form for a new post is submitted...
  document.querySelector('#post-form').addEventListener('submit', handlePostSubmit);

  // When anything in the posts list is clicked... event delegation!
  document.querySelector('#posts-list').addEventListener('click', handlePostUpdate);
  document.querySelector('#posts-list').addEventListener('click', handleDeletePost);

}
main();