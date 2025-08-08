import {
  createParamDecorator,
  ExecutionContext,
  InternalServerErrorException,
} from '@nestjs/common';

export const Token = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    if (!request.token) {
      throw new InternalServerErrorException(
        'Authorization token not found in request headers (AuthGuard called?)',
      );
    }

    return request.token;
  },
);
