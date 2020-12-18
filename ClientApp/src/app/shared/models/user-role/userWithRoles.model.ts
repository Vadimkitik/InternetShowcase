import { Role } from './role.model';

export class UserWithRoles {
    constructor(
        public userId?: string,
        public userEmail?: string,
        public allRoles?: Array<Role>,
        public userRoles?: Array<string>
    ){ }
}