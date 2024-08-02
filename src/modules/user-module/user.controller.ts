import { Body, ConflictException, Controller, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { ApiBadRequestResponse, ApiCreatedResponse, ApiInternalServerErrorResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { UserResponse } from "./dto/get-user.dto";
import { CreateUserDto } from "./dto/create-user.dto";

@ApiTags('User')
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('v1/user')
    @ApiOperation({summary: 'Create user'})
    @ApiCreatedResponse({description: 'User created', type: UserResponse})
    @ApiBadRequestResponse({description: 'Bad request'})
    @ApiInternalServerErrorResponse({description: 'Internal server error'})
    async create(@Body() createUserDto: CreateUserDto): Promise<UserResponse> {
        try {
            return await this.userService.create(createUserDto);
        } catch (error) {
            console.log(error)
            throw new ConflictException(`User not create: ${error}`);
        }
    }
  }
