import type { Subject, Elective } from "../types";

import lcc from "./lcc.json";
import lcc_electives from "./lcc_electives.json";

import lsi from "./lsi.json"
import lsi_electives from "./lsi_electives.json"

let careers: Record<string, Subject[]>  = {
    lcc,
    lsi
};

let electives: Record<string, Elective[]> = {
    lcc_electives,
    lsi_electives
};

export {
    careers,
    electives
};