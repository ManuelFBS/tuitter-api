import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TuitsController } from './tuits/tuits.controller';
import { TuitsService } from './tuits/tuits.service';
import { TuitsModule } from './modules/tuits/tuits.module';

@Module({
  imports: [TuitsModule],
  controllers: [AppController, TuitsController],
  providers: [AppService, TuitsService],
})
export class AppModule {}
