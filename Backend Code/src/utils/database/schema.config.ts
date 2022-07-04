import { SchemaOptions } from 'mongoose';

export const mongooseSchemaConfig: SchemaOptions = {

  id: true,
  versionKey: false,
  timestamps: true,
  autoIndex: true,

  toJSON: {
    virtuals: true,
    transform: (_, ret) => {
      // delete all fields not required on the frontend
      delete ret._id;
      delete ret.salt;
      delete ret.updatedAt;
      return ret;
    },
  },

  toObject: {
    virtuals: true,
    transform: (_, ret) => {
      delete ret._id;
      delete ret.salt;
      delete ret.updatedAt;
      return ret;
    },
  },
  
};
