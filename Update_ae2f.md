# URL 추가
## 의도
Dashboard에서 한 사람 거만 보여줄 수는 없음
다른 사람들 거도 보여 줘야 하기 때문에 작업할 거임

하지만 기본은 님이 작성해 놓은 Cozy 프로필로 넣을 예정
저거 최적화할 줄 모르므로 구현만 해 놓을게
쏘리

## 경로
./src/dashboard.page.tsx

# JSON 추가
> 읽는 것까지는 다 만들어 둠
## 경로
./public/holidayState.json

## 연관된 거
./src/dashboard.page.tsx

# DashboardGetter_Group 업데이트
소속이 여러 개인 경우가 있어서 핸들링용으로 만들었음