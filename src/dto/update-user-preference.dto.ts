// src/dto/update-user-preference.dto.ts
import {
    IsBoolean,
    IsEmail,
    IsEnum,
    IsOptional,
    IsObject,
    IsString,
  } from 'class-validator';
  
  export class UpdateUserPreferenceDto {
    @IsOptional()
    @IsString()
    userId?: string;
  
    @IsOptional()
    @IsEmail()
    email?: string;
  
    @IsOptional()
    @IsObject()
    preferences?: {
      marketing?: boolean;
      newsletter?: boolean;
      updates?: boolean;
      frequency?: 'daily' | 'weekly' | 'monthly' | 'never';
      channels?: { email?: boolean; sms?: boolean; push?: boolean };
    };
  
    @IsOptional()
    @IsString()
    timezone?: string;
  }
  