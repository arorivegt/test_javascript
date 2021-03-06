import { Board } from './Board';
import { Input } from './Input';
import { Player } from './Player';
export class TicTacToe {
    private history:{ players: Player[]; board: Board; message: string; }[]  = [];
    private endMessage:string = "";
    private players:Player[] = [];
    private board:Board;
    private ROW = 3;
    private COLUMN = 3;
    private countOfTurns = 9;
    
    constructor(){
        this.board = new Board(this.ROW,this.COLUMN);
    }
    
    checkEndOfGameByWinning():boolean{
        let player:number = this.howWon();
        if(player != -1) {
            this.messageWinner(player);
            this.addHistory();
            this.displayGame(this.players)
            return true;
        }
        return false;
    }

    howWon():number {
            let player1 = 0;
            let player2 = 1;
            let nobodyWin = -1;
            let combinationOfAWinner = [[[0,0],[1,0],[2,0]],
                                        [[0,0],[0,1],[0,2]],
                                        [[0,0],[1,1],[2,2]],
                                        [[0,1],[1,1],[2,1]],
                                        [[0,2],[1,2],[2,2]],
                                        [[1,0],[1,1],[1,2]],
                                        [[2,0],[2,1],[2,2]],
                                        [[0,2],[1,1],[2,0]]]
            for (const xs of combinationOfAWinner){
                let line:string = xs.reduce( (total,current) => total + this.board.getDimension[current[0]][current[1]],"") ;
                if( line === "000") return player1;
                else if(line === "111") return player2;
            }
            return nobodyWin;
    }


    messageWinner(howWon:number) {
        this.endMessage += '\n\nšššššššššššššššš\n\n';
        if (howWon === 0)this.endMessage += `    šš ${this.players[howWon].name}${this.board.getAvatarX} won šš\n\n`;
        else if (howWon === 1) this.endMessage += `   šš ${this.players[howWon].name}${this.board.getAvatarO} won šš\n\n`;
        this.endMessage += ('šššššššššššššššš\n\n');
    }

    checkEnOfGameByTie(){
        
        if (this.countOfTurns <= 0) {
            this.displayGame(this.players);
            this.endMessage = `\n\nš²š²š² Nobody Win š²š²š²\n\n`;
            this.addHistory();
            console.log(this.endMessage);
            return true;
        }
        return false;
    }

    move(turn:Player, cell:number, user:number):boolean{

        let valueBoard = -1;
        let wathCell:{[n: number]: number[] } = {
            1:[0,0], 
            2:[0,1],
            3:[0,2],
            4:[1,0], 
            5:[1,1],
            6:[1,2],
            7:[2,0], 
            8:[2,1],
            9:[2,2]
        };

        if (Number(cell) < 1 || Number(cell) > 9 || !Number(cell) ){
            this.endMessage = `\n\nš©š©š©š© You chose a wrong cell š©š©š©š©\n\n`;
            return false;
        }

        valueBoard = this.board.getDimension[wathCell[cell][0]][wathCell[cell][1]];
        if(valueBoard != -1) {
            this.endMessage = `\n\nš²š²š² That cell was already selected š²š²š²\n\n`;
            return false;
        }

        this.board.setDimension(user, wathCell[cell][0],wathCell[cell][1]);
        this.countOfTurns--;
        return true
    }

    addHistory(){
        let newBoard = new Board(this.ROW, this.COLUMN);
        newBoard.copyValue(this.board.getDimension);

        let newPLayers:Player[] = [];
        newPLayers.push(this.players[0]);
        newPLayers.push(this.players[1]);
        
        this.history.push({players:newPLayers, board:newBoard,message:this.endMessage});
    }

    displayGame(players:Player[]){
        console.clear();
        this.board.getBoadFriendly(players[0].name, players[1].name);
        console.log(this.endMessage);
        this.endMessage = "";
    }

    async playersSetup(){
        let informationOfPlayers = (await Input.getForm("Fill the following", this.getPlayerForm())).data;
        let turnOfPlayer = 0;

        this.clearBoard();
        this.players.push(new Player(informationOfPlayers.player1,informationOfPlayers.player1));
        this.players.push(new Player(informationOfPlayers.player2,informationOfPlayers.player2));


        do{
            this.displayGame(this.players)
            let cell = (await Input.getInput(`${this.players[turnOfPlayer].name} choose your cell `)).data

            if (this.move(this.players[turnOfPlayer], Number(cell), turnOfPlayer )){
                if(this.checkEndOfGameByWinning()) break;
                this.addHistory();
                turnOfPlayer = turnOfPlayer === 0 ? 1 : 0;
            }
        }while(!this.checkEnOfGameByTie())

        
    }

    getPreviousHistoryGame(){
        console.log("\n\nš¹ļøš¹ļøš¹ļøš¹ļøš¹ļøš¹ļøš¹ļøš¹ļøš¹ļø PREVIOUS GAME š¹ļøš¹ļøš¹ļøš¹ļøš¹ļøš¹ļøš¹ļøš¹ļøš¹ļøš¹ļø\n\n");
        
        this.history.forEach(e => {
            e.board.getBoadFriendly(e.players[0].name,e.players[1].name);
            console.log(e.message);
        } )
    }

    clearBoard(){
        this.board.clearBoard();
        this.players = [];
        this.endMessage = "";
        this.countOfTurns = 9
        this.history = [];
        console.log();
    }

    getPlayerForm(){
        return  [
            { name : "player1" , message: "What is the name PLayer 1?", },
            { name : "player2" , message: "What is the name PLayer 2?", }
          ]; 
    }


    async startGame(){
        let choices = [
            { option: 1, message: "Start Game" },
            { option: 2, message: "Show last game" },
            { option: 0, message: "Exit" }
        ]
        return (await Input.getSelect("Tic-Tac-Toe", choices)).data; 
    }
}