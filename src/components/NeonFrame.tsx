import styles from "../styles/NeonFrame.module.css"; 

type NeonFrameProps = { children: React.ReactNode; }; 

function NeonFrame({ children }: NeonFrameProps) { 
    return ( 
    <div className={styles.neonFrame}> 
    {children} 
    </div> 
    ); 
} 

export default NeonFrame;