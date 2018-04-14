import { User } from "./user.model";
import { Round } from "./round.model";
import { Snippet } from "./snippet.model";

export class Mash {
    constructor(
        
        public name: string,
        public user_id: number,
        public snippet_id: number,
        public start_datetime: Date,
        public quantum: number,
        public key: string,
        public bpm: string,
        public metre: string,
        public updated_at?: Date,
        public created_at?: Date,
        public snippet?: Snippet,
        public user?: User,
        public users?: User[],
        public rounds?: Round[],
        public id?: number,
    ) { }
}