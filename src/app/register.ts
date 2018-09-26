export class rForm {
    constructor(
        public id: number,
        public name: string,
        public lastname: string,
        public dni: number,
        public email: string,
        public password: any,
        public confirm: any,
        public phone?: number,
        public address?: string
    ) {  }
}

