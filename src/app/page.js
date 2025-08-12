"use client";

import React from "react";
import { Button, Space, Typography } from "antd";

const { Title } = Typography;

export default function Home() {
  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        background:
          "linear-gradient(270deg, #87ceeb, #b3e5fc, #e1f5fe, #b3e5fc, #87ceeb)",
        backgroundSize: "1000% 1000%",
        animation: "gradientBG 40s ease infinite",
      }}
    >
      {/* Animasi CSS */}
      <style>{`
        @keyframes gradientBG {
          0% {background-position:0% 50%;}
          50% {background-position:100% 50%;}
          100% {background-position:0% 50%;}
        }
        @keyframes planeFly {
          0% { transform: translateX(-200px) translateY(0); }
          50% { transform: translateX(100vw) translateY(-50px); }
          100% { transform: translateX(-200px) translateY(0); }
        }
        @keyframes birdFly {
          0% { transform: translateX(-150px) translateY(0); }
          50% { transform: translateX(100vw) translateY(-20px); }
          100% { transform: translateX(-150px) translateY(0); }
        }
        @keyframes cloudMove {
          0% { transform: translateX(-250px); }
          100% { transform: translateX(100vw); }
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animated-title {
          display: inline-block;
          animation: fadeInUp 1s ease-out;
          transition: transform 0.3s ease, color 0.3s ease;
          cursor: pointer;
        }
        .animated-title:hover {
          transform: scale(1.1) rotate(-2deg);
          color: #ff6f61;
        }
        .animated-button {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .animated-button:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 15px rgba(0,0,0,0.2);
        }
        .animated-button:active {
          transform: scale(0.95);
        }
      `}</style>

      {/* Awan */}
      <img
        src="https://cdn-icons-png.flaticon.com/512/414/414927.png"
        alt="Cloud"
        style={{
          position: "absolute",
          top: "15%",
          left: "-200px",
          width: "150px",
          height: "90px",
          animation: "cloudMove 30s linear infinite",
          opacity: 0.8,
        }}
      />
      <img
        src="https://cdn-icons-png.flaticon.com/512/414/414927.png"
        alt="Cloud"
        style={{
          position: "absolute",
          top: "40%",
          left: "-300px",
          width: "200px",
          height: "120px",
          animation: "cloudMove 50s linear infinite",
          opacity: 0.7,
        }}
      />

      {/* Pesawat */}
      <img
        src="https://cdn-icons-png.flaticon.com/512/921/921490.png"
        alt="Plane"
        style={{
          position: "absolute",
          top: "25%",
          left: "-150px",
          width: "80px",
          height: "80px",
          animation: "planeFly 18s linear infinite",
          opacity: 0.9,
          zIndex: 2,
        }}
      />

      {/* Burung-burung */}
      <img
        src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
        alt="Birds"
        style={{
          position: "absolute",
          top: "10%",
          left: "-150px",
          width: "100px",
          height: "60px",
          animation: "birdFly 22s linear infinite",
          opacity: 0.9,
        }}
      />
      <img
        src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
        alt="Birds"
        style={{
          position: "absolute",
          top: "50%",
          left: "-150px",
          width: "100px",
          height: "60px",
          animation: "birdFly 28s linear infinite",
          opacity: 0.8,
        }}
      />

      {/* Card */}
      <div
        style={{
          padding: "40px",
          background: "rgba(255, 255, 255, 0.85)",
          borderRadius: "16px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
          zIndex: 3,
        }}
      >
        <Title
          level={3}
          className="animated-title"
          style={{ textAlign: "center", marginBottom: "20px" }}
        >
          Ant Design Button Variations
        </Title>

        <Space direction="vertical" size="middle" style={{ width: "100%" }}>
          <Button type="primary" block className="animated-button">
            Primary Button
          </Button>
          <Button type="primary" danger block className="animated-button">
            Primary Danger
          </Button>
          <Button type="default" block className="animated-button">
            Default Button
          </Button>
          <Button type="default" danger block className="animated-button">
            Default Danger
          </Button>
          <Button type="dashed" block className="animated-button">
            Dashed Button
          </Button>
          <Button type="dashed" ghost block className="animated-button">
            Dashed Ghost
          </Button>
          <Button type="text" block className="animated-button">
            Text Button
          </Button>
          <Button type="text" disabled block className="animated-button">
            Disabled Text
          </Button>
          <Button
            type="link"
            href="https://ant.design"
            target="_blank"
            block
            className="animated-button"
          >
            Link Button
          </Button>
          <Button
            type="primary"
            ghost
            danger
            style={{
              borderRadius: "50px",
              fontWeight: "bold",
              backgroundColor: "#ff6f61",
              border: "none",
            }}
            block
            className="animated-button"
          >
            Creative Ghost Danger
          </Button>
        </Space>
      </div>
    </div>
  );
}
