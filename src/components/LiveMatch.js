import React from 'react'
import "../styles/LiveMatch.css"

function LiveMatch({match}) {
  return (
    <div className='match-cards'>
        <div className='leauge-info-and-time'>
            {/* Ülke logosu ve Lig adı */}
            <div style={{display:'flex', alignItems:'center', gap:'5px'}}>
                <img src={match.league.league_logo} alt="League" className='country-logo' />
                <p>{match.league.league_name}</p>
            </div>
            {/* Dakika bilgisi - Canlı maç olduğu belli olsun diye renkli yapabiliriz */}
            <p style={{color: '#e74c3c', fontWeight:'bold'}}>{match.elapsed}'</p>
        </div>

        <div className='match-info'>
            <div className='team-info' id='home'>
                <img src={match.home_team.logo} alt={match.home_team.name} className='team-logo' />
                <p>{match.home_team.name}</p> 
            </div>
            
            <div className='score-info'>
                <p>{match.home_team.goal} - {match.away_team.goal}</p>
            </div>
            
            <div className='team-info' id='away'>
                <img src={match.away_team.logo} alt={match.away_team.name} className='team-logo' />
                <p>{match.away_team.name}</p>
            </div>
        </div>
    </div>
  )
}

export default LiveMatch