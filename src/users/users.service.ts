import {
    BadRequestException,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  // access the user's repository:
  // InjectRepository() is a special decorator that gives us access to the repository
  // of the entity we specify in the parameter. In this case, we want to access the
  // repository of the User entity, so we pass User as a parameter to the InjectRepository() decorator.
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  getAllUsers() {
    return this.repo.find();
  }

  // watch out: this method is not async,
  // but it returns a promise. NestJS will automatically
  // await the promise and return the result to the client.
  create(email: string, password: string) {
    // auto await here:
    const user = this.repo.create({ email, password });
    return this.repo.save(user);
  }

  async getById(id: number) {
    const users = await this.repo.findBy({ id });
    if (users && users.length) {
      return users[0];
    }
    throw new NotFoundException();
  }

  async getByEmail(email: string) {
    const users = await this.repo.findBy({ email });
    if (users && users.length) {
      return users[0];
    }
    throw new NotFoundException();
  }

  async update(id: number, body: any) {
    const result = await this.repo.update(
      {
        id,
      },
      body,
    );
    if (result.affected === 0) {
      throw new BadRequestException('User not found');
    }
    return this.getById(id);
  }

  async remove(id: number) {
    const result = await this.repo.delete({ id });
    if (result.affected === 0) {
      throw new BadRequestException('User not found');
    }
    return id;
  }
}
