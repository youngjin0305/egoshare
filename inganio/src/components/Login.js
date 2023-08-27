import KakaoLogin from "react-kakao-login";
import { useDispatch } from 'react-redux';
import { login } from '../redux/authActions';
import axios from "axios";

const Login = () => {
    const loginbtn = {display: "flex", width: "600px", height: "100px", justifyContent: "center", alignItems: "center", backgroundColor: "#FFE812", borderRadius: "20px", cursor: "pointer"};
    
    const kakaoClientId = '82751b53fce87ca59f065e047cd49d8d';
    const kakaoOnSuccess = async (data)=>{
        console.log(data)
        const idToken = data.response.access_token
        const userData = {
            id: data.profile.id,
            displayName: data.profile.properties.nickname,
        }
        axios.get("http://localhost:8000/auth", {data: {accessToken:idToken, refreshToken:data.response.refresh_token, profile:data.profile}} , { withCredentials: true })
        
        dispatch(login(userData));
    };
    const kakaoOnFailure = (error) => {
        console.log(error);
    };

    const dispatch = useDispatch();

    return(
        <div style={{height:"100vh",display: "flex",flexDirection: "column",justifyContent: "center",alignItems: "center"}}>
            <div style={{display: "flex", margin: "10px"}}>
                <svg width="80" height="78" viewBox="0 0 80 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M80.0005 0H39.8378V77.7131H80.0005V77.6835H69.1096V67.2347H65.5302C62.0201 67.2347 58.8365 66.0396 57.1222 63.9171C56.9781 63.6712 56.8245 63.4507 56.668 63.226L56.6679 63.2258C55.8716 62.0823 55.0003 60.8311 54.917 55.578L54.8241 49.7172L50.7426 48.6751C46.1715 47.5081 45.638 47.2575 44.9732 45.9658C44.4627 44.9738 44.4372 43.742 44.9084 42.8253C45.0935 42.4648 47.3996 39.9758 50.0722 37.2521L54.9015 32.3304L55.0689 30.4201C55.6004 24.3563 57.9397 19.2989 62.1687 15.07C66.4277 10.8109 71.4955 8.47365 77.5609 7.97096C78.1476 7.92234 79.0085 7.88705 80.0005 7.86484V0ZM66.7737 34.5307C66.7737 35.9283 65.6407 37.0612 64.2431 37.0612C62.8455 37.0612 61.7126 35.9283 61.7126 34.5307C61.7126 33.1331 62.8455 32.0001 64.2431 32.0001C65.6407 32.0001 66.7737 33.1331 66.7737 34.5307ZM0 77.6836V7.86194C1.05131 7.88391 1.9664 7.92021 2.58073 7.97112C8.64611 8.4738 13.714 10.8111 17.973 15.0701C22.202 19.2991 24.5412 24.3565 25.0728 30.4202L25.2401 32.3306L30.0694 37.2523C32.7421 39.976 35.0481 42.4649 35.2333 42.8254C35.7045 43.7421 35.679 44.974 35.1685 45.966C34.5037 47.2577 33.9701 47.5083 29.3991 48.6753L25.3175 49.7174L25.2246 55.5782C25.1414 60.8313 24.2701 62.0825 23.4737 63.226L23.4737 63.2261L23.4737 63.2261L23.4735 63.2263C23.3171 63.4509 23.1636 63.6714 23.0195 63.9173C21.3052 66.0397 18.1216 67.2348 14.6114 67.2348H11.032V77.6836H0ZM17.7948 34.5308C17.7948 35.9284 16.6619 37.0613 15.2643 37.0613C13.8667 37.0613 12.7337 35.9284 12.7337 34.5308C12.7337 33.1332 13.8667 32.0002 15.2643 32.0002C16.6619 32.0002 17.7948 33.1332 17.7948 34.5308Z" fill="url(#paint0_linear_251_625)"/>
                    <defs>
                    <linearGradient id="paint0_linear_251_625" x1="83.1842" y1="78.2029" x2="-1.87578" y2="-5.14459" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#AF0707"/>
                    <stop offset="1" stopColor="#FF932F"/>
                    </linearGradient>
                    </defs>
                </svg>
                <div style={{margin: "0 20px",fontSize: "60px", fontWeight: "bold"}}>Ego Share</div>
            </div>
            <div style={{fontSize: "27px", color: "#9B9B9B", fontWeight: "600"}}>길드 NFT 창조를 통해 길드에 들어갈 수 있어요</div>
            <img style={{width: "412px", height: "412px", }} src="nft_collectables 1.png" alt="img"/>
            <KakaoLogin
                token={kakaoClientId}
                onSuccess={kakaoOnSuccess}
                onFailure={kakaoOnFailure}
                render={({ onClick }) => (
                    <div onClick={onClick}>
                        <div style={loginbtn}>
                          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M20.0001 1.05804C8.95376 1.05804 4e-05 8.01225 4e-05 16.5891C4e-05 21.9232 3.46316 26.6256 8.73676 29.4225L6.51788 37.5709C6.32184 38.2909 7.14096 38.8648 7.76996 38.4476L17.4964 31.9943C18.3172 32.0739 19.1513 32.1204 20.0001 32.1204C31.0455 32.1204 39.9999 25.1665 39.9999 16.5891C39.9999 8.01225 31.0455 1.05804 20.0001 1.05804Z" fill="black"/>
                          </svg>
                          <div style={{fontSize: "30px", fontWeight: "bold", margin: "0 10px"}}>카카오톡 계정 인증</div>
                          </div>
                    </div>
                )}
            />
        </div>
    )
}

export default Login;