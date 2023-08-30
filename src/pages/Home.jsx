import React from 'react'
import { useState } from "react";
import "../App.css";
import WorkingPoster from '../components/WorkingPoster';
import DonePoster from '../components/DonePoster';

function Home() {
  // working에 저장되는 post 데이터
  const [workingPosts, setWorkingPost] = useState([
    {
      id: 1,
      title: "리액트 공부하기",
      body: "리액트 기초를 공부해봅시다.",
      isDone: false,
    },
  ]);

  // done에 저장되는 post 데이터
  const [donePosts, setDonePost] = useState([
    {
      id: 1,
      title: "리액트 공부하기",
      body: "리액트 기초를 공부해봅시다.",
      isDone: true,
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
      id: workingPosts.length + 1,
      title,
      body: content,
      isDone: false,
    };
    setWorkingPost([...workingPosts, newPost]);
    setTitle("");
    setContent("");
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
          {workingPosts.map(function (item) {
            return (
              <WorkingPoster
                key={item.id}
                workingPosts={workingPosts}
                setWorkingPost={setWorkingPost}
                item={item}
                donePosts={donePosts}
                setDonePost={setDonePost}
              />
            );
          })}
        </div>

        {/* post한 done 게시물 */}
        <p className="how">Done..!🎉</p>
        <div className="post-box-layout">
          {donePosts.map(function (item) {
            return (
              <DonePoster
                key={item.id}
                item={item}
                donePosts={donePosts}
                setDonePost={setDonePost}
                workingPosts={workingPosts}
                setWorkingPost={setWorkingPost}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default Home