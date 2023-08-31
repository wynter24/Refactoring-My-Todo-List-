import RemoveButton from "./RemoveButton";

const DonePoster = ({ item, posts, setPosts }) => {
  // (done zone) 취소 버튼 눌렀을 때 working 존으로 다시 back
  const NotYet = (id) => {
    const notDonePost = posts.map((post) => {
      if (post.id === id) {
        return {
          id,
          title: post.title,
          content: post.content,
          isDone: false,
        };
      } else {
        return post;
      }
    });
    setPosts(notDonePost);
  };

  return (
    <div className="posted-box">
      <div className="constent">
        <button>상세보기</button>
        <p>{item.title}</p>
        <p>{item.content}</p>
      </div>
      <div key={item.id} className="btn">
        <RemoveButton posts={posts} setPosts={setPosts} item={item} />
        <button onClick={() => NotYet(item.id)} className="done-btn">
          취소
        </button>
      </div>
    </div>
  );
};

export default DonePoster;
