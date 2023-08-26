import Header from '../components/Header';

const guilds = [
    {
        rank: 1,
        name: "Brown Steelcloaks Gang",
        icon: "icon_url_1",
        server: "W",
        limit: 2000,
        members: 1223,
    },
    {
        rank: 2,
        name: "Gold Avatar",
        icon: "icon_url_2",
        server: "X",
        limit: 1400,
        members: 1112,
    },
    {
        rank: 3,
        name: "Mad Aquagrade",
        icon: "icon_url_2",
        server: "W",
        limit: 2500,
        members: 1034,
    },
    {
        rank: 4,
        name: "Gate Angels",
        icon: "icon_url_2",
        server: "Y",
        limit: 2000,
        members: 1021,
    },
    {
        rank: 5,
        name: "Chillanga Jubei",
        icon: "icon_url_2",
        server: "Z",
        limit: 1500,
        members: 987,
    },
];

const GuildList = () => {
    return(
        <div>
            <Header/>
            <div>
                <div style={{display: "flex", justifyContent: 'space-between', alignItems: "center", margin: "0 20px 20px", padding: "10px", borderBottom: "solid #DDDDDD thin"}}>
                    <div style={{display: 'flex'}}>
                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: "20px", marginRight: "30px"}}>랭킹</div>
                        <p style={{fontSize: "18px", fontWeight: "bold", marginBottom: "5px",}}>길드 이름</p>
                    </div>
                    <div style={{display: 'flex'}}>
                        <p style={{margin: "23px"}}>활동 서버</p>
                        <p style={{margin: "23px"}}>제한 인원</p>
                        <p style={{margin: "23px"}}>회원 수</p>
                    </div>
                </div>
                {guilds.map(guild => (
                    <div key={guild.rank} style={{display: "flex", justifyContent: 'space-between', alignItems: "center", marginBottom: "20px", padding: "10px"}}>
                        <div style={{display: 'flex'}}>
                            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: "20px", margin: "0 30px"}}>{guild.rank}</div>
                            <img src={guild.icon} alt={`${guild.name} icon`} style={{width: "50px", height: "50px", marginRight: "10px", borderRadius: "5px"}} />
                            <p style={{fontSize: "18px", fontWeight: "bold", marginBottom: "5px",}}>{guild.name}</p>
                        </div>
                        <div style={{display: 'flex', marginRight: "10px"}}>
                            <button style={{margin: "10px", width: "80px", backgroundColor: "red", color: "white", border: "none", padding: "5px 10px", borderRadius: "3px", cursor: "pointer",}}>Join</button>
                            <div style={{margin: "20px", width: "80px", display: 'flex', justifyContent: "center"}}>{guild.server}</div>
                            <div style={{margin: "20px", width: "80px", display: 'flex', justifyContent: "center"}}>{guild.limit}</div>
                            <div style={{margin: "20px", width: "80px", display: 'flex', justifyContent: "center"}}>{guild.members}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GuildList;