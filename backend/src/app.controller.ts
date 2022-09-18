import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Ruta Inicial')
@Controller()
export class AppController {


  @Get()
  getHello(): string {
    return 'Api Works!!'
  }
}
