import { Component } from '@angular/core';
import { GeneratorService } from '../../services/generator/generator.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-password-field',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './password-field.component.html',
  styleUrl: './password-field.component.scss'
})
export class PasswordFieldComponent {


  generatedPassword: string = '';
  private sub!: Subscription;

  constructor(public generatorService: GeneratorService) {}

  ngOnInit(): void {
    this.sub = this.generatorService.password$.subscribe(password => {
      this.generatedPassword = password;
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
