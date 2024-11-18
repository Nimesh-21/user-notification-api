import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserPreferenceDocument } from '../schemas/user-preference.schema';

@Injectable()
export class UserPreferencesService {
  constructor(
    @InjectModel('UserPreference') private userPreferenceModel: Model<UserPreferenceDocument>,
  ) {}

  create(data: any) {
    const userPreference = new this.userPreferenceModel(data);
    return userPreference.save();
  }

  findOne(userId: string) {
    return this.userPreferenceModel.findOne({ userId }).exec();
  }

  update(userId: string, data: any) {
    return this.userPreferenceModel.findOneAndUpdate({ userId }, data, { new: true });
  }

  delete(userId: string) {
    return this.userPreferenceModel.findOneAndDelete({ userId });
  }
}
