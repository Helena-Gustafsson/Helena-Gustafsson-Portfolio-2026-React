import style from '../styles/LIA.module.css';

function LIA() {    
return (
    <div className={style.liaContainer}>
        <h2>LIA</h2>
        <img className={style.liaImage} src="public/Lia-poster.jpg" alt="LIA Poster" />
    </div>
);
}

export default LIA;