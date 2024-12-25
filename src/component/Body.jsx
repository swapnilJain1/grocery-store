import React from "react";
import DalItem from "./DalItem";
import Form from "./Form";

function Body({ searchQuery }) {
  const dals = [
    {
      id: 1,
      name: "Urad Dal",
      detail: "Rich in protein.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
      image: "https://gonefarmers.com/cdn/shop/products/image_401617b2-c70c-4c76-b0b0-629a3d93a4a7_580x.jpg?v=1583506997",
      price: 100,
    },
    {
      id: 2,
      name: "Toor Dal",
      detail: "Rich in carbs.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
      image: "https://5.imimg.com/data5/VU/FW/MY-17256771/toor-dal.jpg",
      price: 150,
    },
    {
      id: 3,
      name: "Masoor Dal",
      detail: "Rich in fibre. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
      image: "https://myfavouritepastime.com/wp-content/uploads/2018/10/img_16311.jpg?w=730",
      price: 200,
    },
    {
      id: 4,
      name: "Rice",
      detail: "Rich in protein.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7Gkvg83iTZxrgYjM_QRBFyPLikekI0438WA&s",
      price: 300,
    },
  ];

  const filteredDals = dals.filter((dal) =>
    dal?.name?.toLowerCase().includes(searchQuery)
  );

  return (
    <div
      style={{
        minHeight: "80vh",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        alignItems: "center",
      }}
    >
      <div
        style={{
          boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",
          padding: "20px",
          borderRadius: "10px",
          width: "63%",
        }}
      >
        {filteredDals.map((dal) => (
          <DalItem key={dal.id} {...dal} />
        ))}
      </div>
      <div
        style={{
          boxShadow:
            " rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;",
          padding: "20px",
          borderRadius: "10px",
          width: "60%",
        }}
      >
        <Form />
      </div>
    </div>
  );
}

export default Body;
