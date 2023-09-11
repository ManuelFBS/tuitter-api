import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Query,
  Body,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { TuitsService } from './tuits.service';
import { Tuit } from './tuit.entity';

@Controller('tuits')
export class TuitsController {
  constructor(private readonly tuitService: TuitsService) {
    //
  }

  @Get()
  getTuits(): Tuit[] {
    // return 'Hello from Tuitter !!!';
    return this.tuitService.getTuits();
  }

  @Get('/ord')
  getTuitsOther(@Query() filterQuery): Tuit[] {
    const { searchTerm, orderBy } = filterQuery;

    // return `All ${searchTerm} tuits ordered by ${orderBy}`;
    return this.tuitService.getTuits();
  }

  //   @Get('/:id')     // tuits/1...
  //   getTuit(@Param() params) {
  //     return `Your tuit id is: ${params.id}`;
  //   }
  @Get('/:id')
  getTuit(@Param('id') id: string): Tuit {
    // return `Your tuit id is: ${id}`;
    return this.tuitService.getTuit(id);
  }

  @Post()
  // @HttpCode(HttpStatus.NO_CONTENT)
  createTuit(@Body('message') message: string): void {
    // return `Your tuit was: ${message}`;
    return this.tuitService.createTuit(message);
  }

  @Patch('/:id')
  updateTuit(@Param('id') id: string, @Body('message') tuit): Tuit {
    // return `The tuit id: ${id} has been updated...!`;
    return this.tuitService.updateTuit(id, tuit);
  }

  @Delete('/:id')
  deleteTuit(@Param('id') id: string): void {
    // return `The tuit id: ${id} has been deleted...!`;
    return this.tuitService.removeTuit(id);
  }
}
