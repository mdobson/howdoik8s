import { Module } from '@nestjs/common';
import { EchoController } from './echo/echo.controller';
import { EchoService } from './echo/echo.service';

@Module({
  imports: [],
  controllers: [EchoController],
  providers: [EchoService],
})
export class AppModule {}
