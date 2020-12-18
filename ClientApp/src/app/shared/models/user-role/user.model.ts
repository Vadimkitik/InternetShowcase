export class User {
    constructor(
        public userName?: string,
        public email?: string,
        public password?: string,
        public roles?: Array<string>,
        public id?: string) { }
}