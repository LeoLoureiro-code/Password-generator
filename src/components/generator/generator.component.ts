import { Component } from '@angular/core';
import { PasswordFieldComponent } from '../password-field/password-field.component';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { SliderComponent } from '../slider/slider.component';
import { StrenghtStateComponent } from '../strenght-state/strenght-state.component';

@Component({
  selector: 'app-generator',
  standalone: true,
  imports: [PasswordFieldComponent, CheckboxComponent, SliderComponent, StrenghtStateComponent],
  templateUrl: './generator.component.html',
  styleUrl: './generator.component.scss'
})
export class GeneratorComponent {

}
