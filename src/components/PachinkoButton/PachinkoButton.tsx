import React, { useEffect, useState } from "react";
import * as styles from "./PachinkoButton.css";

interface Props {
  isNextHit: boolean;
  onHit: () => void;
}

const PachinkoButton: React.FC<Props> = ({ isNextHit, onHit }) => {
  const [showEffect, setShowEffect] = useState(false);

  useEffect(() => {
    if (isNextHit) {
      setShowEffect(true);
      const timer = setTimeout(() => setShowEffect(false), 2500);
      return () => clearTimeout(timer);
    }
  }, [isNextHit]);

  return (
    <div className={styles.buttonWrapper}>
      {/* 💥 先バレ吹き出し */}
      {showEffect && (
        <div className={styles.bubbleWrapper}>
          
        </div> 
      )}

      <button className={styles.button} onClick={onHit}>
        PUSH
      </button>
    </div>
  );
};

export default PachinkoButton;
