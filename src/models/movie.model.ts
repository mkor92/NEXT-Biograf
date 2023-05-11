import { Schema, model, models, Model, Document } from "mongoose";

export interface IMovie extends Document {
    name: string;
    assets: string[];
}

const movieSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    assets: [String],
});

export default (models.Movie as Model<IMovie>) ||
    model<IMovie>("Movie", movieSchema);
