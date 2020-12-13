> 면접 끝났으니 다시 react!!!

# 강의링크
[따라하며 배우는 노드 리액트 영화사이트 만들기](https://www.inflearn.com/course/%EB%94%B0%EB%9D%BC%ED%95%98%EB%A9%B0-%EB%B0%B0%EC%9A%B0%EB%8A%94-%EB%85%B8%EB%93%9C-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EC%98%81%ED%99%94%EC%82%AC%EC%9D%B4%ED%8A%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0) - John Ahn
# 진행기간
2020.12.13 ~

# 진행과정

### Setting
npm install을 하니 역시나 엄청난 에러가. 그 해결을 위한 과정.

#### antd doesn't export Icon package. Change to ant-design.
Icon을 가져오는 부분이 바뀌었다. 수정해 준다.
```
client/
npm install @ant-design/icons --save-dev
```

여기까지 하니 변수를 사용하지 않고 있다는 Warning만 남은 상태.
