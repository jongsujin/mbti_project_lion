import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
function HomePage(){
    let navigate = useNavigate();
    const [mbti,setMbti] = useState('');
    const mbtiSubmit = async () => {
      try {
        const data = {
          mbti: mbti,
        };
  
        await axios.post('http://localhost:5000/api/mbti', data);
        navigate('/result');
      } catch (error) {
        console.error(error);
      }
    };
  
    const mbtiInput = (e) => {
      setMbti(e.target.value);
    };
  

    
  
    return(
    <>
    <div className="mbti_select">
      <button id="mbti_e">E</button>
      <button id="mbti_s">S</button>
      <button id="mbti_t">T</button>
      <button id="mbti_j">J</button>
      <button id="mbti_text">에너지 방향</button>
      <button id="mbti_text">인식 방식</button>
      <button id="mbti_text">판단</button>
      <button id="mbti_text">생활 양식</button>
      <button id="mbti_i">I</button>
      <button id="mbti_n">N</button>
      <button id="mbti_f">F</button>
      <button id="mbti_p">P</button>
     </div>
     <div className="input_mbti">
     <input type="text" placeholder="MBTI를 입력하세요" value={mbti} onChange={mbtiInput}></input><button id="go_result" onClick={mbtiSubmit}>입력</button>
     </div>
     </>
    );
}
export default HomePage;