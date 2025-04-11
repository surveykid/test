/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Sp1IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Sp1Icon(props: Sp1IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M10 2l2 6h6l-5 4 2 6-5-3-5 3 2-6-5-4h6l2-6z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Sp1Icon;
/* prettier-ignore-end */
