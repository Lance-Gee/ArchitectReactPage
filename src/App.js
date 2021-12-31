import "bootstrap/dist/css/bootstrap.min.css";
import Layout1 from "./components/layouts/Layout1";
import React, { useState } from "react";
import CarouselComponent from "./components/CarouselComponent";
import MainNavigationBar from "./components/MainNavigationBar";
import MainLayout from "./components/layouts/MainLayout";
import ArthurData from "./data/ArthurData";
import DouglasData from "./data/DouglasData";
import MosheData from "./data/MosheData";

function App() {
  const arthurData = ArthurData;
  const douglasData = DouglasData;
  const mosheData = MosheData;
  const [author, setAuthor] = useState(arthurData);

  const pickedArthur = () => {
    console.log("pickedArthur");
    setAuthor(arthurData);
  };

  const pickedDouglas = () => {
    console.log("pickedDouglas");
    setAuthor(douglasData);
  };

  const pickedMoshe = () => {
    console.log("pickedMoshe");
    setAuthor(mosheData);
  };

  return (
    <div>
      <MainNavigationBar />
      <CarouselComponent />
      <Layout1
        pickedArthur={pickedArthur}
        pickedDouglas={pickedDouglas}
        pickedMoshe={pickedMoshe}
      />
      <MainLayout author={author} />
    </div>
  );
}

export default App;
