import { IsEmail, IsNotEmpty, IsPhoneNumber } from 'class-validator';

export class UpdatePostForm {
  title: string;
  body: string;
}
