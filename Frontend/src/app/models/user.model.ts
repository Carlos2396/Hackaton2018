import { Snippet } from "./snippet.model";
import { Mash } from "./mash.model";
import { Round } from "./round.model";

export class User {
    constructor(
        public name: string,
        public email: string,
        public birthdate: string,
        public password: string,
        public updated_at?: Date,
        public created_at?: Date,
        public snippets?: Snippet[],
        public mashes?: Mash[],
        public rounds?: Round[],
        public id?: number,
    ) { }
}