import {Body, Controller, Get, HttpStatus, Post, Query, Res} from '@nestjs/common';
import {WeatherService} from './weather.service';
import {ICoordinates} from './interfaces/coordinates.interface';

@Controller('api/coord')
export class WeatherController {
  constructor(private readonly appService: WeatherService) {
  }

  @Post()
  getLocFromCoord(@Body() coordinates: ICoordinates, @Res() res) {
    this.appService.getDataFromLoc(coordinates)
      .subscribe(
        result => res.status(HttpStatus.OK).json([result.data]),
        _ => res.status(HttpStatus.OK).json([])
      );
  };

  @Get()
  getLocFromCity(@Query('city') city, @Res() res) {
    this.appService.getDataFromCity(city)
      .subscribe(
        result => res.status(HttpStatus.OK).json([result.data]),
        _ => res.status(HttpStatus.OK).json([])
      )
  }
}
