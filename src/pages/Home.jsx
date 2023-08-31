import React from "react";
import { useState } from "react";
import "../App.css";
import WorkingPoster from "../components/WorkingPoster";
import DonePoster from "../components/DonePoster";

function Home() {
  // working, done에 저장되는 post 데이터
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "리액트 공부하기",
      content: "리액트 기초를 공부해봅시다.",
      isDone: false,
    },
  ]);

  // 사용자가 입력한 정보
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  // done용으로 true false하나 만들어야 할듯?

  // 제목 input에 정보 입력
  const onChangeTitleHandler = (event) => {
    setTitle(event.target.value);
  };
  // 내용 input에 정보 입력
  const onChangeContentHandler = (event) => {
    setContent(event.target.value);
  };

  // 게시글 추가
  const onSubmitHandler = () => {
    const newPost = {
      id: posts.length===0 ? 1 : posts[posts.length-1].id + 1,
      title,
      content,
      isDone: false,
    };
    setPosts([...posts, newPost]);
    setTitle("");
    setContent("");
    console.log(newPost);
  };

  return (
    <div>
      {/*게시글 작성 */}
      <div className="post-box">
        <div className="input-box">
          제목 <input value={title} onChange={onChangeTitleHandler} />
          내용 <input value={content} onChange={onChangeContentHandler} />
        </div>
        <button onClick={onSubmitHandler}>추가하기</button>
      </div>

      <main>
        {/* post한 workign 게시물 */}
        <p className="how">Working..🔥</p>
        <div className="post-box-layout">
          {posts
            .filter((item) => {
              return item.isDone === false;
            })
            .map(function (item) {
              return (
                <WorkingPoster
                  key={item.id}
                  posts={posts}
                  setPosts={setPosts}
                  item={item}
                />
              );
            })}
        </div>

        {/* post한 done 게시물 */}
        <p className="how">Done..!🎉</p>
        <div className="post-box-layout">
          {posts
            .filter((item) => {
              return item.isDone === true;
            })
            .map(function (item) {
              return (
                <DonePoster
                  key={item.id}
                  item={item}
                  posts={posts}
                  setPosts={setPosts}
                />
              );
            })}
        </div>
      </main>
    </div>
  );
}

export default Home;
