import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

function DalItem({ image, name, detail, price }) {
  const navigate = useNavigate();
  const buttonClick = () => {
    navigate("/contact-us");
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginBottom: "15px",
        gap: "26px",
        borderBottom: "1px solid #ccc",
        paddingBottom: "10px",
      }}
    >
      <TransformWrapper>
        <TransformComponent>
          <img
            src={image}
            alt={name}
            style={{ width: "250px", height: "200px", marginRight: "20px" }}
          />
        </TransformComponent>
      </TransformWrapper>
      <div style={{ width: "410px", lineHeight: "1.65" }}>
        <h2>{name}</h2>
        <p style={{ textAlign: "justify" }}>{detail}</p>
        <p style={{ fontWeight: "bold", color: "blue" }}>
          Our Price: Rs.{price}
        </p>
      </div>
      <Button variant="outlined" onClick={buttonClick}>
        Contact Us
      </Button>
    </div>
  );
}

export default DalItem;
