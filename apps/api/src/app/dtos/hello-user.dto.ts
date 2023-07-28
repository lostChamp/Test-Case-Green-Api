import {ApiProperty} from "@nestjs/swagger";

export class HelloUserDto {
  @ApiProperty({ description: 'Name', nullable: false })
  name: string;
}
