# 🔐 Angular Password Generator

A modern password generator built with Angular. Allows users to customize the length and character types (uppercase, lowercase, numbers, symbols), generate strong passwords, and copy them to the clipboard. Includes a visual password strength indicator.

---

## 📸 Preview

Screenshot soon

---

## 🧩 Features

- ✅ Secure password generation
- ✅ Customizable options:
  - Uppercase letters
  - Lowercase letters
  - Numbers
  - Symbols
- ✅ Adjustable length using a slider
- ✅ Visual password strength meter
- ✅ Copy password to clipboard
- ✅ Modular architecture (standalone components + shared service)

---

## ⚙️ Technologies Used

- [Angular](https://angular.io/) 17+
- RxJS
- HTML / SCSS
- `navigator.clipboard` API
- Standalone Components (modern Angular architecture)

---

## 🏗️ Project Structure

src/
├── app/
│ └── app.component.ts
├── components/
│ ├── checkbox/
│ ├── password-field/
│ ├── slider/
│ ├── strength-state/
│ └── generator/
├── services/
│ └── generator/
│ └── generator.service.ts
└── assets/


---

## 🚀 Getting Started

1. Clone the repository:

```bash
git clone https://github.com/yourusername/password-generator-angular.git
cd password-generator-angular
```

2. Install dependencies:

```bash
npm install
```

Run the development server:

```bash
ng serve
```

4.Open your browser at:
  http://localhost:4200/

## Core Logic

* GeneratorService manages shared state and logic.

* Components (slider, checkbox, password-field, strength-state) interact via getters, setters, or observables.

* When generating a password, the app ensures at least one character from each selected type is included.

* Clipboard copy uses the navigator.clipboard.writeText() API.

## Current Status

* Password generation

* Copy to clipboard

* Strength indicator

* Modular component structure

* Mobile responsiveness

## Future improvements 

* Light/dark theme support

 * Animated feedback and transitions

 * Export password history

 * User settings persistence
