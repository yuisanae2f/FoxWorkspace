import { rMember_raw_el } from "./rMember_raw_el";

/// json계산용으로 집어넣은 거
export interface rMember_raw {
    [key: string]: Array<rMember_raw_el>;
}