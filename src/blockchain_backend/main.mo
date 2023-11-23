import List "mo:base/List";
import Array "mo:base/Array";
import Debug "mo:base/Debug";
import Time "mo:base/Time";
actor {
  type Post = {
    title: Text;
    content: Text;
  };
  stable var posts: List.List<Post> = List.nil<Post>();

  public query func greet(name : Text) : async Text {
    return "Hello, " # name # "!";
  };

  public query func getPosts() : async [Post] {
    Debug.print(debug_show (posts));
    return List.toArray<Post>(posts);
  };

  public query func getPost(id: Nat) : async ?Post {
    return List.get(posts,id);
  };
  
  public func addPost(post: Post)  {
    // let post:Post = {
    //   title= post.title;
    //   content=post.content;
    // };
    posts := List.push(post, posts);
  };
};
