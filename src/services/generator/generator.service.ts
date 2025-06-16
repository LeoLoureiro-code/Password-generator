import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  private _includeUpperLetter:boolean = false;
  private _includeLowerLetter:boolean = false;
  private _includeNumbers:boolean = false;
  private _includeSymbols:boolean = false;
  private passwordLength:number = 4;
  private lowercaseLetters: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');
  private uppercaseLetters: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  private numbers: string[] = '0123456789'.split('');
  private symbols: string[] = '!@#$%^&*()_+[]{}|;:,.<>?'.split('');
  generatedPassword:string = "";


  constructor() { }

  get GetUpperCase(): boolean{
    return this._includeUpperLetter;
  }

  set SetUpperCase(value:boolean){
    this._includeUpperLetter = value;
  }
  
  get GetLowerCase(): boolean{
    return this._includeLowerLetter;
  }

  set SetLowerCase(value: boolean){
    this._includeLowerLetter = value;
  }

  get GetNumbers(): boolean{
    return this._includeNumbers;
  }

  set SetNumbers(value: boolean){
    this._includeNumbers = value;
  }

  get GetSymbols(): boolean{
    return this._includeSymbols;
  }

  set SetSymbols(value: boolean){
    this._includeSymbols = value;
  }

  get GetPasswordLength(): number{
      return this.passwordLength;
  }

  set SetPasswordLength(value: number){
    this.passwordLength = value;
  }

  CreatePassword(): void{
    let allChars: string[] = [];

  if (this._includeLowerLetter) {
    allChars = allChars.concat(this.lowercaseLetters);
  }

  if (this._includeUpperLetter) {
    allChars = allChars.concat(this.uppercaseLetters);
  }

  if (this._includeNumbers) {
    allChars = allChars.concat(this.numbers);
  }

  if (this._includeSymbols) {
    allChars = allChars.concat(this.symbols);
  }

  if (allChars.length === 0) {
    this.generatedPassword = '';
    return;
  }

  let password = '';
  for (let i = 0; i < this.passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }

  this.generatedPassword = password;
  }

}
