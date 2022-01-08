import { Controller, Get } from '@nestjs/common';

@Controller('/')
export class EchoController {
  @Get()
  public echo() {
    return 'echo';
  }
}
