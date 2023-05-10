import { Schema, model, models, Model, Document } from "mongoose";

export interface IScreening extends Document {
    salon: string;
    time: Date | string;
    movie: string;
    seats: number;
}

const screeningSchema = new Schema({
    salon: {
        type: String,
        required: true,
    },
    time: {
        type: Date,
        required: true,
    },
    movie: {
        type: Schema.Types.ObjectId,
        ref: "Movie",
        required: true,
    },
    seats: Number,
});

export default (models.Screening as Model<IScreening>) ||
    model<IScreening>("Screening", screeningSchema);
