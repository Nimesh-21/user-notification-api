import { IsEmail, IsNotEmpty, IsObject, IsString } from 'class-validator';

export class CreateUserPreferenceDto {
  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsEmail()
  email: string;

  @IsObject()
  preferences: {
    marketing: boolean;
    newsletter: boolean;
    updates: boolean;
    frequency: 'daily' | 'weekly' | 'monthly' | 'never';
    channels: { email: boolean; sms: boolean; push: boolean };
  };

  @IsString()
  @IsNotEmpty()
  timezone: string;
}
