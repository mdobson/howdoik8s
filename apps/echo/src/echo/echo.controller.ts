import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { EchoService } from './echo.service';

@Controller('/')
export class EchoController {
  constructor(private service: EchoService) {}

  @Get()
  public echo(@Req() req: Request) {
    return this.service.getRequestInfo(req);
  }
}
