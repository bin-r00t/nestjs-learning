import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return ['Hello World', 'NestJS is awesome!'];
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return { data: body, message: 'Message created successfully' };
  }

  @Get('/:id')
  getMessageById(@Param('id') id: string) {
    return { id: id, text: 'This is a message' };
  }
}
