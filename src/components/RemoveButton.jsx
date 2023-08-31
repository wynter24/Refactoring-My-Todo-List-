const RemoveButton = ({ posts,setPosts,item }) => {
  const RemovePostButton = (id) => {
    const newPost = posts.filter((post) => post.id !== id);
    setPosts(newPost);
  };
  return (
    <button
          onClick={() => RemovePostButton(item.id)}
          className="delete-btn"
        >
          삭제하기
        </button>
  )
};

export default RemoveButton;