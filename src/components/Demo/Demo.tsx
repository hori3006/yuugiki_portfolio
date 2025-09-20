import React, { useState, useEffect } from "react";
import echidonaImage from "../../assets/echidona.JPG";
import * as styles from "./Demo.css";

const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
const cutInTexts = ["強欲RUSH", "Re:ady", "Go"];

const Demo: React.FC = () => {
  const [rushCount, setRushCount] = useState(140);
  const [reels, setReels] = useState<string[]>(["", "", ""]);
  const [cutInStep, setCutInStep] = useState<number>(0);
  const [showCutIn, setShowCutIn] = useState<boolean>(true);
  const [isHit, setIsHit] = useState(false);

  // ページロード時だけカットイン表示
  useEffect(() => {
    let step = 0;
    const interval = setInterval(() => {
      setCutInStep(step);
      step++;
      if (step >= cutInTexts.length) clearInterval(interval);
    }, 800);

    const hideTimer = setTimeout(() => {
      setShowCutIn(false);
    }, cutInTexts.length * 800 + 1500);

    return () => {
      clearInterval(interval);
      clearTimeout(hideTimer);
    };
  }, []);

  const getFinalResult = (): string[] => {
    const hitRate = 0.2;
    if (Math.random() < hitRate) {
      const hitNumber = numbers[Math.floor(Math.random() * numbers.length)];
      return [hitNumber, hitNumber, hitNumber];
    }
    return Array.from({ length: 3 }, () => numbers[Math.floor(Math.random() * numbers.length)]);
  };

  const spin = () => {
    if (rushCount <= 0) return;
    setRushCount((prev) => (prev > 0 ? prev - 1 : 0));

    const finalResult = getFinalResult();
    setReels(finalResult);

    // ★ 揃い判定
    if (finalResult.every((num) => num === finalResult[0])) {
      setIsHit(true);
      // アニメーションを再適用するため一度 false→true
      setTimeout(() => setIsHit(false), 600);
    }
  };

  const getReelColor = (num: string) => {
    if (num === "7") return styles.reelGold;
    if (["1", "3", "5", "9"].includes(num)) return styles.reelRed;
    return styles.reelBlue;
  };

  return (
    <div className={styles.demoContainer}>
      {showCutIn && cutInStep < cutInTexts.length && (
        <div className={styles.cutInText}>{cutInTexts[cutInStep]}</div>
      )}

      <h2 className={styles.rushTitle}>強欲RUSH</h2>

      <div className={styles.rushDisplay}>
        <span className={styles.label}>残り</span>
        <span className={styles.count}>{rushCount}</span>
        <span className={styles.unit}>回</span>
      </div>

      <div>
        <img src={echidonaImage} alt="Echidona" className={styles.echidonaImage} />
      </div>

      <div className={styles.reels}>
        {reels.map((num, i) => (
          <div
            key={i}
            className={`${styles.reel} ${getReelColor(num)} ${isHit ? styles.reelHit : ""}`}
          >
            {num}
          </div>
        ))}
      </div>

      <button onClick={spin} className={styles.rushButton}>
        演出トリガー
      </button>
    </div>
  );
};

export default Demo;
