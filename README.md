# Refactoring My-Todo-List 

## 변경사항

### workingPosts state와 donePosts state를 하나의 state로 관리
working과 done에 저정되는 데이터를 분리하여 관리하는데 번거로움 발생  
이를 해결하고자 posts라는 하나의 state에 담아주었다.

### 완료, 취소 버튼 클릭시 실행되는 함수 내부 코드 변경 (filter -> map)
이전에는 filter 메서드를 사용하여 조건을 충족하지 못한 객체는 버리도록 작성  
filter를 통해 데이터를 버리는 것이 아니라 데이터는 유지하되 isDone만 바꾸어야한다.  
그래서 map 메서드를 사용하여 state에 담긴 전체 데이터 중 버튼을 누른 post의 isDone만   
변경하여 변경된 post과 이전 posts를 새로운 배열에 담아 반환해 주었다.

### 추가 버튼 클릭 시 생성되는 post의 id 값 할당 방식 변경
- 이전 코드: 배열의 길이 + 1  
- 변경한 코드: 배열의 길이가 0이면 1을 아니면 배열의 마지막 인덱스+1  
이전 코드에서는 삭제, 추가 과정에서 id 값이 겹쳐 오류가 발생했었다.(My-Todo-List Issues 참고)  
그래서 배열의 마지막 인덱스에 +1을 하여 id 값이 겹치지 않게 변경하였다.  
여기서 주의해야할 점은 배열의 길이가 0 일때 마지막 인덱스가 존재하지 않아 post가 없는 상태에서  
post를 추가할 시 오류가 발생한다. 이를 방지하고자 배열의 길이가 0일 때 (post가 1개도 존재하지 않을 때)  
id에 1을 할당하였다.

### 컴포넌트 분리
- WorkingPoster
- DonePoster
- RemoveButton

---
~~Redux 적용과 detail 페이지 추가는 React-Lv2-My-To-Do-List에서 확인 바람 ~~ 