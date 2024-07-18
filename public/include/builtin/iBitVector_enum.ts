import { cBitVector } from "./cBitVector";

export abstract class iBitVector_enum<Enum> extends cBitVector {
    protected abstract getFirstEnum() : Enum;
}