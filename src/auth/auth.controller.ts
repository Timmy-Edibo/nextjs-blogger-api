import { Controller, Request, Post, UseGuards, Get, Body, Req } from '@nestjs/common';
import { LocalAuthGuard } from './guards/auth.local-auth.guard';
import { AccessTokenGuard } from './guards/auth.accessToken.guard.ts';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { CreateUserDto } from 'src/users/dto/create-user-dto';
import { RefreshTokenGuard } from './guards/auth.refreshToken.guard';

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) { }

  @Post('signup')
  signup(@Body() createUserDto: CreateUserDto) {
    return this.authService.signUp(createUserDto);
  }

  @Post('signin')
  signin(@Body() data: AuthDto) {
    return this.authService.signIn(data);
  }

  @UseGuards(AccessTokenGuard)
  @Get('logout')
  logout(@Req() req) {
    this.authService.logout(req.user['sub']);
  }

  @Post('auth/login')
  async login(@Request() req) {
    return req.user;
  }

  @UseGuards(AccessTokenGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @UseGuards(RefreshTokenGuard)
  @Get('refresh')
  refreshTokens(@Req() req) {
      const userId = req.user['sub'];
      const refreshToken = req.user['refreshToken'];
      return this.authService.refreshTokens(userId, refreshToken);
  }
}
