import { rMember_raw_el } from "./rMember_raw_el";

export class cMember_rawBuilder {
    raw : rMember_raw_el[];

    constructor(src : rMember_raw_el[] = []) {
        this.raw = src;
    }

    public add(r : rMember_raw_el) : cMember_rawBuilder {
        this.raw.push(r);
        return this;
    }

    static hug(a: string, pre: string = "\"", suf: string = "\"") : string {
        return pre + a + suf;
    }

    public static el(a: rMember_raw_el) : string {
        let s : string = "";
        s += this.hug("displayName") + ": " + this.hug(a.displayName) + ", ";
        s += this.hug("groupID") + ": " + a.groupID + ", ";
        s += this.hug("holidayEnd") + ": " + a.holidayEnd + ", ";
        s += this.hug("holidayStart") + ": " + a.holidayStart + ", ";
        s += this.hug("holidayTicket") + ": " + a.holidayTicket + ", ";
        s += this.hug("identifier") + ": " + a.identifier + ", ";
        s += this.hug("score") + ": " + a.score;
        return this.hug(s, "{", "}");
    }

    public build(lbl: string = "holidayState") : string {
        let s : string = cMember_rawBuilder.hug(lbl) + ": [";
        if(this.raw.length == 0) return s + "]";

        for(let i : number = 0; i < this.raw.length - 1; i++) {
            s += cMember_rawBuilder.el(this.raw[i]) + ", ";
        }
        
        s += cMember_rawBuilder.el(this.raw[this.raw.length - 1]);

        return s + "]";
    }
}