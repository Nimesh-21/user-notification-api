import {
    Controller,
    Post,
    Get,
    Patch,
    Delete,
    Param,
    Body,
  } from '@nestjs/common';
  import { UserPreferencesService } from 'src/services/user-preferences.service';
  import { CreateUserPreferenceDto } from '../dto/create-user-preference.dto';
  
  @Controller('preferences')
  export class UserPreferencesController {
    constructor(private readonly service: UserPreferencesService) {}
  
    @Post()
    create(@Body() dto: CreateUserPreferenceDto) {
      return this.service.create(dto);
    }
  
    @Get(':userId')
    findOne(@Param('userId') userId: string) {
      return this.service.findOne(userId);
    }
  
    @Patch(':userId')
    update(@Param('userId') userId: string, @Body() dto: any) {
      return this.service.update(userId, dto);
    }
  
    @Delete(':userId')
    delete(@Param('userId') userId: string) {
      return this.service.delete(userId);
    }
  }
  