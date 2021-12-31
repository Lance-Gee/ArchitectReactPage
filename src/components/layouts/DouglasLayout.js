import React from "react";
import douglas_data from "../../data/DouglasData";
import LightSection from "./LightSection";
import SectionDark from "./SectionDark";

const douglasData = douglas_data;

function DouglasLayout() {
  return (
    <div>
      <SectionDark
        key={douglasData[0].id}
        title={douglasData[0].title}
        description={douglasData[0].description}
        image={douglasData[0].image}
        caption={douglasData[0].caption}
      />
      <LightSection
        key={douglasData[1].id}
        title={douglasData[1].title}
        description={douglasData[1].description}
        image={douglasData[1].image}
        caption={douglasData[1].caption}
      />
      <SectionDark
        key={douglasData[2].id}
        title={douglasData[2].title}
        description={douglasData[2].description}
        image={douglasData[2].image}
        caption={douglasData[2].caption}
      />
      <LightSection
        key={douglasData[3].id}
        title={douglasData[3].title}
        description={douglasData[3].description}
        image={douglasData[3].image}
        caption={douglasData[3].caption}
      />
      <SectionDark
        key={douglasData[4].id}
        title={douglasData[4].title}
        description={douglasData[4].description}
        image={douglasData[4].image}
        caption={douglasData[4].caption}
      />
    </div>
  );
}

export default DouglasLayout;
