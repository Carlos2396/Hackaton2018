import { Snippet } from "./snippet.model";

export class Instrument {
    constructor(
        public name: string,
        public type: string,
        public updated_at?: Date,
        public created_at?: Date,
        public snippets?: Snippet[],
        public id?: number,
    ) { }
}
