import {Routes,Route,Link, useNavigate, Outlet} from 'react-router-dom';
import './resultPage.css';
import {useEffect, useState} from 'react';
import axios from 'axios';
import HomePage from './homePage';
function ResultPage(){
    let navigate = useNavigate();
    const goHome = () => {
        navigate('/');
      }
      const [resultData, setResultData] = useState('');
      const [mbtiContent, setMbtiContent] = useState('');
      useEffect(()=>{
        const fetchData = async () => {
            try{
                const response = await axios.get('http://localhost:5000/api/result');
                const data = response.data;
                setResultData(data);
                setMbtiContent(getMbtiDescription(data));
            } catch(error) {
                console.error(error);
            }
        };
        
        fetchData();
      },[]);

      // MBTI 값에 따른 설명을 반환하는 함수
  const getMbtiDescription = (mbti) => {
    switch (mbti) {
      case 'ENFP':
        return '조화를 추구하고, 이해심이 많으며 동정심이 있음';
      case 'ISTJ':
        return '진지하고 책임감이 강하며 신뢰할 수 있음';
      // 다른 MBTI 값에 대한 설명을 추가로 작성
      default:
        return '해당 MBTI에 대한 설명이 없습니다.';
    }
  };
   return(
    <div>
       <div className="result_wrap">
       <h3>{resultData}</h3>
        <div className="result_box">
            <h3>{mbtiContent}</h3>
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