import { Component, ViewChild } from '@angular/core';
import { PasswordFieldComponent } from '../password-field/password-field.component';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { SliderComponent } from '../slider/slider.component';
import { StrenghtStateComponent } from '../strenght-state/strenght-state.component';
import { GeneratorService } from '../../services/generator/generator.service';

@Component({
  selector: 'app-generator',
  standalone: true,
  imports: [PasswordFieldComponent, CheckboxComponent, SliderComponent, StrenghtStateComponent],
  templateUrl: './generator.component.html',
  styleUrl: './generator.component.scss'
})
export class GeneratorComponent {

  @ViewChild(PasswordFieldComponent)
  passwordFieldComponent!: PasswordFieldComponent;

  constructor(public generatorService: GeneratorService){

  }

  generate() {
    this.generatorService.generatePassword();
    console.log(this.generatorService.generatedPassword)
  }
}
