import { Injectable, PipeTransform, ArgumentMetadata, BadRequestException } from "@nestjs/common";
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';

@Injectable()
export class ValidationPipe implements PipeTransform{
  async transform(value: any, { metatype }: ArgumentMetadata){

    // 验证这个值是否存在需要验证的类型 || 这个验证的类型是否存在
    if( !metatype || !this.toValidate(metatype)){
      return value;
    }

    // 将 JS 参数转换为可验证的对象
    const object = plainToClass(metatype, value);
    
    // 验证转换后的对象是否存在错误
    const errors = await validate(object);

    if(errors.length > 0){
      throw new BadRequestException('Validation failed');
    }
    return value;
  }

  private toValidate(metatype: Function): boolean{
    const types: Function[] = [String, Number, Boolean, Array, Object];
    return !types.includes(metatype);
  }
}