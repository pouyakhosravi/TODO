import mongoose from 'mongoose';

/**
 * Represents a list document stored in MongoDB.
 * Lists are collections of tasks organized by users.
 */
export interface List extends mongoose.Document {
  /**
   * The unique identifier assigned by MongoDB to the list document.
   * Automatically generated upon creation.
   */
  _id?: mongoose.Schema.Types.ObjectId;

  /**
   * The descriptive name of the list.
   */
  name: string;

  /**
   * The MongoDB ObjectId referencing the user who owns the list.
   * Establishes a relationship between users and lists.
   */
  user: mongoose.Schema.Types.ObjectId;

  /**
   * An array of MongoDB ObjectId references pointing to tasks associated with the list.
   * Allows for organizing and tracking tasks within the list.
   */
  tasks: mongoose.Schema.Types.ObjectId[];

  /**
   * An array of MongoDB ObjectId references pointing to categories associated with the list.
   * Facilitates categorization and organization of list contents.
   */
  category: mongoose.Schema.Types.ObjectId[];

  /**
   * The date and time when the list was created.
   * Automatically managed by MongoDB and updated upon list creation.
   */
  createdAt?: Date;

  /**
   * The date and time when the list was last updated.
   * Automatically managed by MongoDB and updated upon list modifications.
   */
  updatedAt?: Date;
}
