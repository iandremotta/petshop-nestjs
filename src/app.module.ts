import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BackOfficeModule } from './back-office/back-office.module';

@Module({
  imports: [BackOfficeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
