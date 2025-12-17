export const topLeagues_str =
  "39-140-78-61-135-253-203-94-91-235-145-106-2-307";

export const topLeagues = [
  {
    id: 39,
    name: "Premier League",
    flag: "https://media.api-sports.io/flags/gb-eng.svg",
  },
  {
    id: 140,
    name: "La Liga",
    flag: "https://media.api-sports.io/flags/es.svg",
  },
  {
    id: 78,
    name: "Bundesliga",
    flag: "https://media.api-sports.io/flags/de.svg",
  },
  {
    id: 61,
    name: "Ligue 1 (Fransa)",
    flag: "https://media.api-sports.io/flags/fr.svg",
  },
  {
    id: 135,
    name: "Serie A (İtalya)",
    flag: "https://media.api-sports.io/flags/it.svg",
  },
  {
    id: 253,
    name: "Major League Soccer (ABD)",
    flag: "https://media.api-sports.io/flags/us.svg",
  },
  {
    id: 203,
    name: "Süper Lig (Türkiye)",
    flag: "https://media.api-sports.io/flags/tr.svg",
  },
  {
    id: 94,
    name: "Primeira Liga (Portekiz)",
    flag: "https://media.api-sports.io/flags/pt.svg",
  },

  {
    id: 91,
    name: "Eredivisie (Hollanda)",
    flag: "https://media.api-sports.io/flags/nl.svg",
  },

  {
    id: 235,
    name: "Russian Premier League",
    flag: "https://media.api-sports.io/flags/ru.svg",
  },
  {
    id: 145,
    name: "Belgian Pro League",
    flag: "https://media.api-sports.io/flags/be.svg",
  },
  {
    id: 106,
    name: "Ekstraklasa (Polonya)",
    flag: "https://media.api-sports.io/flags/pl.svg",
  },

  {
    id: 2,
    name: "Champions League",
    flag: "https://media.api-sports.io/flags/ua.svg",
  },
  {
    id: 307,
    name: "Saudi Pro League",
    flag: "https://media.api-sports.io/flags/sa.svg",
  },
];

export const seasons = [
  2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022,
  2023,
];

export async function getLiveMatchs(topLeagues_str) {
  const matches = [];
  try {
    const response = await fetch(
      `https://v3.football.api-sports.io/fixtures?live=${topLeagues_str}`,
      {
        method: "GET",
        headers: {
          "x-apisports-key": process.env.REACT_APP_APIKEY_APIFOOTBALL,
        },
      }
    );
    const data = await response.json();

    data.response.forEach((element) => {
      let veri = {
        fixture_id: element.fixture.id,
        country_name: element.league.country,
        elapsed: element.fixture.status.elapsed,
        home_team: {
          id: element.teams.home.id,
          name: element.teams.home.name,
          logo: element.teams.home.logo,
          goal: element.goals.home,
        },
        away_team: {
          id: element.teams.away.id,
          name: element.teams.away.name,
          logo: element.teams.away.logo,
          goal: element.goals.away,
        },
        league: {
          league_id: element.league.id,
          league_name: element.league.name,
          league_logo: element.league.logo,
        },
      };
      console.log("veri", matches)
      matches.push(veri);
    });

    const grouped = matches.reduce((acc, match) => {
      const leagueId = match.league.league_id;

      if (!acc[leagueId]) {
        acc[leagueId] = {
          league: match.league,
          matches: [],
        };
      }

      acc[leagueId].matches.push(match);
      return acc;
    }, {});
    console.log(grouped)
    return grouped;
  } catch (error) {
    console.log("Error while get leagues", error);
  }
}

export async function getLeaugue(league_id, search_season) {
  const teams = [];
  try {
    const response = await fetch(
      `https://v3.football.api-sports.io/standings?league=${league_id}&season=${search_season}`,
      {
        method: "GET",
        headers: {
          "x-apisports-key": process.env.REACT_APP_APIKEY_APIFOOTBALL,
        },
      }
    );
    const data = await response.json();
    let leauge_data = {
      id: data.response[0].league.id,
      league_name: data.response[0].league.name,
      country: data.response[0].league.country,
      logo: data.response[0].league.logo,
      season: data.response[0].league.season,
    };
    data.response[0].league.standings[0].forEach((element) => {
      let veri = {
        teams: {
          id: element.team.id,
          rank: element.rank,
          name: element.team.name,
          logo: element.team.logo,
          points: element.points,
          goalsdiff: element.goalsDiff,
          form: element.form,
          played: element.all.played,
          win: element.all.win,
          draw: element.all.draw,
          lose: element.all.lose,
        },
      };
      teams.push(veri);
    });

    return [leauge_data, teams];
  } catch (error) {
    console.log("Lig Verisi Çekilemedi", error);
    return ["", ""];
  }
}

export async function getFixtures(topLeagues) {
  const matches = [];
  try {
    const response = await fetch(
      `https://v3.football.api-sports.io/fixtures?live=${topLeagues}&season=2023&from=2023-12-10&to=2023-12-10`,
      {
        method: "GET",
        headers: {
          "x-apisports-key": process.env.REACT_APP_APIKEY_APIFOOTBALL,
        },
      }
    );
    const data = await response.json();
    console.log(data.response);
    data.response.forEach((element) => {
      let veri = {
        fixture_id: element.fixture.id,
        country_name: element.league.country,
        country_flag: element.league.flag,
        elapsed: element.fixture.status.elapsed,
        home_team: {
          id: element.teams.home.id,
          name: element.teams.home.name,
          logo: element.teams.home.logo,
          goal: element.goals.home,
        },
        away_team: {
          id: element.teams.away.id,
          name: element.teams.away.name,
          logo: element.teams.away.logo,
          goal: element.goals.away,
        },
        league: {
          league_id: element.league.id,
          league_name: element.league.name,
          league_logo: element.league.flag,
        },
      };
      matches.push(veri);
    });
    console.log("sad", matches);
    return matches;
  } catch (error) {
    console.log("Error while get leagues", error);
  }
}

export async function getFixturesByLeague(leagueId) {
  const matches = [];

  const url = `https://v3.football.api-sports.io/fixtures?league=${leagueId}&season=2023&from=2023-11-20&to=2023-11-29`;

  const res = await fetch(url, {
    method: "GET",
    headers: {
      "x-apisports-key": process.env.REACT_APP_APIKEY_APIFOOTBALL,
    },
  });

  const data = await res.json();
  data.response.forEach((element) => {
    let veri = {
      league: {
        name: element.league.name,
        id: element.league.id,
        logo: element.league.logo,
        flag: element.league.flag,
      },
      fixture: {
        id: element.fixture.id,
        date: element.fixture.date,
        time: element.fixture.timestamp,
        ref: element.fixture.referee,
        stadium: element.fixture.venue.name,
        city: element.fixture.venue.city,
      },
      homeTeam: {
        id: element.teams.home.id,
        name: element.teams.home.name,
        logo: element.teams.home.logo,
      },
      awayTeam: {
        id: element.teams.away.id,
        name: element.teams.away.name,
        logo: element.teams.away.logo,
      },
    };
    matches.push(veri);
  });
  return matches || [];
}

export async function getTopScores(leagueId, season) {
  const players = [];
  const url = `https://v3.football.api-sports.io/players/topscorers?season=${season}&league=${leagueId}`;

  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "x-apisports-key": process.env.REACT_APP_APIKEY_APIFOOTBALL,
      },
    });
    const data = await res.json();
    //console.log(data.response)
    data.response.forEach((player) => {
      let veri = {
        player: {
          id: player.player.id,
          name: player.player.name,
          age: player.player.age,
          photo: player.player.photo,
        },
        team: {
          id: player.statistics[0].team.id,
          name: player.statistics[0].team.name,
          logo: player.statistics[0].team.logo,
        },
        statistics: {
          appearences: player.statistics[0].games.appearences,
          goal: player.statistics[0].goals.total,
        },
      };

      players.push(veri);
    });
    return players;
  } catch (error) {
    console.log("Top Scores Verisi Alinamadi: ", error);
  }
}

export async function getTopAssists(leagueId, season) {
  const players = [];
  const url = `https://v3.football.api-sports.io/players/topassists?season=${season}&league=${leagueId}`;

  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "x-apisports-key": process.env.REACT_APP_APIKEY_APIFOOTBALL,
      },
    });
    const data = await res.json();
    //console.log(data.response)
    data.response.forEach((player) => {
      let veri = {
        player: {
          id: player.player.id,
          name: player.player.name,
          age: player.player.age,
          photo: player.player.photo,
        },
        team: {
          id: player.statistics[0].team.id,
          name: player.statistics[0].team.name,
          logo: player.statistics[0].team.logo,
        },
        statistics: {
          appearences: player.statistics[0].games.appearences,
          goal: player.statistics[0].goals.assists,
        },
      };
      players.push(veri);
    });
    return players;
  } catch (error) {
    console.log("Top Scores Verisi Alinamadi: ", error);
  }
}
