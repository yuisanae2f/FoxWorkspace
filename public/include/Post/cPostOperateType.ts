import { iBitVector_enum } from "../builtin/iBitVector_enum";
import { ePostOperateType } from "./ePostOperateType";

export class cPostOperateType extends iBitVector_enum<ePostOperateType> {
    protected getFirstEnum(): ePostOperateType {
        return this.getFirstIdx(ePostOperateType.Null, ePostOperateType.Null);
    }
}