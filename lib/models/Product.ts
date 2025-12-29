import mongoose, { Document, Schema } from 'mongoose';

export interface IProduct extends Document {
  title: string;
  image: string;
  price: number;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

const productSchema = new Schema<IProduct>(
  {
    title: {
      type: String,
      required: [true, 'Please provide a product title'],
      trim: true,
      maxlength: [100, 'Title cannot be more than 100 characters'],
    },
    image: {
      type: String,
      required: [true, 'Please provide a product image URL'],
    },
    price: {
      type: Number,
      required: [true, 'Please provide a product price'],
      min: [0, 'Price cannot be negative'],
    },
    description: {
      type: String,
      trim: true,
      maxlength: [1000, 'Description cannot be more than 1000 characters'],
    },
  },
  { timestamps: true }
);

export const Product = mongoose.models.Product || mongoose.model<IProduct>('Product', productSchema);
