import Header from "../components/Header"

const members = [
    {
        icon: "icon",
        name: "name1",
        level: 250,
        description: "123111",
        joindate: "2023.06.18"
    },
    {
        icon: "icon",
        name: "name2",
        level: 247,
        description: "1233123",
        joindate: "2022.06.18"
    },
    {
        icon: "icon",
        name: "name3",
        level: 244,
        description: "1230",
        joindate: "2023.06.30"
    },
    {
        icon: "icon",
        name: "name4",
        level: 240,
        description: "123",
        joindate: "2023.06.18"
    },
    {
        icon: "icon",
        name: "name5",
        level: 237,
        description: "123",
        joindate: "2023.06.18"
    },
]

const Guildmembers = () => {
    return(
        <div>
            <Header/>
            <div>블러 이미지</div>
            <div>길드 아이콘</div>
            <div>길드 이름 및 소개글</div>
            {members.map(member => (
                <div style={{}}>
                    <img src={member.icon} alt={``}/>

                </div>
            ))}
            <div style={{display: "flex", justifyContent: "right"}}>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "bold", margin: "10px", width: "170px", height: "35px", backgroundColor: "#454545", color: "white", border: "none", padding: "5px 10px", borderRadius: "3px", cursor: "pointer",}}>메인으로</div>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "bold", margin: "10px", width: "170px", height: "35px", backgroundColor: "red", color: "white", border: "none", padding: "5px 10px", borderRadius: "3px", cursor: "pointer",}}>방 만들기</div>
            </div>
        </div>
    )
}

export default Guildmembers;