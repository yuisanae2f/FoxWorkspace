export interface sUrlBuilder_el {
    key: string;
    value: string;
}

export class cUrlBuilder {
    list: sUrlBuilder_el[];
    url: string;
    
    constructor(url: string) {
        this.url = url;
        this.list = [];
    }

    public append(key: string, value: string) : cUrlBuilder {
        this.list.push({key: key, value: value});
        return this;
    }

    public done() : string {
        let v : string = this.url + "?";
        for(let i : number = 0; i < this.list.length - 1; i++) {
            v += this.list[i].key + "=" + this.list[i].value + "&";
        } v += this.list[this.list.length - 1].key + "=" + this.list[this.list.length - 1].value;
        return v;
    }
}