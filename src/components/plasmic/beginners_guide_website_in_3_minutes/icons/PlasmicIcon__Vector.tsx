/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type VectorIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function VectorIcon(props: VectorIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 40 40"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M17.5 5c1.667-6.667 3.333-6.667 5 0 1.667 6.667 5.833 10.833 12.5 12.5 6.667 1.667 6.667 3.333 0 5-6.667 1.667-10.833 5.833-12.5 12.5-1.667 6.667-3.333 6.667-5 0-1.667-6.667-5.833-10.833-12.5-12.5-6.667-1.667-6.667-3.333 0-5 6.667-1.667 10.833-5.833 12.5-12.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default VectorIcon;
/* prettier-ignore-end */
