// state 같은 거임
export enum eMember_Group {
    Owner,        // 서버장
    Manager_Main, // 총 관리자
    Manager_Sub,  // 부 관리자
    Security,     // 보안팀
    Support,      // 지원팀
    Director,     // 기획팀
    Ad,           // 홍보팀
    Null,         // 이런 건 없음 + 사이즈 측정용
    Hidden_Master,
  } // 8개 비트로 조살라 버리면 일단 1byte니까 Number 하나에 조살라도 될 듯