export async function getLiveScores() {
  //const matches=[]
  //let veri = {
  //  matches_id:"",
  //  country_id:"",
  //  leauge: "",
  //  matches: {
  //    home: "",
  //    away: "",
  //    time: "",
  //    score: "",
  //  },
  //};
  const response = await fetch(
    `https://api.soccerdataapi.com/livescores/?auth_token=${process.env.REACT_APP_APIKEY_SOCCERDATA}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept-Encoding": "gzip",
      },
    }
  );
  const data = await response.json();
  console.log(data.results[0].country["name"]);
  //console.log(data.results[0].stage[0].matches)
  //for (let index = 0; index < data.results.length; index++) {
  //
  //}
  return data;
}

getLiveScores();
