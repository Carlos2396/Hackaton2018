import { Instrument } from "./instrument.model";
import { User } from "./user.model";
import { Round } from "./round.model"

export class Snippet {
    constructor(
        public name: string,
        public instrument_id: number,
        public user_id: number,
        public updated_at?: Date,
        public created_at?: Date,
        public instrument?: Instrument,
        public user?: User,
        public rounds?: Round[],
        public id?: number,
    ) { }
}