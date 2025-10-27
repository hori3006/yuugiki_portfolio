import { style, keyframes } from "@vanilla-extract/css";

/* フラッシュ */


/* 吹き出しアニメーション */
const popUp = keyframes({
  "0%": {
    transform: "translate(0, 0) scale(0.7)",
    opacity: 0,
  },
  "20%": {
    transform: "translate(-10px, -20px) scale(1.1)",
    opacity: 1,
  },
  "80%": {
    transform: "translate(30px, -80px) scale(1)",
    opacity: 1,
  },
  "100%": {
    transform: "translate(50px, -120px) scale(0.8)",
    opacity: 0,
  },
});

export const buttonWrapper = style({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const button = style({
  width: "180px",
  height: "180px",
  borderRadius: "50%",
  background: "radial-gradient(circle, #ff0000 40%, #660000)",
  border: "3px solid #fff",
  boxShadow: "0 0 25px rgba(255,0,0,0.8)",
  color: "#fff",
  fontSize: "2rem",
  fontWeight: "bold",
  cursor: "pointer",
  transition: "transform 0.1s ease-in-out",
 // animation: `${flash} 1s ease-in-out infinite, ${shake} 0.4s ease-in-out infinite`,
  ":active": {
    transform: "scale(0.95)",
    boxShadow: "0 0 40px rgba(255,255,255,0.9)",
  },
});

export const bubbleWrapper = style({
  position: "absolute",
  top: "0%",
  left: "50%",
  transform: "translateX(-50%)",
  pointerEvents: "none",
  zIndex: 5,
});

export const bubble = style({
  background: "#fff",
  color: "#ff0066",
  fontWeight: "bold",
  padding: "10px 18px",
  borderRadius: "20px",
  boxShadow: "0 0 10px rgba(255,0,100,0.4)",
  fontSize: "1.2rem",
  animation: `${popUp} 1.6s ease-out forwards`,
  position: "relative",
  "::after": {
    content: '""',
    position: "absolute",
    bottom: "-8px",
    left: "20px",
    borderWidth: "8px",
    borderStyle: "solid",
    borderColor: "#fff transparent transparent transparent",
  },
});
