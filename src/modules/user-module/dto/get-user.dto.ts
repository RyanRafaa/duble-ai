import { ApiProperty, PartialType } from "@nestjs/swagger";
import { ResponseUserDto } from "./response-user.dto";

export class UsersResponse {
    @ApiProperty({
        type: () => [ResponseUserDto],
    })
    data: ResponseUserDto[];
}

export class UserResponse extends PartialType(ResponseUserDto) {}