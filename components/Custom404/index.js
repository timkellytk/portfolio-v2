import React from "react";
import Link from "next/link";
import ContentContainer from "../util/ContentContainer";
import Animate from "../util/Animate";
import style from "./404.module.css";

const Custom404 = () => (
  <ContentContainer>
    <Animate delayTitle>
      <h1 className={style.bigText}>Page Not Found</h1>
    </Animate>
    <Animate delayContent>
      <p>
        Back to <Link href="/">timkelly.dev</Link>
      </p>
    </Animate>
  </ContentContainer>
);

export default Custom404;
