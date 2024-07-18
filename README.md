## `@deprecated`

# FOXWORKSPACE

C0ZIEST & AE2F  
접속: https://resaviors.vercel.app/ (Deprecated)

로마를 부흥시킨 것은 노예를 통한 잉여 노동력이었습니다.  
산업 혁명 이후, 값싼 잉여 노동력의 자리는 기계로 대체되었습니다.  
그것은 윤리적으로도, 경제적으로도 더 나은 발전을 향한 도약이었습니다.

[이 서버]()에서는 기계가 할 일을 사람이 대신하고 있습니다.  
사용법을 아는 것만으로 사람이 해 온 반복 작업을 단순하게 바꿀 수 있습니다.  
사설 서버와 [▲Vercel](https://vercel.com/docs "우리 착1한 버셀청년들")를 기반으로 하여 구축된 `FOXWORKSPACE`를 소개합니다.



# Branch
## main
> 실제로 웹에서 보이는 프론트 및 로컬 DB와 연동시키는 간단 로직입니다.
> POST에 json(데이터)를 한 번에 보내어 처리합니다.

# 휴가 관리

기존으로 작용하던 멤버의 휴가 관리 시스템은 다음과 같습니다:

1. [Notion의 휴가 관리 페이지](https://shining-monarch-d21.notion.site/Team-Fox-f8d802c2f6944858b65db7a8a99084c9) `@deprecated`에 접속한다.
2. 위의 캘린더의 값을 부여할 휴가 일정에 따라 조작한다.
3. 아래의 글에서 다시 한 번 DB를 조작한다.

해당 휴가 관리 시스템의 문제점은 다음과 같습니다:

1. 낮은 접근성
   > 해당 페이지는 접근성이 상당히 낮습니다.  
   > Notion의 특징 중 하나인 이메일이 없을 경우 수정하지 못 한다는 사안은  
   > 디스코드 계정과 별도로 개인정보를 요구하며, 이가 수동으로 관리된다는 점에서 보안에 굉장히 취약합니다.
   > 예시로 본인 Glockenspiel은 해당 페이지의 위치조차 인수인계 받지 못 했습니다.
2. 낮은 무결성
   > 같은 내용의 DB 조작이 두 번 중복으로 일어남을 알 수 있습니다.
3. 낮은 이식성
   > 해당 내용은 Notion 바깥에서 쉽게 참조하여 가져올 수 있는 내용이 아닙니다.  
   > 다른 체계와 혼합하여 사용하는 것이 불가능에 가깝습니다.

이를 보완할 대책으로 지원TEAM에서는 `FOXWORKSPACE`를 일주일간 개발하였습니다.  
이의 장점은 다음과 같습니다.

1. 높은 접근성
   > 해당 페이지는 관리자 권한을 사용자 지정 서버에서 자동으로 관리하므로  
   > 디스코드 계정과 별도로 개인정보를 요구하지 않으며, 이가 디스코드에 의해 처리되므로 개인정보 유출의 걱정이 없습니다.
2. 높은 무결성
   > 버튼 누르기 한 번으로 이뤄지는 DB 조작은 중복의 방지를 통해 무결성을 보장하며,  
   > UI를 통한 편의성을 추가로 얻을 수 있습니다.
3. 높은 이식성
   > 해당 웹은 별도의 서버에 데이터를 보관하며, 그 형태는 표준으로 작성되는 Json이므로,  
   > 엔드포인트를 이용하여 다양한 플랫폼에서 데이터를 처리할 수 있습니다.

현재 해당 웹은 베타로 출시된 상태이며, 서버는 Glockenspiel의 개인 데스크톱에서 호스팅하고 있습니다.  
버그나 불편 및 추가 사항 제안은 [지원팀](https://discord.com/channels/1136750090527199374/1205361392933146624)을 통해 받도록 하겠습니다.

# Get Started

> `npm install`<br /> > `.env 채우기`<br /> > `뿌숭빠슝 백엔드 서버 구축` <br /> > `npm run dev`

# Contributors

## Director

- Glockenspiel

## Vercel Deployment

- 코지(c0ziest)

## Socket Server Host

- Glockenspiel

## Vercel Server Frontend

- 코지(c0ziest)
- Glockenspiel

## Vercel Server Backend

- Glockenspiel
- 코지(c0ziest)

## Socket Server Backend

- Glockenspiel

## QA

- 단설(Danse0l)
- 먼지(mungee828)
