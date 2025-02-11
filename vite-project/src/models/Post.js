const getId = ((id = 1) => () => id++)();

/* 
Create a Post class:
* Post instances have a title, content, id, and timestamp property
* The Post class can return a list of all Posts in an Array
* Each Post instance can update its content. 
  * The timestamp should update as well (but only if the content changes).
* The Post class can find a single Post by its id
* The Post class can delete a single Post by its id

TIP: Keep track of all Posts in an Object, mapping { id: Post }
*/

class Post {

}

export default Post;

// We should be able to create new posts and see them

// new Post("Understanding Closures", "Closures are functions that remember variables...", "Alice");
// new Post("JavaScript Factory Functions", "Factory functions return objects without using `new`...", "Bob");
// new Post("Encapsulation in JavaScript", "Encapsulation helps hide data and protect state...", "Charlie");
// console.log(Post.getAllPosts());

// We should be able to find a post and update it

// const post1 = Post.getPostById(1)
// post1.update('Closures require an inner function and an outer function.');
// console.log(Post.getAllPosts());

// We should be able to delete a post

// Post.deletePostById(2);
// console.log(Post.getAllPosts());