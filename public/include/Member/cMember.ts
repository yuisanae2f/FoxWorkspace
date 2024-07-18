import { cMember_Group } from "./cMember_Group";
import { eMember_Group } from "./eMember_Group";
import { rMember_raw_el } from "./rMember_raw_el";


// id로 시작해서 정보 얻어 올 class
// id 받고 나머지 정보를 내부처리할 수 있도록 하자
export class cMember {
    identifier: number;
    groupID: cMember_Group;
    displayName: string;
    holidayStart: Date;
    holidayEnd: Date;
    score: number;
    holidayTicket: number;
    idx: number;
    _LIST: Array<rMember_raw_el>;
  
    // 일단 cozy 걸로 하드코딩해 놓을 것이다.
    // TODO: 나중에 이거 로직 구현해야 함
    constructor(_id : string, _list: Array<rMember_raw_el>) {
      this._LIST = _list;
      let obj : rMember_raw_el = {
        identifier: "-1", // 내비둬야 함 나머지는 상관 ㄴ
        groupID: "0", // 추가해야 함
        displayName: "Null",
        holidayStart: "0",
        holidayEnd: "-1",
        holidayTicket: '0',
        score: "-1"
      };

      this.idx = -1;
      this.groupID = new cMember_Group();
  
      for(let i = 0; i < _list.length; i++) {
        if(_list[i].identifier == _id) {
          obj = _list[i];
          this.idx = i;
          break;
        }
      }
  
      this.identifier = parseInt(obj.identifier);
      this.groupID.raw = parseInt(obj.groupID); // deprecated 가능성 있음
  
      // 필터 걸러진 놈들 잡으려고 있는 거
      // 이거 위험할 수도 있으니 나중에 필터링할 방법을 찾...아야 하나?
      this.displayName = obj.displayName;
      this.holidayStart = new Date(parseInt(obj.holidayStart));
      this.holidayEnd = new Date(parseInt(obj.holidayEnd));
      this.holidayTicket = parseInt(obj.holidayTicket);
      this.score = parseInt(obj.score);
    }
  
    public getName(threshold: number = 30, show : number = 27, suffix : string = "...") : string {
      // 설마 이러겠지만서도
      if(threshold < 0) threshold = 30;
      if(show < 0) show = 27;
  
      if(this.displayName.length < threshold) {
        return this.displayName;
      }
      return this.displayName.slice(0, show) + suffix;
    }
  
  public getGroupColour(): string {
    switch (this.groupID.getFirstRole()) {
      case eMember_Group.Support:
        return "text-orange-400";
      case eMember_Group.Owner:
        return "text-orange-500";
      case eMember_Group.Manager_Main:
        return "text-yellow-400";
      case eMember_Group.Manager_Sub:
        return "text-blue-500";
      case eMember_Group.Ad:
        return "text-blue-400";
      case eMember_Group.Director:
        return "text-purple-400";
      case eMember_Group.Security:
        return "text-red-400";
      default:
        return "";
    }
  }

  public getGroup(): string {
    switch (this.groupID.getFirstRole()) {
      case eMember_Group.Owner:
        return "서버장";
      case eMember_Group.Support:
        return "지원팀";

      case eMember_Group.Manager_Main:
        return "총관리자";

      case eMember_Group.Ad:
        return "홍보팀";

      case eMember_Group.Director:
        return "기획팀";

      case eMember_Group.Manager_Sub:
        return "부관리자";

      case eMember_Group.Security:
        return "보안팀";

      case eMember_Group.Null:
      default:
        return "등록되지 않음";
    }
  }
  
    public OnHoliday() : boolean {
      const Now = Date.now();
      return (this.holidayEnd.getTime() >= Now) && (Now >= this.holidayStart.getTime());
    }
  }
