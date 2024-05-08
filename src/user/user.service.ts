import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';
import { UserModelInterface } from './interfaces/user.interface';
import * as bcrypt from 'bcrypt';
import { GetEnvValuesService } from 'src/configurations/getEnvValues.service';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    private readonly config: GetEnvValuesService,
    @Inject('MONGOOSE_USER_MODEL_REPOSITORY_PROVIDER')
    private readonly mongooseUserRepository: Model<UserModelInterface>,
    @Inject('TYPE_ORM_POSTGRE_USER_ENTITY_REPOSITORY_PROVIDER')
    private readonly typeOrmPostgreUserRepository: Repository<User>,
    // @Inject('TYPE_ORM_MONGO_USER_ENTITY_REPOSITORY_PROVIDER')
    // private readonly typeOrmMongoUserRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const salt = this.config.salt;
    if (!salt) {
      throw new InternalServerErrorException('Salt configuration not found.');
    }
    const newPassword: string = createUserDto.password + salt;
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    createUserDto.password = hashedPassword;

    // const newUser = await this.mongooseUserRepository.create(createUserDto);
    const newUser =
      await this.typeOrmPostgreUserRepository.create(createUserDto);

    if (!newUser) {
      throw new InternalServerErrorException('Failed to create user.');
    }
    return newUser;
  }

  async findAll(): Promise<Array<UserModelInterface>> {
    return await this.mongooseUserRepository.find();
  }

  async findByEmail(email: string): Promise<UserModelInterface | null> {
    return await this.mongooseUserRepository.findOne({ email: email });
  }

  async findById(id: string): Promise<UserModelInterface | null> {
    return this.mongooseUserRepository.findById(id);
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<any> {
    return await this.mongooseUserRepository.updateOne(
      { _id: id },
      updateUserDto,
    );
  }

  async delete(id: string): Promise<boolean> {
    const user = await this.mongooseUserRepository.findByIdAndDelete(id);
    return user ? true : false;
  }
}
