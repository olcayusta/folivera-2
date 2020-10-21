import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { environment } from '@environments/environment';
import { UserService } from '@shared/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private title: Title
  ) {
  }

  ngOnInit(): void {
    this.title.setTitle(`Hesap oluştur - ${environment.appName}`)
    this.form = this.fb.group({
      email: ['olcayusta02@gmail.com', [Validators.required]],
      password: ['12345678', [Validators.required]],
    }, {updateOn: 'submit'});
  }

  submit(): void {
    if (this.form.valid) {
      this.userService.register('olcay02@gmail.com', '123456', 'abc', 'cde').subscribe(value => {
        console.log(value);
      });
    }
  }
}
