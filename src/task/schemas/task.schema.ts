import * as mongoose from 'mongoose';

/**
 * Represents the schema for a task document in the MongoDB database.
 * Defines the structure and validation rules for task data.
 */
export const TaskSchema = new mongoose.Schema(
  {
    /**
     * The title of the task.
     * Should be concise and descriptive.
     */
    title: { type: String, required: true },

    /**
     * Additional description of the task.
     * Provides more details about the task.
     */
    description: { type: String },

    /**
     * The due date of the task.
     * Specifies the deadline for completing the task.
     */
    dueDate: { type: Date },

    /**
     * The priority of the task.
     * Indicates the importance or urgency of the task.
     * Can be one of 'Low', 'Medium', or 'High'.
     */
    priority: {
      type: String,
      enum: ['Low', 'Medium', 'High'],
      default: 'Medium',
    },

    /**
     * Indicates whether the task is completed.
     * Defaults to false.
     */
    completed: { type: Boolean, default: false },

    /**
     * The ID of the user associated with the task.
     * Represents the owner or assignee of the task.
     * References the 'User' collection.
     */
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },

    /**
     * The IDs of labels associated with the task.
     * Categorizes or tags the task for organization and filtering.
     * References the 'Label' collection.
     */
    labels: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Label' }],

    /**
     * The IDs of lists associated with the task.
     * Specifies the task lists or boards to which the task belongs.
     * References the 'List' collection.
     */
    lists: [{ type: mongoose.Schema.Types.ObjectId, ref: 'List' }],
  },
  {
    /**
     * Enable timestamps for the task document.
     * Automatically adds 'createdAt' and 'updatedAt' fields.
     */
    timestamps: true,

    /**
     * Enable auto-indexing for the task collection.
     * Helps in optimizing query performance.
     */
    autoIndex: true,
  },
);
