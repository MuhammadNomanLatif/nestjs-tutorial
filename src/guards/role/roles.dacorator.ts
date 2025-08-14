import { SetMetadata } from '@nestjs/common';

export const Roles_Keys = 'roles';
export const Roles = (...roles: string[]) => SetMetadata(Roles_Keys, roles);
