import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
function HomePage(){
    let navigate = useNavigate();
    let [mbti,setMbti] = useState([]);
    let [mbtiContent, setMbtiContent] = useState('');
    const mbtiSubmit = async () => {
      try {
        const data = {
          mbti: mbti,
          mbtiContent : mbtiContent,
        };
  
        await axios.post('http://localhost:5000/api/mbti', data);
        navigate('/result');
      } catch (error) {
        console.error(error);
      }
    };
    const SelectMbtiButton = (value) => {
    
        setMbti((prevMbti) => {
          return prevMbti + value;
        });
    };
  
    const mbtiInput = (e) => {
      setMbti(e.target.value);
    };
   
  

    
  
    return(
    <>
    <div className="mbti_select">
      <button id="mbti_e" onClick={()=>(SelectMbtiButton('E'))}>E</button>
      <button id="mbti_s" onClick={()=>(SelectMbtiButton('S'))}>S</button>
      <button id="mbti_t" onClick={()=>(SelectMbtiButton('T'))}>T</button>
      <button id="mbti_j" onClick={()=>(SelectMbtiButton('J'))}>J</button>
      <button id="mbti_i" onClick={()=>(SelectMbtiButton('I'))}>I</button>
      <button id="mbti_n" onClick={()=>(SelectMbtiButton('N'))}>N</button>
      <button id="mbti_f" onClick={()=>(SelectMbtiButton('F'))}>F</button>
      <button id="mbti_p" onClick={()=>(SelectMbtiButton('P'))}>P</button>
     </div>
     <div className="input_mbti">
     <input type="text" placeholder="MBTI를 입력하세요" value={mbti}></input><button id="go_result" onClick={mbtiSubmit}>입력</button>
     
     </div>
     </>
    );
}
export default HomePage;