import React from "react";
import LightSection from "./LightSection";
import SectionDark from "./SectionDark";

function MainLayout(props) {
  return (
    <div>
      <SectionDark
        key={props.author[0].id}
        title={props.author[0].title}
        description={props.author[0].description}
        image={props.author[0].image}
        caption={props.author[0].caption}
      />
      <LightSection
        key={props.author[1].id}
        title={props.author[1].title}
        description={props.author[1].description}
        image={props.author[1].image}
        caption={props.author[1].caption}
      />
      <SectionDark
        key={props.author[2].id}
        title={props.author[2].title}
        description={props.author[2].description}
        image={props.author[2].image}
        caption={props.author[2].caption}
      />
      <LightSection
        key={props.author[3].id}
        title={props.author[3].title}
        description={props.author[3].description}
        image={props.author[3].image}
        caption={props.author[3].caption}
      />
      <SectionDark
        key={props.author[4].id}
        title={props.author[4].title}
        description={props.author[4].description}
        image={props.author[4].image}
        caption={props.author[4].caption}
      />
    </div>
  );
}

export default MainLayout;
