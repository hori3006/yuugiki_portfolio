import { style, keyframes } from "@vanilla-extract/css";

/* コンテナ */
export const demoContainer = style({
  textAlign: "center",
  padding: "2rem",
  color: "#fff",
  background: "#5df505f5",
  minHeight: "100vh",
  position: "relative",
  overflow: "hidden",
});

/* タイトル */
export const rushTitle = style({
  fontSize: "1.8rem",
  fontWeight: "bold",
  marginBottom: "1rem",
});

/* ラッシュ表示 */
export const rushDisplay = style({
  fontSize: "1.5rem",
  marginBottom: "1rem",
});
export const label = style({ marginRight: "0.5rem", color: "#fc0707ff" });
export const count = style({ fontSize: "2rem", color: "#ff0000ff", fontWeight: "bold" });
export const unit = style({ marginLeft: "0.25rem", color: "#ff0000ff" });

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
  gap: "10rem",
  marginBottom: "1.5rem",
  position:'relative',
  bottom:'300px',
 
});

export const reel = style({
  width: "100px",
  height: "100px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "300px",
  fontWeight: "bold",
});

/* 色分け */
export const reelRed = style({
  color: "red",
  textShadow: `
    0 0 5px #fff,
    0 0 10px #ff3333,
    0 0 20px #ff0000,
    0 0 30px #cc0000
  `,
});
export const reelBlue = style({
  color: "blue",
  textShadow: `
    0 0 5px #fff,
    0 0 10px #3399ff,
    0 0 20px #0066ff,
    0 0 30px #0033cc
  `,
});
export const reelGold = style({
  color: "gold",
  textShadow: `
    0 0 5px #fff,
    0 0 10px #ffd700,
    0 0 20px #ffdd33,
    0 0 30px #ffcc00,
    0 0 40px #ffdd33
  `,
});

/* 揃った時の拡大演出 */
const hitZoom = keyframes({
  "0%": { transform: "scale(1)", zIndex: 1 },
  "50%": { transform: "scale(1.6)", zIndex: 10 },
  "100%": { transform: "scale(1)", zIndex: 1 },
});
export const reelHit = style({
  animation: `${hitZoom} 0.6s ease-out`,
});

/* ボタン */
export const rushButton = style({
  padding: "0.5rem 1.5rem",
  backgroundColor: "#00f7ff",
  color: "#000",
  fontWeight: "bold",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  ":hover": { backgroundColor: "#00c6cc" },
});

/* カットインテキスト */
export const cutInText = style({
  color: "gold",
  fontWeight: "bold",
  textShadow: `
    0 0 5px #fff,
    0 0 10px #ffd700,
    0 0 20px #ffdd33,
    0 0 30px #ffcc00,
    0 0 40px #ffdd33
  `,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  fontSize: "8rem",
  textAlign: "center",
  width: "100%",
});
