export class FeedbackForm {
    constructor(
        public name?: string,
        public telephone?: string,
        public email?: string,
        public imageUrl?: string,
        public productName?: string,
        public productPrice?: string,
        public message?: string,
        public checkAvailability?: boolean,
        public checkPrice?: boolean        
    ) {}
}