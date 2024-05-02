import { PartialType } from '@nestjs/mapped-types';
import { CreateListDto } from './create-list.dto';

/**
 * Data transfer object (DTO) for updating a list.
 * Inherits properties from CreateListDto but allows them to be partial.
 */
export class UpdateListDto extends PartialType(CreateListDto) {}
