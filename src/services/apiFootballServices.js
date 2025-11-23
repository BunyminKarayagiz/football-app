
//export async function getLeagues(){
//
//    try{
//        const response = await fetch("https://v3.football.api-sports.io/leagues", {
//            "method": "GET",
//            "headers": {
//                "x-apisports-key": process.env.REACT_APP_APIKEY_APIFOOTBALL
//            }
//        });
//        const data = await response.json();
//        console.log(data.response)
//    }catch(error){
//        console.log("Error while get leagues", error)
//    }
//
//};


export async function getMatchs(){
    const matches=[]
    try{
        const response = await fetch("https://v3.football.api-sports.io/fixtures?live=all", {
            "method": "GET",
            "headers": {
                "x-apisports-key": process.env.REACT_APP_APIKEY_APIFOOTBALL
            }
        });
        const data = await response.json();

        data.response.forEach(element => {

        let veri={
            "fixture_id":element.fixture.id,
            "country_name":element.league.country,
            "elapsed":element.fixture.status.elapsed,
            "home_team":{
                "id":element.teams.home.id,
                "name":element.teams.home.name,
                "logo":element.teams.home.logo,
                "goal":element.goals.home,
            },
            "away_team":{
                "id":element.teams.away.id,
                "name":element.teams.away.name,
                "logo":element.teams.away.logo,
                "goal":element.goals.away,
            },
            "league":{
                "league_id":element.league.id,
                "league_name":element.league.name,
                "league_logo":element.league.flag
            }
        }
        matches.push(veri)
        });
        return matches
    }catch(error){
        console.log("Error while get leagues", error)
    }

}

export async function getLeaugue(league_id,search_season) {
        const teams=[]
    try{
        const response = await fetch(`https://v3.football.api-sports.io/standings?league=${league_id}&season=${search_season}`, {
            "method": "GET",
            "headers": {
                "x-apisports-key": process.env.REACT_APP_APIKEY_APIFOOTBALL
            }
        });
        const data = await response.json();
        let leauge_data=
        { 
            "id":data.response[0].league.id,
            "league_name": data.response[0].league.name,
            "country":data.response[0].league.country,
            "logo":data.response[0].league.logo,
            "season":data.response[0].league.season
        }
        data.response[0].league.standings[0].forEach(element => {

        let veri={
            "teams":{
                "id":element.team.id,
                "rank":element.rank,
                "name":element.team.name,
                "logo":element.team.logo,
                "points":element.points,
                "goalsdiff":element.goalsDiff,
                "form":element.form,
                "played":element.all.played,
                "win":element.all.win,
                "draw":element.all.draw,
                "lose":element.all.lose,
            }
        }
        teams.push(veri)
        });
        console.log(teams)
        console.log(leauge_data)
        return [leauge_data,teams]
    }catch(error){
        console.log("Error while get leagues", error)
    }
}