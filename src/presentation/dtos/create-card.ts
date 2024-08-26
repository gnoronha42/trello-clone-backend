import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateCardDto {
    @ApiProperty({ description: 'Title of the card' })
    @IsString()
    title: string;
  
    @ApiProperty({ description: 'Description of the card' })
    @IsString()
    description: string;
  }
  