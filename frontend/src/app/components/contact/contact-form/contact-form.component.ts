import { Component } from '@angular/core';
import { RecaptchaModule } from 'ng-recaptcha';

@Component({
  selector: 'app-contact-form',
  imports: [RecaptchaModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent {
  captchaSolved: boolean = false;

  resolve(captchaReponse: string | null) {
    console.log(captchaReponse);
    if (captchaReponse) {
      this.captchaSolved = true;
    }
  }
}
