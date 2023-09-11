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
  HttpStatus } from '@nestjs/common';
import { TuitsService } from './tuits.service';

@Controller('tuits')
export class TuitsController {
  constructor(private readonly tuitService: TuitsService) {
    //
  }

  @Get()
  getTuits(): string {
    return 'Hello from Tuitter !!!';
  }

  @Get('/ord')
  getTuitsOther(@Query() filterQuery): string {
    const {searchTerm, orderBy} = filterQuery

    return `All ${ searchTerm} tuits ordered by ${orderBy}`
  }

//   @Get('/:id')     // tuits/1...
//   getTuit(@Param() params) {
//     return `Your tuit id is: ${params.id}`;
//   }
  @Get('/:id')
  getTuit(@Param('id') id: string): string {
    return`Your tuit id is: ${id}`;
  }

  @Post()
  @HttpCode(HttpStatus.NO_CONTENT)
  createTuit(@Body('message') message: string): string {
    return `Your tuit was: ${message}`
  }

  @Patch('/:id')
  updateTuit(@Param('id') id: string, @Body() tuit) {
    return `The tuit id: ${id} has been updated...!`
  }

  @Delete('/:id')
  deleteTuit(@Param('id') id: string) {
    return `The tuit id: ${id} has been deleted...!`
  }
}
