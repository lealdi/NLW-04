import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Profile.module.css";

export function Profile() {
    const {level} = useContext(ChallengesContext) 

    return (
       <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/68405612?s=460&u=7d1aba1c5319524b0840e9dc7fa3202561480f37&v=4" alt="Imagem Git Perfil"/>        
        <div>
            <strong>Diego Leal</strong>
            <p>
                <img src="icons/level.svg" alt="Level"/>
                Level {level}
            </p>
        </div>
       </div>
    );
}