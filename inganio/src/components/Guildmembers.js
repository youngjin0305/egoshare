import Header from "../components/Header";
import { useParams  } from "react-router-dom";

const members = [
    {
        icon: "icon",
        name: "name1",
        level: 300,
        description: "우주를 날고 있는 Clara",
        joindate: "2023.06.18"
    },
    {
        icon: "icon",
        name: "name2",
        level: 297,
        description: "숲속 정령이 된 Clara",
        joindate: "2022.06.18"
    },
    {
        icon: "icon",
        name: "name3",
        level: 294,
        description: "바닷가에서 서핑하는 Clara",
        joindate: "2023.06.30"
    },
    {
        icon: "icon",
        name: "name4",
        level: 290,
        description: "도시 속 회사원 Clara",
        joindate: "2023.06.18"
    },
    {
        icon: "icon",
        name: "name5",
        level: 287,
        description: "구름 앞에 서 있는 Clara",
        joindate: "2023.06.18"
    },
]

const Guildmembers = () => {
    const { guild } = useParams();

    return(
        <div>
            <Header/>
            <div style={{width: "100vw", height: "200px", backgroundColor: "gray"}}></div>
            <div>길드 아이콘</div>
            <div style={{ marginLeft: "40px"}}>
                <p style={{fontWeight: "bold", fontSize: "20px"}}>{guild}</p>
                <p style={{color: "gray", fontSize: "14px"}}>길드 소개</p>
            </div>
            <div style={{display: "flex", justifyContent: 'space-between', alignItems: "center", margin: "0 30px", borderTop: "solid #DDDDDD thin"}}>
                    <div style={{display: 'flex'}}>
                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: "10px", marginRight: "30px"}}>길드원 목록</div>
                    </div>
                    <div style={{display: 'flex'}}>
                        <p style={{margin: "30px 60px"}}>레벨</p>
                        <p style={{margin: "30px 250px 0 10px"}}>설명</p>
                        <p style={{margin: "30px 12px"}}>가입 일자</p>
                    </div>
                </div>
            {members.map(member => (
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", padding: "10px"}}>
                    <div style={{display: "flex"}}>
                        <img src={member.icon} alt={`${member.name}_icon`} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: "10px", margin: "0 20px"}}/>
                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: "10px"}}>{member.name}</div>
                    </div>
                    <div style={{display: "flex"}}>
                        <div style={{margin: "20px", width: "80px", display: 'flex', justifyContent: "center"}}>{member.level}</div>
                        <div style={{margin: "20px", width: "260px", display: 'flex', justifyContent: "left"}}>{member.description}</div>
                        <div style={{margin: "20px", width: "80px", display: 'flex', justifyContent: "center"}}>{member.joindate}</div>
                    </div>
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