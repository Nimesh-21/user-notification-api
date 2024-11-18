import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NotificationLogDocument } from '../schemas/notification-log.schema';

@Injectable()
export class NotificationsService {
  constructor(
    @InjectModel('NotificationLog') private notificationLogModel: Model<NotificationLogDocument>,
  ) {}

  sendNotification(data: any) {
    const log = new this.notificationLogModel({
      userId: data.userId,
      type: data.type,
      channel: data.channel,
      status: 'pending',
      metadata: data.content,
    });

    // Simulate sending notification
    setTimeout(() => {
      log.status = 'sent';
      log.sentAt = new Date();
      log.save();
    }, 1000);

    return log.save();
  }

  getLogs(userId: string) {
    return this.notificationLogModel.find({ userId }).exec();
  }
}
