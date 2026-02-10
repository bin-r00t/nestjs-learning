import {
  Body,
  Controller,
  Get,
  NotFoundException,
  NotImplementedException,
  Param,
  Post,
} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private messageService: MessagesService) {}

  @Get()
  listMessages() {
    // return ['Hello World', 'NestJS is awesome!'];
    return this.messageService.findAll();
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return this.messageService.create(body.content);
  }

  @Get('/test')
  test() {
    throw new NotImplementedException('This is a test error');
  }

  @Get('/:id')
  async getMessageById(@Param('id') id: string) {
    const msg = await this.messageService.findById(id);
    if (!msg) {
      throw new NotFoundException(`Message with id ${id} not found`);
    }
    return msg;
  }
}
