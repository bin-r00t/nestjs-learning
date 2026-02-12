import { Injectable } from '@nestjs/common';
import { MessageRepository } from './messages.repository';

@Injectable()
export class MessagesService {
  constructor(public messageRepository: MessageRepository) {}

  async findAll() {
    return await this.messageRepository.findAll();
  }

  async findById(id: string) {
    return await this.messageRepository.findById(id);
    // if (!res) {
    //   throw new NotFoundException(`Message with id ${id} not found`);
    // }
    // return res;
  }

  async create(content: string) {
    return await this.messageRepository.create(content);
  }

  // update

  // delete
}
