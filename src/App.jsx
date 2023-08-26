import { useState } from "react";
import "./App.css";

function App() {
  
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [posts, setPost] = useState({
    id: 0,
    title: "",
    body: "",
    isDone: false,
  });

  // 제목 input에 정보 입력
  const onChangeTitleHandler = (event) => {
    setTitle(event.target.value);
  };
  // 내용 input에 정보 입력
  const onChangeContentHandler = (event) => {
    setContent(event.target.value);
  };

  const addPost = (title, content) => {
    const newPost = {
      id: posts.length + 1,
      title,
      body: content,
      // isDone
    };
    setPost([...posts, newPost]);
  };

  return (
    <div className="App">
      {/* 제일 고정 상단 헤더 */}
      <header className="nav">
        <p>My ToDo List</p>
        <p>React</p>
      </header>

      {/*게시글 작성 */}
      <div className="post-box">
        <div className="input-box">
          제목 <input value={title} onChange={onChangeTitleHandler} />
          내용 <input value={content} onChange={onChangeContentHandler} />
        </div>
        <button onClick={addPost}>추가하기</button>
      </div>

      {/* post한 workign 게시물 */}
      <p className="how">Working..🔥</p>
      <div className="post-box-layout">
        <div className="posted-box">
          <div className="constent">
            <p>{posts.title}</p>
            <p>{posts.body}</p>
          </div>
          <div className="btn">
            <button className="delete-btn">삭제하기</button>
            <button className="done-btn">완료</button>
          </div>
        </div>

        <div className="posted-box">
          <div className="constent">
            <p>제목</p>
            <p>내용</p>
          </div>
          <div className="btn">
            <button className="delete-btn">삭제하기</button>
            <button className="done-btn">완료</button>
          </div>
        </div>
      </div>

      {/* post한 done 게시물 */}
      <p className="how">Done..!🎉</p>
      <div className="post-box-layout">
        <div className="posted-box">
          <div className="constent">
            <p>{posts.title}</p>
            <p>{posts.body}</p>
          </div>
          <div className="btn">
            <button className="delete-btn">삭제하기</button>
            <button className="done-btn">취소</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
