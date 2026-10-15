import { useState } from 'react';
import { motion } from 'motion/react';
import styles from '../styles/CreativeImage.module.css';
import neonStyles from '../styles/NeonBorder.module.css';

function CreativeImage() { 
    //To yyou can use sessionStorage to check if the animation has already been played during the current session. If it has, you can skip the animation and render the image in its final state. This way, the animation will only play once per session, and subsequent visits to the page will show the image without the animation.
    const [hasAlreadyAnimated] = useState(() => {
        if (typeof window !== 'undefined') {
            const alreadyAnimated = sessionStorage.getItem('image_has_animated');
            if (alreadyAnimated) return true;
            sessionStorage.setItem('image_has_animated', 'true');
        }
        return false;
    });

    return (
        <motion.div className={styles.creativeImage}>
            <motion.img 
                className={neonStyles.neonBorder} 
                src="/creative-image.png" 
                alt="Creative Image" 
                loading="lazy" 
                width="1208" 
                height="839" 
                initial={hasAlreadyAnimated ? { scale: 1, rotate: 0 } : { scale: 0, rotate: 360 }}
                animate={hasAlreadyAnimated ? { scale: 1, rotate: 0 } : { scale: [0, 1, 1.1, 1], rotate: [360, 0, 0, 0]  }}
                transition={hasAlreadyAnimated ? {} : {
                    duration: 6.5,
                    times: [0, 0.51, 0.75, 1],
                    ease: "easeInOut",
                }}
            />
        </motion.div>
    );
}
    
export default CreativeImage;