import { style, keyframes } from "@vanilla-extract/css";

/* コンテナ */
export const demoContainer = style({
  textAlign: "center",
  padding: "2rem",
  color: "#fff",
  background: "#52c013f5",
  minHeight: "100vh",
  position: "relative",
  overflow: "hidden",
});

/* 左上のRUSH × 7 */
export const rushInfoLeft = style({
  position: "absolute",
  top: "120px",
  left: "450px",
  fontSize: "2.7rem",
  fontWeight: "900",
  color: "gold",
  fontFamily: '"Impact", "Arial Black", sans-serif',
  letterSpacing: "2px",
  textTransform: "uppercase",
  textShadow: `
    3px 3px 2px #000,
    0 0 5px #fff,
    0 0 10px #0a0900ff,
    0 0 20px #ffdd33,
    0 0 30px #110e01ff,
    0 0 40px #d4bc06ff
  `,
  zIndex: 30,
});

/* タイトル */
export const rushTitle = style({
  fontSize: "1.8rem",
  fontWeight: "bold",
  marginBottom: "1rem",
});

/* 右上のRUSH TIME */
export const rushTimeRight = style({
  position: "absolute",
  top: "120px",
  right: "330px",
  fontSize: "2.2rem",
  fontWeight: "900",
  color: "gold",
  fontFamily: '"Impact", "Arial Black", sans-serif',
  letterSpacing: "2px",
  textTransform: "uppercase",
  textShadow: `
    3px 3px 5px #000,
    -3px -3px 5px #333,
    0 0 10px rgba(255, 255, 255, 0.8),
    0 0 20px rgba(15, 13, 0, 0.7)
  `,
  zIndex: 30,
});

/* ラッシュ回数表示 */
export const rushDisplay = style({
  fontSize: "3.0rem",
  marginBottom: "1rem",
  textShadow: `
    3px 3px 5px #000,
    -3px -3px 5px #333,
    0 0 10px rgba(255, 255, 255, 0.8),
    0 0 20px rgba(255, 215, 0, 0.7)
  `,
});

export const label = style({
  marginRight: "0.5rem",
  color: "#ff4800e1",
});
export const count = style({
  color: "#ff4800e1",
  fontWeight: "bold",
});
export const unit = style({
  marginLeft: "0.25rem",
  color: "#ff4800e1",
});

/* エキドナ画像 */
export const echidonaImage = style({
  width: "20%",
  height: "20%",
  objectFit: "contain",
});

/* リール */
export const reels = style({
  display: "flex",
  justifyContent: "center",
  gap: "15rem",
  marginBottom: "1.5rem",
  position: "relative",
  bottom: "300px",
});

export const reel = style({
  width: "clamp(100px, 15vw, 120px)",
  height: "clamp(100px, 15vw, 120px)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "clamp(200px, 30vw, 400px)",
  fontWeight: "bold",
  transform: "scale(1.15) skewX(-6deg)",
  filter: "brightness(1.2)",
  textShadow: `
    3px 3px 5px #000,
    -3px -3px 5px #333,
    0 0 10px rgba(255, 255, 255, 0.8),
    0 0 20px rgba(255, 215, 0, 0.7)
  `,
  zIndex: 15,
  transition: "transform 0.2s ease, filter 0.2s ease",
});

/* リール色分け */
export const reelRed = style({
  color: "red",
  textShadow: `
    3px 3px 5px #000,
    -3px -3px 5px #300,
    0 0 5px #fff,
    0 0 10px #ff3333,
    0 0 20px #ff0000,
    0 0 30px #cc0000
  `,
});
export const reelBlue = style({
  color: "blue",
  textShadow: `
    3px 3px 5px #000,
    -3px -3px 5px #003,
    0 0 5px #fff,
    0 0 10px #3399ff,
    0 0 20px #0066ff,
    0 0 30px #0033cc
  `,
});
export const reelGold = style({
  color: "gold",
  textShadow: `
    3px 3px 5px #000,
    -3px -3px 5px #333,
    0 0 5px #fff,
    0 0 10px #ffd700,
    0 0 20px #ffdd33,
    0 0 30px #ffcc00,
    0 0 40px #ffdd33
  `,
});

/* 揃った時の拡大演出 */
const hitZoom = keyframes({
  "0%": { transform: "scale(1.15) skewX(-6deg)", zIndex: 1 },
  "50%": { transform: "scale(1.6) skewX(-6deg)", zIndex: 10 },
  "100%": { transform: "scale(1.15) skewX(-6deg)", zIndex: 1 },
});
export const reelHit = style({
  animation: `${hitZoom} 0.6s ease-out`,
});

/* ===== カットインテキスト ===== */
export const cutInText = style({
  position: "absolute",
  top: "35%",
  left: "300",
  transform: "translate(-50%, -50%)",
  fontSize: "8rem",
  fontWeight: "900",
  textAlign: "center",
  color: "#fff",
  letterSpacing: "0.1em",
  textShadow: `
    0 0 8px #fff,
    0 0 20px #ff0044,
    0 0 40px #ff3366,
    0 0 60px #ff99cc
  `,
  zIndex: 100,
  pointerEvents: "none",
  width: "100%",
});

/* === 強欲RUSH（左下斜体＋立体）=== */
export const cutInTop = style({
  display: "block",
  fontSize: "8rem",
  lineHeight: "0.01",
  color: "#ffffff",
  textShadow: `
    2px 2px 0 #b30000,
    4px 4px 0 #660000,
    -2px -2px 0 #ffcccc,
    0 0 5px rgba(0,0,0,0.7)
  `,
  transform: "skewX(-10deg) rotate(2deg) translateY(-8px)",
  transformOrigin: "center",
});

export const cutInBottom = style({
  display: "block",
  fontSize: "10rem",
  lineHeight: "0.01",
  color: "gold",
  textShadow: `
    2px 2px 0 #fff5cc,
    4px 4px 0 #b38600,
    6px 6px 0 #4d3b00,
    0 0 10px rgba(0,0,0,0.8)
  `,
  marginTop: "0.3em",
  transform: "skewX(-10deg) rotate(2deg) translateY(5px)",
  transformOrigin: "center",
});



/* === Re:ady シャープ紫立体 === */
export const readyMain = style({
  fontSize: "10rem",
  fontWeight: "900",
  color: "#8e3aff",
  textShadow: `
    2px 2px 0 #ffffff,
    4px 4px 0 #3d007a,
    -2px -2px 0 #d9b3ff,
    0 0 5px rgba(0,0,0,0.8)
  `,
});

export const readySub = style({
  fontSize: "10rem",
  fontWeight: "900",
  color: "#a04dff",
  textShadow: `
    2px 2px 0 #ffffff,
    4px 4px 0 #300070,
    -2px -2px 0 #e0ccff,
    0 0 5px rgba(0,0,0,0.7)
  `,
});

/* === Go!! シャープ紫メタリック === */
export const goText = style({
  display: "inline-block",
  fontSize: "13rem",
  fontWeight: "900",
  letterSpacing: "0.05em",
  color: "#7a00ff",
  textShadow: `
    3px 3px 0 #fff,
    5px 5px 0 #330066,
    -3px -3px 0 #d9b3ff,
    0 0 5px rgba(0,0,0,0.8)
  `,
  transform: "scale(1.25)",
});


/* 左下スコア */
export const scoreLeft = style({
  position: "absolute",
  bottom: "220px",
  left: "450px",
  fontSize: "4.0rem",
  fontWeight: "900",
  color: "gold",
  fontFamily: '"Impact", "Arial Black", sans-serif',
  letterSpacing: "2px",
  textTransform: "uppercase",
  textShadow: `
    3px 3px 2px #000,
    0 0 5px #fff,
    0 0 10px #ffd700,
    0 0 20px #ffdd33,
    0 0 30px #ffcc00,
    0 0 40px #ffdd33
  `,
  zIndex: 30,
});

/* ポキューン！吹き出し */
const pokeunPop = keyframes({
  "0%": { opacity: 0, transform: "scale(0.5) translate(0, 0)" },
  "30%": { opacity: 1, transform: "scale(1.2) translate(-10px, -40px)" },
  "60%": { transform: "scale(1) translate(-20px, -70px)" },
  "100%": { opacity: 0, transform: "scale(0.8) translate(-30px, -100px)" },
});
export const buttonWrapper = style({
  position: "relative",
  display: "inline-block",
});
export const pokeunBubble = style({
  position: "absolute",
  right: "0",
  top: "-50px",
  background: "linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)",
  color: "#fff",
  fontWeight: "bold",
  borderRadius: "20px",
  padding: "10px 18px",
  fontSize: "1.2rem",
  boxShadow: "0 0 12px rgba(255, 160, 200, 0.8)",
  animation: `${pokeunPop} 1s ease-out forwards`,
  pointerEvents: "none",
  transformOrigin: "bottom right",
});

const pulseSilverWhite = keyframes({
  "0%": {
    transform: "scale(1)",
    filter: "brightness(1)",
    boxShadow: "0 0 5px rgba(230,240,255,0.4)",
  },
  "50%": {
    transform: "scale(1.25)",
    filter: "brightness(1.6)",
    boxShadow: "0 0 25px rgba(250,250,255,0.9)",
  },
  "100%": {
    transform: "scale(1)",
    filter: "brightness(1)",
    boxShadow: "0 0 5px rgba(230,240,255,0.4)",
  },
});

export const reserveContainer = style({
  display: "flex",
  gap: "14px",
  position: "absolute",
  right: "500px",
  bottom: "230px",
  zIndex: 50,
});

export const reserveBall = style({
  width: "30px",
  height: "30px",
  borderRadius: "50%",
  border: "2px solid #cfd8dc",
  background:
    "radial-gradient(circle, #ffffff 0%, #e8f0ff 40%, #d0d6e2 70%, #aab0bb 100%)",
  boxShadow:
    "inset 0 0 8px #ffffff, 0 0 12px rgba(255,255,255,0.7), 0 0 30px rgba(200,220,255,0.4)",
  animation: `${pulseSilverWhite} 1.5s infinite ease-in-out`,
  transition: "opacity 0.3s, transform 0.3s",
});

export const reserveEmpty = style({
  opacity: 0.25,
  transform: "scale(0.8)",
  filter: "grayscale(0.8) brightness(0.7)",
  boxShadow: "none",
});