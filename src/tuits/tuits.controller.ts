import { Controller, Get, Param } from '@nestjs/common';

@Controller('tuits')
export class TuitsController {
  @Get()
  getTuits(): string {
    return 'Hello from Tuitter !!!';
  }

//   @Get('/:id')     // tuits/1...
//   getTuit(@Param() params) {
//     return `Your tuit id is: ${params.id}`;
//   }
  @Get('/:id')
  getTuit(@Param('id') id: string): string {
    return`Your tuit id is: ${id}`;
  }
}
