import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GeneratorComponent } from "../components/generator/generator.component";
import { PasswordFieldComponent } from "../components/password-field/password-field.component";
import { CheckboxComponent } from "../components/checkbox/checkbox.component";
import { SliderComponent } from "../components/slider/slider.component";
import { StrenghtStateComponent } from "../components/strenght-state/strenght-state.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GeneratorComponent, PasswordFieldComponent, CheckboxComponent, SliderComponent, StrenghtStateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'PasswordGenerator';
}
