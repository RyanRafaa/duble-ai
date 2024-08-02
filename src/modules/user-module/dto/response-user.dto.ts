import { ApiProperty } from "@nestjs/swagger";

export class ResponseUserDto {
    @ApiProperty({
        type: String,
        example: 'sadhjas-dasfa13143adsad-dsad',
    })
    id: string;

    @ApiProperty({
        type: String,
        example: 'Ryan Rafael',
    })
    name: string;

    @ApiProperty({
        type: String,
        example: 'example@gmail.com',
    })
    email: string;

    @ApiProperty({
        type: String,
        example: '2021-09-11T00:00:00.000Z',
    })
    createdAt?: Date;

    @ApiProperty({
        type: String,
        example: '2021-09-11T00:00:00.000Z',
    })
    updatedAt?: Date;

    @ApiProperty({
        type: String,
        example: '2021-09-11T00:00:00.000Z',
    })
    deletedAt?: Date;

    @ApiProperty({
        type: Boolean,
        example: false,
    })
    active: boolean;
}