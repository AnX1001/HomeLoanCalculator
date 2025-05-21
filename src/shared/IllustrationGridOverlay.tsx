import React from "react";
import style from "./illustrationGridOverlay.module.scss";


interface IllustrationGridOverlayProps {
  children?: React.ReactNode;
}

function IllustrationGridOverlay({ children }: IllustrationGridOverlayProps) {
  return (
    <div className={style["illustration-grid-overlay"]}>
      {children}
    </div>
  );
}

export default IllustrationGridOverlay;
