import { Schema, model, models, Model, Document } from 'mongoose';

export interface ISeat {
    available: boolean,
    place: number
}

export interface IScreening extends Document {
    salon: string,
    time: Date | string,
    movie: string,
    seats: [ISeat]
}

const seatSchema = new Schema({
    available: {
        type: Boolean,
        default: false
    },
    place: {
        type: Number,
        unique: true
    }
});

const screeningSchema = new Schema({
    salon: {
        type: String,
        required: true
    },
    time: {
        type: Date,
        required: true
    },
    movie: {
        type: Schema.Types.ObjectId,
        ref: "Movie",
        required: true
    },
    seats: [seatSchema]
});


export default models.Screening as Model<IScreening> || model<IScreening>("Screening", screeningSchema);