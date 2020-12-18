export class ResetUserPassword {
    constructor(
        public email?: string,
        public password?: string,
        public confirmPassword?: string,
        public code?: string
        ) { }
}