import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { mongooseSchemaConfig } from 'src/utils/database/schema.config';

export type TaskDocument = Task & Document;

@Schema(mongooseSchemaConfig)
export class Task {

  @Prop()
  providedId: string;

  @Prop()
  timeSlot: Date;

  @Prop()
  message: string;

  @Prop()
  address: string;

  @Prop()
  amount: number;

}

export const TaskSchema = SchemaFactory.createForClass(Task);
