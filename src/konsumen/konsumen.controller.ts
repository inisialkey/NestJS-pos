import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { KonsumenService } from './konsumen.service';
import { CreateKonsumenDto, KonsumenId } from './dto/create-konsumen.dto';
import { UpdateKonsumenDto } from './dto/update-konsumen.dto';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { InjectUser } from 'src/etc/decorator/inject-user.decorator';
import { JwtGuard } from 'src/auth/jwt.guard';

@ApiTags('Konsumen')
@ApiBearerAuth()
@UseGuards(JwtGuard)
@Controller('konsumen')
export class KonsumenController {
  constructor(private readonly konsumenService: KonsumenService) {}

  @Post()
  @ApiBody({ type: CreateKonsumenDto })
  create(@InjectUser() createKonsumenDto: CreateKonsumenDto) {
    return this.konsumenService.create(createKonsumenDto);
  }

  @Get()
  findAll() {
    return this.konsumenService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.konsumenService.findOne(+id);
  }

  @Patch(':id')
  @ApiBody({ type: UpdateKonsumenDto })
  update(
    @Param('id') id: string,
    @InjectUser() updateKonsumenDto: UpdateKonsumenDto,
  ) {
    return this.konsumenService.update(+id, updateKonsumenDto);
  }

  @Delete(':id')
  remove(@Param() id: KonsumenId) {
    return this.konsumenService.remove(id.id);
  }
}
