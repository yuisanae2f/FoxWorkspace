import { iBitVector_enum } from "../builtin/iBitVector_enum";
import { eMember_Privilege } from "./eMember_Privilege";

export class cMember_Privilege extends iBitVector_enum<eMember_Privilege> {
    protected getFirstEnum(): eMember_Privilege { 
        return this.getFirstIdx(eMember_Privilege.Null, eMember_Privilege.Null); 
    }

    public getFirstPrivilege() {
        return this.getFirstEnum();
    }
}