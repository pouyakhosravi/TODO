import * as mongoose from 'mongoose';

/**
 * Defines the schema for a List document stored in MongoDB.
 */
export const ListSchema = new mongoose.Schema(
  {
    /**
     * The descriptive name of the list.
     */
    name: { type: String, required: true },

    /**
     * The MongoDB ObjectId referencing the user who owns the list.
     * Establishes a relationship between users and lists.
     */
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },

    /**
     * An array of MongoDB ObjectId references pointing to tasks associated with the list.
     * Allows for organizing and tracking tasks within the list.
     */
    tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }],

    /**
     * The MongoDB ObjectId referencing the category associated with the list.
     * Facilitates categorization and organization of list contents.
     */
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  },
  {
    /**
     * Automatically adds createdAt and updatedAt fields to the schema.
     */
    timestamps: true,

    /**
     * Automatically creates indexes for the schema.
     */
    autoIndex: true,
  },
);
