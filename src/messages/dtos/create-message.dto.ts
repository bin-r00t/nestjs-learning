import { IsString } from 'class-validator';

// Data Transfer Object (DTO) for creating a message
export class CreateMessageDto {
  @IsString()
  text: string;
}
