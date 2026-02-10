import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';

@Injectable()
export class MessageRepository {
  async findAll(): Promise<{ [key: string]: any }> {
    const data = await readFile('messages.json', 'utf-8');
    return JSON.parse(data);
  }

  async findById(id: string): Promise<{ [key: string]: any } | null> {
    const data = await this.findAll();
    return data[id] || null;
  }

  async create(content: string): Promise<{ content: string }> {
    const data = await this.findAll();
    const id = Date.now().toString();
    data[id] = { content, id };
    await writeFile('messages.json', JSON.stringify(data, null, 2));
    return data[id];
  }
}
