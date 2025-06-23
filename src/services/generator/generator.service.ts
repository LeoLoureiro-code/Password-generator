import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  private _includeUpperLetter: boolean = false;
  private _includeLowerLetter: boolean = false;
  private _includeNumbers: boolean = false;
  private _includeSymbols: boolean = false;

  private passwordLength: number = 4;

  private lowercaseLetters: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');
  private uppercaseLetters: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  private numbers: string[] = '0123456789'.split('');
  private symbols: string[] = '!@#$%^&*()_+[]{}|;:,.<>?'.split('');

  generatedPassword: string = "P4$5W0rD!";

  private passwordSubject = new BehaviorSubject<string>(this.generatedPassword);
  public password$ = this.passwordSubject.asObservable();

  constructor() {}


  get GetUpperCase(): boolean {
    return this._includeUpperLetter;
  }
  set SetUpperCase(value: boolean) {
    this._includeUpperLetter = value;
  }

  get GetLowerCase(): boolean {
    return this._includeLowerLetter;
  }
  set SetLowerCase(value: boolean) {
    this._includeLowerLetter = value;
  }

  get GetNumbers(): boolean {
    return this._includeNumbers;
  }
  set SetNumbers(value: boolean) {
    this._includeNumbers = value;
  }

  get GetSymbols(): boolean {
    return this._includeSymbols;
  }
  set SetSymbols(value: boolean) {
    this._includeSymbols = value;
  }

  get GetPasswordLength(): number {
    return this.passwordLength;
  }
  set SetPasswordLength(value: number) {
    this.passwordLength = value;
  }

  generatePassword(): void {
    let availableChars: string[] = [];
    let guaranteedChars: string[] = [];

    if (this._includeLowerLetter) {
      availableChars = availableChars.concat(this.lowercaseLetters);
      guaranteedChars.push(this.getRandomChar(this.lowercaseLetters));
    }

    if (this._includeUpperLetter) {
      availableChars = availableChars.concat(this.uppercaseLetters);
      guaranteedChars.push(this.getRandomChar(this.uppercaseLetters));
    }

    if (this._includeNumbers) {
      availableChars = availableChars.concat(this.numbers);
      guaranteedChars.push(this.getRandomChar(this.numbers));
    }

    if (this._includeSymbols) {
      availableChars = availableChars.concat(this.symbols);
      guaranteedChars.push(this.getRandomChar(this.symbols));
    }

    if (availableChars.length === 0 || this.passwordLength < guaranteedChars.length) {
      this.generatedPassword = '';
      this.passwordSubject.next('');
      return;
    }

    const remainingLength = this.passwordLength - guaranteedChars.length;
    for (let i = 0; i < remainingLength; i++) {
      guaranteedChars.push(this.getRandomChar(availableChars));
    }

    const newPassword = this.shuffleArray(guaranteedChars).join('');
    this.generatedPassword = newPassword;
    this.passwordSubject.next(newPassword); 
  }

  private getRandomChar(charArray: string[]): string {
    const index = Math.floor(Math.random() * charArray.length);
    return charArray[index];
  }

  private shuffleArray(array: string[]): string[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
