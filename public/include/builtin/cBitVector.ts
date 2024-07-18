export class cBitVector {
    raw : number;
    constructor(raw: number = 0) {
        this.raw = raw;
    }

    public get(type: number) : boolean { return !!((this.raw >> type) & 1); }
    public set(type: number, val : boolean) : boolean {
        this.raw ^= ((val ? 1 : 0) << type);
        return val;
    }

    protected getFirstIdx(maxIdx: number, exception: number) : number {
        if((!this.raw) || this.raw >= (1 << maxIdx))
          return exception; // 말도 안 되는 경우 일단 쳐내기
    
        else
          for(let i : number = 0; i < maxIdx; i++)
            if(this.get(i)) return i;
    
        return exception;
    }
}