import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import echidonaImage from "../../assets/echidona.JPG";
import * as styles from "./Demo.css";
import PachinkoButton from "../../components/PachinkoButton/PachinkoButton";

const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
const cutInTexts = ["強欲RUSH", "Re:ady", "Go"];

const Demo: React.FC = () => {
  const [rushCount, setRushCount] = useState(140);
  const [reels, setReels] = useState<string[]>(["", "", ""]);
  const [isHit, setIsHit] = useState(false);
  const [rushTime, setRushTime] = useState(0);
  const [showInitialCutIn, setShowInitialCutIn] = useState(true);
  const [cutInStep, setCutInStep] = useState(0);
  const [showPokeun, setShowPokeun] = useState(false);
  const [spinning, setSpinning] = useState(false);

  // const [reserve, setReserve] = useState<boolean[]>([true, true, true, true]); // 🔸 保留を一時停止

  /* Rush Time カウントアップ */
  useEffect(() => {
    const timer = setInterval(() => setRushTime((prev) => prev + 1), 1);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (ms: number) => {
    const minutes = String(Math.floor(ms / 60000)).padStart(2, "0");
    const seconds = String(Math.floor((ms % 60000) / 1000)).padStart(2, "0");
    const centiseconds = String(Math.floor((ms % 1000) / 10)).padStart(2, "0");
    return `${minutes}:${seconds}:${centiseconds}`;
  };

  /* 初期カットイン演出 */
  useEffect(() => {
    let step = 0;
    const interval = setInterval(() => {
      setCutInStep(step);
      step++;
      if (step >= cutInTexts.length) clearInterval(interval);
    }, 800);

    const hideTimer = setTimeout(() => setShowInitialCutIn(false), cutInTexts.length * 800 + 1500);

    return () => {
      clearInterval(interval);
      clearTimeout(hideTimer);
    };
  }, []);

  /* 抽選ロジック */
  const getFinalResult = (): string[] => {
    const hitRate = 0.1;
    if (Math.random() < hitRate) {
      const hitNumber = numbers[Math.floor(Math.random() * numbers.length)];
      return [hitNumber, hitNumber, hitNumber];
    }
    return Array.from({ length: 3 }, () => numbers[Math.floor(Math.random() * numbers.length)]);
  };

  /* 回転ボタン押下時 */
  const spin = () => {
    if (rushCount <= 0 || spinning) return;
    setSpinning(true);

    //  保留関連処理
    /*
    setReserve((prev) => {
      const next = [...prev];
      const index = next.findIndex((r) => r);
      if (index !== -1) next[index] = false;
      return next;
    });
    */

    setRushCount((prev) => Math.max(prev - 1, 0));

    const finalResult = getFinalResult();
    const isAllSame = finalResult.every((num) => num === finalResult[0]);

    if (isAllSame) {
      setShowPokeun(true);
      setTimeout(() => setShowPokeun(false), 1000);

      setTimeout(() => {
        setReels(finalResult);
        setIsHit(true);
        setTimeout(() => setIsHit(false), 600);
        setSpinning(false);
      }, 1000);
    } else {
      setReels(finalResult);
      setSpinning(false);
    }

    // 🔹 保留補充も停止
    /*
    setTimeout(() => {
      setReserve((prev) => {
        const next = [...prev];
        const emptyIndex = next.lastIndexOf(false);
        if (emptyIndex !== -1) next[emptyIndex] = true;
        return next;
      });
    }, 2000);
    */
  };

  const getReelColor = (num: string) => {
    if (num === "7") return styles.reelGold;
    if (["1", "3", "5", "9"].includes(num)) return styles.reelRed;
    return styles.reelBlue;
  };

  return (
    <div className={styles.demoContainer}>
      <div className={styles.rushInfoLeft}>RUSH × 7</div>
      <div className={styles.rushTimeRight}>RUSH TIME：{formatTime(rushTime)}</div>
      <div className={styles.scoreLeft}>15000pt</div>

      {/* === カットイン演出 === */}
      <AnimatePresence>
        {showInitialCutIn && cutInStep < cutInTexts.length && (
          <motion.div
            key={cutInTexts[cutInStep]}
            className={styles.cutInText}
            initial={{ scale: 0.3, opacity: 0 }}
            animate={{ scale: 1.4, opacity: 1 }}
            exit={{ scale: 2, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {cutInTexts[cutInStep] === "強欲RUSH" && (
              <>
                <span className={styles.cutInTop}>強欲</span>
                <br />
                <span className={styles.cutInBottom}>RUSH</span>
              </>
            )}
            {cutInTexts[cutInStep] === "Re:ady" && (
              <>
                <span className={styles.readyMain}>Re:</span>
                <span className={styles.readySub}>ady</span>
              </>
            )}
            {cutInTexts[cutInStep] === "Go" && <span className={styles.goText}>GO</span>}
          </motion.div>
        )}
      </AnimatePresence>

      <h2 className={styles.rushTitle}><br>
      </br></h2>

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

      <div className={styles.buttonWrapper}>
        <PachinkoButton onHit={spin} isNextHit={isHit} />
        {showPokeun && <div className={styles.pokeunBubble}>ポキューン！</div>}
      </div>

      {/* 保留表示停止中 */}
      {/*
      <div className={styles.reserveContainer}>
        {reserve.map((active, i) => (
          <div
            key={i}
            className={`${styles.reserveBall} ${!active ? styles.reserveEmpty : ""}`}
          />
        ))}
      </div>
      */}
    </div>
  );
};

export default Demo;
