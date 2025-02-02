export class UserEmailError extends Error {
  constructor() {
    super('Email inválido');
    this.name = 'UserEmailInvalidError';
  }
}
