import { style, keyframes } from "@vanilla-extract/css";

export const hero = style({
  width: "100%",
  height: "100%",
  paddingTop: "50px",
  overflowX: "hidden",
});

export const heroProfile = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",
   fontSize: "1.2rem",
});


export const profileImage = style({
  width: "150px",
  height: "auto",
  borderRadius: "50%",
  boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
});

export const heroMessage = style({
  padding: "0 1.5rem",
  lineHeight: 1.8,
  textAlign: "center",
});

export const heroReason= style({
  paddingTop: "50px",
  fontSize: "1.2rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
});

export const primaryButton = style({
  display: "inline-block",
  backgroundColor: "#f5f8f4ff",
  color: "#222",
  padding: "0.6rem 1.2rem",
  borderRadius: "8px",
  textDecoration: "none",
  fontWeight: "bold",
  transition: "background-color 0.3s ease",
  ":hover": {
    backgroundColor: "#4ad004",
  },
});

export const projectPreview = style({
  width: "100%",
  overflowX: "hidden",
});

export const projectPassage = style({
  textAlign: "center",
  fontSize: "1.2rem",
  margin: "2rem 0",
});

export const cardText = style({
  fontSize: "1.2rem",
  color: "#0f0000ff",
  textAlign: "center",
  padding: "0 1rem",
});

// 下向き矢印アニメーション
const bounceKeyframes = keyframes({
  "0%, 100%": { transform: "translateY(0)" },
  "50%": { transform: "translateY(10px)" },
});

export const downIcon = style({
  display: "block",
  margin: "1rem auto",
  fontSize: "3rem",
  color: "#070f01ff",
  animation: `${bounceKeyframes} 2s infinite`,
});

export const cards = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "2rem",
  justifyItems: "center",
  padding: "2rem",
  boxSizing: "border-box",
});

export const card = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "30px",
  backgroundColor: "#09bbf1ff",
  borderRadius: "20px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  textAlign: "center",
  transition: "transform 0.2s ease",
  ":hover": {
    transform: "translateY(-5px)",
  },
});

export const demoImage = style({
  width: "80%",
  maxWidth: "100%",
  height: "auto",
  borderRadius: "8px",
  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
});

export const simulatorImage = style({
  width: "80%",
  maxWidth: "100%",
  height: "auto",
  borderRadius: "8px",
  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
});
