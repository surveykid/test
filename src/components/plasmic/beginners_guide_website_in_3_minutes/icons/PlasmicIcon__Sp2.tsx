/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Sp2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Sp2Icon(props: Sp2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M8 0l2 6h6l-5 3 2 6-5-3-5 3 2-6-5-3h6l2-6z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Sp2Icon;
/* prettier-ignore-end */
