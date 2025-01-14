import { Controller, Post, Get, Body, Param, Patch, UseGuards, Request} from '@nestjs/common';
import { AdminService } from './admin.service';
import { ApiBody } from '@nestjs/swagger';
import { LocalAuthGuard } from '../auth/local-auth.guard';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
@Controller('admin')
export class AdminController {
    constructor(private adminService: AdminService){}

    
    @UseGuards(JwtAuthGuard)
    @Post('disable-user-account')
    @ApiBody({ type: String })
    async disableUserAccount(@Body('id') id: string) {
        return this.adminService.disableUserAccount(id);
    }
}
