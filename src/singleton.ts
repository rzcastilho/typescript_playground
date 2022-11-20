class Player {
    name: string;
    score: number;
    constructor(name: string, score: number) {
        this.name = name;
        this.score = score;
    }
}

class Leaderboard {

    protected static _instance: Leaderboard;
    protected ranking: Array<Player> = new Array<Player>()

    private constructor() {};

    public add(name: string, score: number): void {
        this.ranking.push(new Player(name, score));
        this.ranking.sort((p1, p2) => {
            if (p1.score > p2.score) return -1;
            if (p1.score < p2.score) return 1;
            return 0;
        });
    }

    public show(): void {
        console.log("--------------------------------------------------------------------------------")
        console.log("-- LEADERBOARD -----------------------------------------------------------------")
        console.log("--------------------------------------------------------------------------------")
        this.ranking.forEach((player, index) => console.log(`${index+1} - player: ${player.name} - score: ${player.score}`))
        console.log("--------------------------------------------------------------------------------")
    }

    public static instance() {
        if (this._instance == null) {
            this._instance = new Leaderboard();
        }
        return this._instance;
    }
}

const leaderboard = Leaderboard.instance();
leaderboard.add("John", 10000);
leaderboard.add("Doe", 10010);
leaderboard.show();

Leaderboard.instance().add("Rodrigo", 99999);
Leaderboard.instance().add("Castilho", 9999);
Leaderboard.instance().show();
