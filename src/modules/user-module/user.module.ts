import { PrismaService } from "src/services/prisma.service";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { Module } from "@nestjs/common";

@Module({
    controllers: [UserController],
    providers: [UserService, PrismaService]
})
export class UserModule {}