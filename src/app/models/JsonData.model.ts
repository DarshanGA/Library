import { CodeContent } from "./CodeContent.model";
import { Navs } from "./Navs.model";

export interface AppJsonDataStructure{

    navs: Navs[];
    angular: CodeContent[];
    java: CodeContent[];
    others: CodeContent[];
}