import { Injectable, ExecutionContext, UnauthorizedException } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { JsonWebTokenError } from "jsonwebtoken";

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}