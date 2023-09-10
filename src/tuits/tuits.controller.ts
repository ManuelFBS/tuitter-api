import { Controller } from '@nestjs/common';

@Controller('tuits')
export class TuitsController {
  getTuits() {
    return 'Hello from Tuitter !!!';
  }
}
