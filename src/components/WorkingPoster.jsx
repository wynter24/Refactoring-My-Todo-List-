import { useNavigate } from "react-router-dom";
import RemoveButton from "./RemoveButton";

const WorkingPoster = ({ posts, setPosts, item }) => {
  // working 완료 버튼: false->true => done zone을 이동
  const WorkingDone = (id) => {
    // working에서 없어짐 -> 없애면 안됨, 길이는 유지하되 isDone만 바꿔야 한다.
    // const workingDonePost = posts.filter((post) => post.isDone === false);
    // setPosts(workingDonePost);
    // console.log(posts);
    const changeIsDone = posts.map((post) => {
      if (post.id === id) {
        return {
          id,
          title: post.title,
          content: post.content,
          isDone: true,
        };
      } else {
        return post;
      }
    });
    setPosts(changeIsDone);
  };

  // 상세보기 클릭 시 상세페이지로 이동
  const navigate = useNavigate();

  return (
    <div className="posted-box">
      <div className="constent">
        <button
          onClick={() => {
            navigate("/detail");
          }}
        >
          상세보기
        </button>
        <p>{item.title}</p>
        <p>{item.body}</p>
      </div>
      <div key={item.id} className="btn">
        <RemoveButton posts={posts} setPosts={setPosts} item={item} />
        <button onClick={() => WorkingDone(item.id)} className="done-btn">
          완료
        </button>
      </div>
    </div>
  );
};

export default WorkingPoster;
