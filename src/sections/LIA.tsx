import NeonFrame from '../components/NeonFrame';
import style from '../styles/LIA.module.css';

function LIA() {    
return (
    <div className={style.liaContainer}>
        <NeonFrame>
            <img className={style.liaImage} src="/Lia-poster.jpg" alt="LIA Poster" 
            width="1414" height="2000" loading="lazy" />
        </NeonFrame>
    </div>
);
}

export default LIA;