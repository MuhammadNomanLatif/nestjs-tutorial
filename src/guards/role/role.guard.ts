import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { Role } from './roles.enum';
import { Roles_Keys } from './roles.dacorator';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflector: Reflector) {} // Inject Reflector to access metadata
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(Roles_Keys, [
      context.getHandler(), // Get metadata from the handler
      context.getClass(), // Get metadata from the class
    ]);
    if (!requiredRoles) return true; // If no roles are required, allow access
    const request = context.switchToHttp().getRequest<{
      headers: Record<string, string>; // Define headers type for request
    }>();

    const userRole = request.headers['x-user-role'] as Role;
    return requiredRoles.includes(userRole); // Check if user role matches required roles
  }
}
