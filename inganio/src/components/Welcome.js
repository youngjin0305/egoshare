import { Link } from "react-router-dom";

const Welcome = () => {
    return(
        <div style={{display: "flex", flexDirection: "column", height: "100vh", justifyContent: "center", alignItems: "center"}}>
            <div style={{display: "flex", margin: "10px"}}>
                <svg width="46" height="44" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M46 0H22.9067V44H46V43.9833H39.7379V38.0673H37.6797C35.6614 38.0673 33.8308 37.3907 32.8451 36.189C32.7622 36.0497 32.6739 35.9248 32.5839 35.7976C32.126 35.1501 31.625 34.4417 31.5772 31.4675L31.5238 28.1492L29.1769 27.5592C26.5485 26.8985 26.2418 26.7566 25.8595 26.0252C25.5659 25.4636 25.5513 24.7661 25.8222 24.2471C25.9287 24.043 27.2547 22.6338 28.7914 21.0917L31.5682 18.305L31.6645 17.2234C31.9701 13.7902 33.3152 10.9268 35.7468 8.53243C38.1958 6.12102 41.1097 4.7977 44.5973 4.51308C44.9346 4.48556 45.4297 4.46557 46 4.453V0ZM38.3948 19.5507C38.3948 20.342 37.7433 20.9835 36.9397 20.9835C36.1361 20.9835 35.4847 20.342 35.4847 19.5507C35.4847 18.7594 36.1361 18.1179 36.9397 18.1179C37.7433 18.1179 38.3948 18.7594 38.3948 19.5507ZM0 43.9834V4.45133C0.604534 4.46377 1.13074 4.48432 1.48399 4.51315C4.97156 4.79776 7.88555 6.12109 10.3345 8.53249C12.7661 10.9269 14.1112 13.7903 14.4168 17.2235L14.5131 18.3051L17.2899 21.0917C18.8266 22.6338 20.1526 24.043 20.2591 24.2471C20.53 24.7662 20.5154 25.4636 20.2218 26.0253C19.8396 26.7566 19.5328 26.8985 16.9044 27.5593L14.5576 28.1493L14.5041 31.4676C14.4563 34.4418 13.9553 35.1502 13.4974 35.7977C13.4074 35.9249 13.3191 36.0498 13.2362 36.1891C12.2505 37.3907 10.4199 38.0674 8.4016 38.0674H6.34346V43.9834H0ZM10.2318 19.5508C10.2318 20.3421 9.58035 20.9836 8.77673 20.9836C7.97312 20.9836 7.32166 20.3421 7.32166 19.5508C7.32166 18.7596 7.97312 18.1181 8.77673 18.1181C9.58035 18.1181 10.2318 18.7596 10.2318 19.5508Z" fill="url(#paint0_linear_251_670)"/>
                <defs>
                <linearGradient id="paint0_linear_251_670" x1="47.8306" y1="44.2773" x2="-0.338501" y2="-3.65649" gradientUnits="userSpaceOnUse">
                <stop stop-color="#AF0707"/>
                <stop offset="1" stop-color="#FF932F"/>
                </linearGradient>
                </defs>
                </svg>
                <div style={{margin: "0 20px",fontSize: "42px", fontWeight: "bold"}}>Ego Share 회원이 되신 걸 환영합니다!</div>
            </div>
            <div style={{fontSize: "34px", color: "#9B9B9B", fontWeight: "540"}}>이제 길드원들과 함께할 수 있어요</div>
            <img style={{width: "447px", height: "490px", margin: "10px 0 20px"}} src="nft_art1.png" alt="img"/>
            <Link>
                <div style={{width: "660px", height: "120px", fontWeight: "bold",backgroundColor: "red", borderRadius: "20px", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "35px", color: "white"}}>길드 가입하러 가기</div>
            </Link>
        </div>
    )
}

export default Welcome;