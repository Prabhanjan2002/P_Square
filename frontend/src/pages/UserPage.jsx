import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";

const UserPage = () => {
  return (
    <>
      <UserHeader
        likes={1200}
        replies={481}
        postImg="/post1.png"
        postTitle="lets talk"
      />
      <UserPost
        likes={1200}
        replies={481}
        postImg="/post1.png"
        postTitle="lets talk"
      />
      <UserPost
        likes={1200}
        replies={481}
        postImg="/post2.png"
        postTitle="lets talk"
      />
      <UserPost
        likes={1200}
        replies={481}
        postImg="/post1.png"
        postTitle="lets talk"
      />
      <UserPost likes={1200} replies={481} postTitle="post without picture" />
    </>
  );
};

export default UserPage;
