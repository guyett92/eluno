import React from "react";
import FadeIn from "react-fade-in";

const Feature = () => {
  return (
    <FadeIn delay={1500} className="section features">
      <div className="feature-section text-light feature-text">
        <h1 className="title">share your collection</h1>
        <h2 className="mb-2 pb-2">
          <b className="aqua-text">NFTs</b>. They are you. You are them. Your{" "}
          <b className="aqua-text">identity</b> is now in a jpeg. But you are
          not. Wait, are you? Is this the <b className="aqua-text">Oasis?</b>
        </h2>
        <h2 className="mb-2 pb-2">
          You grabbed your <b className="aqua-text">NFTs</b> because they speak
          to you. You
          {` wouldn't `}
          <b className="aqua-text">print</b> it on just anything would you? Cool
          Bored Ape thermo, Dad. See, that sounds lame. What doesn’t sound lame
          is your <b className="aqua-text">NFT</b> on a{" "}
          <b className="aqua-text">premium tee</b> or{" "}
          <b className="aqua-text">hoodie</b>.
        </h2>
        <h2 className="aqua-text pb-4">
          Bring your <b className="aqua-text">NFTs</b> into the physical world
          with <b>eluno</b>.
        </h2>
      </div>
    </FadeIn>
  );
};
export default Feature;
