const getId = ((id = 1) => () => id++)();

class Post {
  static #allPosts = {}

  constructor(title, content) {
    this.title = title;
    this.content = content;

    this.id = getId();
    this.timestamp = new Date();

    Post.#allPosts[this.id] = this;
  }

  update(newContent) {
    if (newContent === this.content) return;
    this.content = newContent;
    this.timestamp = new Date();
  }

  static getAllPosts() {
    return Object.values(Post.#allPosts);
  }

  static getPostById(id) {
    return Post.#allPosts[id];
  }
  static deletePostById(id) {
    delete Post.#allPosts[id];
  }
}

export default Post;

// We should be able to create new posts
new Post("Understanding Closures", "Closures are functions that remember variables...", "Alice");
new Post("JavaScript Factory Functions", "Factory functions return objects without using `new`...", "Bob");
new Post("Encapsulation in JavaScript", "Encapsulation helps hide data and protect state...", "Charlie");
console.log(Post.getAllPosts());

// We should be able to find a post and update it
const post1 = Post.getPostById(1)
post1.update('Closures require an inner function and an outer function.');
console.log(Post.getAllPosts());

// We should be able to delete a post
Post.deletePostById(2);
console.log(Post.getAllPosts());