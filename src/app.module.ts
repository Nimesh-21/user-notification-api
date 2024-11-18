import { Module,Controller, Get  } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UserPreferencesController } from './controllers/user-preferences.controller';
import { NotificationsController } from './controllers/notifications.controller';
import { UserPreferencesService } from './services/user-preferences.service';
import { NotificationsService } from './services/notifications.service';
import { UserPreferenceSchema } from './schemas/user-preference.schema';
import { NotificationLogSchema } from './schemas/notification-log.schema';

@Controller()
class AppController {
  @Get()
  getWelcomeMessage() {
    return { message: 'Welcome to the User Notification Preferences API!' };
  }
}
@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
    MongooseModule.forFeature([
      { name: 'UserPreference', schema: UserPreferenceSchema },
      { name: 'NotificationLog', schema: NotificationLogSchema },
    ]),
  ],
  controllers: [UserPreferencesController, NotificationsController],
  providers: [UserPreferencesService, NotificationsService],
})
export class AppModule {}
