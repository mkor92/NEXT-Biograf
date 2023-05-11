import { Schema, model, models, Model, Document } from 'mongoose';

export interface ITicket extends Document {
    screening: string;
    seat: number;
    email: string;
}

const ticketSchema = new Schema({
    screening: {
        type: Schema.Types.ObjectId,
        ref: 'Screening',
        required: true,
    },
    seat: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        required: true,
        lowercase: true,
    },
});

export default (models.Ticket as Model<ITicket>) ||
    model<ITicket>('Ticket', ticketSchema);
