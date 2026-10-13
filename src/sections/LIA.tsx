import NeonFrame from '../components/NeonFrame';
import style from '../styles/LIA.module.css';

function LIA() {    
return (
    <div className={style.liaContainer}>
        <NeonFrame>
            <img className={style.liaImage} src="public/Lia-poster.jpg" alt="LIA Poster" loading="lazy" />
        </NeonFrame>
    </div>
);
}

export default LIA;