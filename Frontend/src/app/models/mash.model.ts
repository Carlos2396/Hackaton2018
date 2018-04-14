import { User } from "./user.model";
import { Round } from "./round.model";

export class Mash {
    constructor(
        public updated_at: Date,
        public created_at: Date,
        public name: string,
        public user_id: number,
        public start_datetime: Date,
        public quantum: number,
        public key: string,
        public bpm: string,
        public metre: string,
        public user?: User,
        public users?: User[],
        public rounds?: Round[],
        public id?: number,
    ) { }
}