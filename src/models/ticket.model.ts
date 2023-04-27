import { Schema, model, models, Model, Document } from 'mongoose';

export interface ITicket extends Document {
    movie: string,
    time: Date | string,
    seat: number
    email: string
}

const ticketSchema = new Schema({
    movie: {
        type: String,
        required: true,
        trim: true
    },
    time: {
        type: Date,
        required: true
    },
    seat: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true,
        lowercase: true
    }
});

export default models.Ticket as Model<ITicket> || model<ITicket>("Ticket", ticketSchema); 