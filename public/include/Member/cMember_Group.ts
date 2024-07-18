// 한 사람이 여러 개 역할 가질 수 있더라...
// 역할 확인하고 저장할 수 있게 만들어 놨다...

import { iBitVector_enum } from "../builtin/iBitVector_enum";
import { cMember_Privilege } from "./cMember_Privilege";
import { eMember_Group } from "./eMember_Group";
import { eMember_Privilege } from "./eMember_Privilege";

// 지금은 역할 별로 없으니까 boolean vector 베이스로...
export class cMember_Group extends iBitVector_enum<eMember_Group> {
    protected getFirstEnum(): eMember_Group {
        return this.getFirstIdx(eMember_Group.Null, eMember_Group.Null);
    }

    public getFirstRole() : eMember_Group {
        return this.getFirstEnum();
    }

    public getPrivilege() : cMember_Privilege {
        let rtn : cMember_Privilege = new cMember_Privilege();

        if(this.get(eMember_Group.Hidden_Master)) {
            return new cMember_Privilege((1 << eMember_Privilege.Null) - 1);
        }

        rtn.set(eMember_Privilege.ViewHidden, !!this.raw);
        rtn.set(eMember_Privilege.Edit, !!(this.raw & ((1 << (eMember_Group.Manager_Sub + 1)) - 1)));
        return rtn;
    }
}