import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsArray, IsString, ValidateNested } from "class-validator";
import { CreateCardDto } from "./create-card";

export class CreateColumnDto {
    @ApiProperty({ description: 'Name of the column' })
    @IsString()
    name: string;
  
    @ApiProperty({ description: 'List of cards in the column', type: [CreateCardDto] })
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CreateCardDto)
    cards: CreateCardDto[];
  }