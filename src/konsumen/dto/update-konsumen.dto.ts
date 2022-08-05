import { PartialType } from '@nestjs/swagger';
import { KonsumenDto } from './create-konsumen.dto';

export class UpdateKonsumenDto extends PartialType(KonsumenDto) {}
