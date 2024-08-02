import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({
        type: String,
        required: true,
        example: 'Ryan Rafael',
    })
    name: string;

    @ApiProperty({
        type: String,
        required: true,
        example: 'example@gmail.com',
    })
    email: string;

    @ApiProperty({
        type: String,
        required: true,
        example: 'password',
    })
    password: string;

}