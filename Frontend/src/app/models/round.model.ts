import { User } from "./user.model";
import { Snippet } from "./snippet.model";
import { Mash } from "./mash.model";

export class Round {
    constructor(
        public mash_id: number,
        public updated_at?: Date,
        public created_at?: Date,
        public mash?: Mash,
        public users?: User[],
        public snippets?: Snippet[],
        public id?: number,
    ) { }
}