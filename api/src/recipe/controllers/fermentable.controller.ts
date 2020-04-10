import { Controller, Get, Post, Body, Put } from '@nestjs/common';
import { FermentableService } from '../service/fermentable.service';
import { Fermentable } from '../models/fermentable';

@Controller('fermentable')
export class FermentableController {
  constructor(private fermentableService: FermentableService) {} 
  
  @Get()
  async findAll() {
    return this.fermentableService.findAll();
  }

  @Post()
  @Put()
  async create(@Body() fermentable: Fermentable) {
    return this.fermentableService.save(fermentable);
  }
}
