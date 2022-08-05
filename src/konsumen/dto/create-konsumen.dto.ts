import { ApiProperty, OmitType, PickType } from '@nestjs/swagger';
import { IsEmail, IsObject, IsString } from 'class-validator';
import { IsExist } from 'src/etc/validator/exist-validator';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { Konsumen } from '../entities/konsumen.entity';

export class KonsumenDto {
  @ApiProperty()
  @IsExist([Konsumen, 'id'])
  id: number;

  @ApiProperty()
  @IsString()
  nama_konsumen: string;

  @ApiProperty()
  @IsString()
  alamat_konsumen: string;

  @ApiProperty()
  @IsString()
  @IsEmail()
  email_konsumen: string;

  @ApiProperty()
  @IsString()
  no_hp_konsumen: string;

  @IsObject()
  user: CreateUserDto;
}

export class CreateKonsumenDto extends OmitType(KonsumenDto, ['id']) {}
export class KonsumenId extends PickType(KonsumenDto, ['id']) {}
