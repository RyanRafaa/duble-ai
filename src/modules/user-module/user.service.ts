import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserResponse } from './dto/get-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly model: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<UserResponse> {
    try {
      const { name, email, password } = createUserDto;

      const saltOrRounds = 10;

      const hashPassword = await bcrypt.hash(password, saltOrRounds);

      const user = await this.model.user.create({
        data: {
            name: name,
            email: email,
            password: hashPassword,
        }
      })

      const response: UserResponse = {
        id: user.id,
        name: user.name,
        email: user.email,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      }

      return response;

    } catch (error) {
        console.log(`USER NOT CREATE: ${error}`);
        throw new ConflictException(`User not create: ${error}`);
    }
  }
}
