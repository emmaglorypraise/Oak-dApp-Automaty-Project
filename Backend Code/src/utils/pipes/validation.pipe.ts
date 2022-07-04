import {
    Injectable,
    PipeTransform,
    UnauthorizedException,
  } from '@nestjs/common';
  import { ObjectSchema, ArraySchema, StringSchema } from 'joi';
  
  @Injectable()
  export class JoiObjectValidationPipe implements PipeTransform {
    constructor(private readonly schema: ObjectSchema) {}
    async transform(data: any): Promise<void> {
      try {
        const value = await this.schema
          .unknown(false)
          .validateAsync(data, { stripUnknown: true });
        return value;
      } catch (e) {
        throw new UnauthorizedException(e.message);
      }
    }
  }
  
  @Injectable()
  export class JoiArrayValidationPipe implements PipeTransform {
    constructor(private readonly schema: ArraySchema) {}
    async transform(data: any): Promise<void> {
      try {
        const value = await this.schema.validateAsync(data);
        return value;
      } catch (e) {
        throw new UnauthorizedException(e.message);
      }
    }
  }
  
  @Injectable()
  export class JoiStringValidationPipe implements PipeTransform {
    constructor(private readonly schema: StringSchema) {}
    async transform(data: any): Promise<void> {
      try {
        const value = await this.schema.validateAsync(data);
        return value;
      } catch (e) {
        throw new UnauthorizedException(e.message);
      }
    }
  }
  
  export const objectValidator = async <T>(schema: ObjectSchema, data: T) => {
    try {
      const value = await schema
        .unknown(false)
        .validateAsync(data, { stripUnknown: true });
      return value as T;
    } catch (e) {
      throw new UnauthorizedException(e.message);
    }
  };
  
  export const arrayValidator = async <T>(schema: ArraySchema, data: T) => {
    try {
      const value = await schema.validateAsync(data, { stripUnknown: true });
      return value as T;
    } catch (e) {
      throw new UnauthorizedException(e.message);
    }
  };
  