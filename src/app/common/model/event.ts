import { Team } from "./team";

export class Event {
    id: number;
    myTeam?: Team;
    myTeamScores?:number;
    oppositeTeam?: Team;
    oppositeTeamScores?: number;
    refereeName?: string;
    stadiumName?: string;
    country: string;
    city: string;
    matchDate: Date;
}
