import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import { NotificationsService } from 'src/services/notifications.service';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly service: NotificationsService) {}

  @Post('send')
  send(@Body() data: any) {
    return this.service.sendNotification(data);
  }

  @Get(':userId/logs')
  getLogs(@Param('userId') userId: string) {
    return this.service.getLogs(userId);
  }
}
