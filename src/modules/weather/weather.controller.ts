import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { ICoordinates } from './interfaces/coordinates.interface';

@Controller('coord')
export class WeatherController {
  constructor(private readonly appService: WeatherService) {
  }

  @Post()
  postLocation(@Body() coordinates: ICoordinates, @Res() res) {
    this.appService.postLocation(coordinates)
      .subscribe(
        result => {
          res.status(HttpStatus.OK).json([result.data]);
        },
        error => {
          res.status(HttpStatus.NOT_FOUND).json(error);
        },
      );
  }
}
