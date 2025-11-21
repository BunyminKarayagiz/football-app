
export async function getLeagues(){

    try{
        const response = await fetch("https://v3.football.api-sports.io/leagues", {
            "method": "GET",
            "headers": {
                "x-apisports-key": process.env.REACT_APP_APIKEY
            }
        });
        const data = await response.json();
        console.log(data.response)
    }catch(error){
        console.log("Error while get leagues", error)
    }

}