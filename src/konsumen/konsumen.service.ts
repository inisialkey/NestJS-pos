import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateKonsumenDto } from './dto/create-konsumen.dto';
import { UpdateKonsumenDto } from './dto/update-konsumen.dto';
import { Konsumen } from './entities/konsumen.entity';

@Injectable()
export class KonsumenService {
  constructor(
    @InjectRepository(Konsumen) private konsumenRepo: Repository<Konsumen>,
  ) {}
  create(createKonsumenDto: CreateKonsumenDto) {
    return this.konsumenRepo.save(createKonsumenDto);
  }

  findAll() {
    return this.konsumenRepo.find({ relations: ['user'] });
  }

  findOne(id: number) {
    return this.konsumenRepo.findOne(id);
  }

  update(id: number, updateKonsumenDto: UpdateKonsumenDto) {
    return this.konsumenRepo.save(updateKonsumenDto);
  }

  async remove(id: number) {
    const konsumen = await this.konsumenRepo.findOne(id);
    return this.konsumenRepo.remove(konsumen);
  }
}
