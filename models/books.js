import mongoose from "mongoose"

const bookSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    author: { type: String, required: true, trim: true },
    date: { type: Date, default: Date.now }
}, { timestamps: true })

// Clean up output for frontend/API
bookSchema.set('toJSON', {
    transform: (doc, ret) => {
        ret.id = ret._id
        delete ret._id
        delete ret.__v
        return ret
    }
})

export const Book = mongoose.model('book', bookSchema)