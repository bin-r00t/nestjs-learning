import { Injectable } from '@nestjs/common';
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

  create(email: string, password: string) {
    const user = this.repo.create({ email, password });
    return this.repo.save(user);
  }

  getById(id: number) {
    return this.repo.findBy({ id });
  }

  getByEmail(email: string) {
    return this.repo.findBy({ email });
  }

  update(id: number, body: any) {
    return this.repo.update(
      {
        id,
      },
      body,
    );
  }

  remove(id: number) {
    return this.repo.delete({ id });
  }
}
