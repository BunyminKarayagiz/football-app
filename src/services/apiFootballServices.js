
export async function getLeagues(){

    try{
        const response = await fetch("https://v3.football.api-sports.io/leagues", {
            "method": "GET",
            "headers": {
                "x-apisports-key": process.env.REACT_APP_APIKEY_APIFOOTBALL
            }
        });
        const data = await response.json();
        console.log(data.response)
    }catch(error){
        console.log("Error while get leagues", error)
    }

};


export async function getmatch(){
    const datas=[]
    try{
        const response = await fetch("https://v3.football.api-sports.io/fixtures?live=all", {
            "method": "GET",
            "headers": {
                "x-apisports-key": process.env.REACT_APP_APIKEY_APIFOOTBALL
            }
        });
        const data = await response.json();
        console.log(data.response)

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
        console.log(veri)
            datas.push(veri)
        });
    }catch(error){
        console.log("Error while get leagues", error)
    }

}