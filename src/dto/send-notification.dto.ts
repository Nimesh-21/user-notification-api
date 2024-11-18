// src/dto/send-notification.dto.ts
import {
    IsString,
    IsEnum,
    IsObject,
    IsNotEmpty,
    IsOptional,
  } from 'class-validator';
  
  export class SendNotificationDto {
    @IsString()
    @IsNotEmpty()
    userId: string;
  
    @IsEnum(['marketing', 'newsletter', 'updates'])
    type: 'marketing' | 'newsletter' | 'updates';
  
    @IsEnum(['email', 'sms', 'push'])
    channel: 'email' | 'sms' | 'push';
  
    @IsObject()
    @IsNotEmpty()
    content: {
      subject: string;
      body: string;
    };
  
    @IsOptional()
    metadata?: Record<string, any>;
  }
  