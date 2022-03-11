export class Player {

    constructor(
        public name:string,
        private nickname:string) {

    }

    get getNickname(){
        return this.nickname;
    }
    
    set setNickname(nickname:string){
        this.nickname = nickname;
    }

}