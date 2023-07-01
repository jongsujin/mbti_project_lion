import {Routes,Route,Link, useNavigate, Outlet} from 'react-router-dom';
import './resultPage.css';
import HomePage from './homePage';
function ResultPage(){
    let navigate = useNavigate();
    const goHome = () => {
        navigate('/');
      }
   return(
    <div>
       <div className="result_wrap">
       <h3>ESTJ는</h3>
        <div className="result_box">
            <h4>조화를 추구하고, 이해심이 많으며 동정심이 있음</h4>
            </div>
            <p></p>
        <div className="move_btn">
            <button onClick={goHome}>홈</button>
        {/*     <button>관리자페이지</button> */}
        </div>
      
        </div>
        
    </div>
   );
}
export default ResultPage;