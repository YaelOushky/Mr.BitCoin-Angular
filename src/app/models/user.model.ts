export class User {

    constructor(
        public _id?: string,
        public name: string = '',
        public email: string = '',
        public password: string = '',
        public coins: string = '',
        public moves: string = '',
        // public isAdmin: boolean = '',
        public phone: string = '') {

    }

    setId?() {
        // Implement your own set Id
        this._id = 'hkjgbjhb '
    }
}