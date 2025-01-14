import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
    constructor(private mailerService: MailerService) { }

    async sendPasswordResetMail(email: string, firstName: string, code: any) {

        await this.mailerService.sendMail({
            to: email,
            subject: 'Payyng Password Reset',
            template: './passwordreset',
            context: {
                firstName,
                code
            },
        });
    }

    async sendVerificationMail(email: string, firstName: string, code: any) {
        await this.mailerService.sendMail({
            to: email,
            subject: 'Payyng Account Verification',
            template: './verification',
            context: {
                firstName,
                code
            },
        });
    }

    async sendTransactionNotificationEmail(email: string, reference:string, type:string, customer: any, firstName: string, status: string, amount: number, biller_name: string) {
        await this.mailerService.sendMail({
            to: email,
            subject: 'Payyng Transaction Notification',
            template: './transaction',
            context: {
                firstName,
                status,
                amount,
                biller_name,
                reference, customer, type
            },
        });
    }

}

