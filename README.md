> 면접 끝났으니 다시 react!!! 노트북 ssh key 등록 완료 (2020.12.15)
> 발표 언제나는거지..

# 강의링크
[따라하며 배우는 노드 리액트 영화사이트 만들기](https://www.inflearn.com/course/%EB%94%B0%EB%9D%BC%ED%95%98%EB%A9%B0-%EB%B0%B0%EC%9A%B0%EB%8A%94-%EB%85%B8%EB%93%9C-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EC%98%81%ED%99%94%EC%82%AC%EC%9D%B4%ED%8A%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0) - John Ahn
# 진행기간
2020.12.13 AM 1:00 (Sunday) ~
# 진행과정

## ISSUE!!
### 1
SSH 키를 등록했음에도 push할 때 아이디와 비밀번호를 요구하는 문제가 있었는데,
이것은 터미널이 깃 익스텐션이 활성화되기 전에 켜졌었기 때문이다.
**(When terminal comes up before the Git extension activated)**
껐다 켜니 해결되었다.

## React!!
const = constant. 다른 파일에서도 해당 변수를 사용할수 있도록

### Setting
npm install을 하니 역시나 엄청난 에러가. 그 해결을 위한 과정.

#### antd doesn't export Icon package. Change to ant-design.
Icon을 가져오는 부분이 바뀌었다. 수정해 준다.
```
client/
npm install @ant-design/icons --save-dev
```

여기까지 하니 변수를 사용하지 않고 있다는 Warning만 남은 상태.

```
npm install
```
Install npm in root, client directory.
**It installs dependencies in package.json.**

### moviedb api
링크 : https://www.themoviedb.org/
Setting - API에서 키 받아 오는데, 사용하는 이유에 API를 단독으로 써 넣어야 elaborate(정교한)하다고 판단한다. 허허

movie api v3 : 234c446afa7c9156e6c9a101b724f5ae

### 랜딩페이지 만들기
#### 메인 영화 이미지 가져오기
API로 호출하기 때문에 구성하는 단계에 MainImage를 컴포넌트로 뿌리기만 하면 가져오기도 전에
렌더링하면서, 정보가 null하다는 에러를 출력한다. 따라서 &&를 사용해서 가져와야 한다.

&&를 사용함으로써 MainMovieImage를 가져왔을 경우에만 렌더링하라는 의미가 되고, 에러 없이 정상적으로 출력할 수 있다.

### 그리드 만들기
commons 폴더를 하나 생성한다.

### useState의 사용 (나중에 보기)
response 앞에 ...를 붙여야 results(array type)를 정상적으로 출력하는 모습을 보였다.
강의에서는 ...를 뺐지만 강사의 코드에는 있길래 써 봤더니 그제야 된다. 뭐가 다른 것일까?

### 더보기 버튼 만들기
...response.results로 두면, 내용을 더 넣을 경우 덮어씌운다(overwrite).
추가를 하게 하려면 원래 있던 State를 앞에 넣어 주면 된다.

### 상세페이지 만들기
App.js에서 라우터 연결해줄 때 movieId와 같은 파라미터를 쓸 때에는 :(콜론)을 붙이는 것에 주의한다.
