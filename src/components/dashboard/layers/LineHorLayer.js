import React, { useCallback, useEffect } from "react";
import Layer from "../styledcomponents/map/Layer";
import Line from "../styledcomponents/map/Line";
// import LineAni, { addAnimation } from "../styledcomponents/map/LineAni";

const LineHorLayer = ({ LineOptions }) => {
  const lineHorLayerRender = useCallback(() => {
    if (LineOptions) {
      let _LineOptions = LineOptions.filter((el) => el.rotate === "hor");
      return _LineOptions
        .filter((item) => item.in_status !== "disabled")
        .map((item, index) => {
          return (
            <Line
              lineOptions={item}
              className={`lineHor  group:${item.group}-no:${item.number}-lineType:${item.line_type}-idx:${item.in_index} ${item.in_index} 
            ${item.in_status}`}
              // className={`lineHor  group:${item.group}-no:${item.number}-lineType:${item.line_type}-idx:${item.in_index} `}
              key={`lineHor-${item.line_type}` + item.in_index}
              // ${} item.in_status === "open" ? "open" : "closed" }
              id={`lineHor-id-${index}`}
            />
          );
        });
    }
  }, [LineOptions]);

  // const lineAniHorLayerRender = useCallback(() => {
  //   if (LineOptions) {
  //     let _LineOptions = LineOptions.filter((el) => el.rotate === "hor");
  //     return _LineOptions
  //       .filter(
  //         (item) =>
  //           item.in_status !== "disabled" && item.in_status !== "not installed"
  //       )
  //       .map((item, index) => {
  //         addAnimation(
  //           `lineMoving${item.line_index}`,
  //           `0%{
  //           opacity:0.0;
  //         }
  //         25%{
  //           opacity:0.1;
  //         }
  //         50%{
  //           opacity:0.2;
  //         }
  //         75%{
  //           opacity:0.1;
  //         }
  //         100% {
  //           opacity:0;
  //           left: ${item.x + item.width - 2}px;
  //         }`
  //         );
  //         return (
  //           <LineAni
  //             lineOptions={item}
  //             className={`lineAniHor  group:${item.group}-no:${item.number}-lineType:${item.line_type}-idx:${item.in_index}`}
  //             key={`lineAniHor-${item.line_type}` + item.in_index}
  //           />
  //         );
  //       });
  //   }
  // }, [LineOptions]);

  // useEffect(() => {
  //   return () => {
  //     let dynamicStyles = null;
  //     dynamicStyles = document.createElement("style");
  //     dynamicStyles.sheet.removeRule();
  //   };
  // });
  return (
    <Layer className={"line-hor-layer"} layer={"line-hor-layer"}>
      {lineHorLayerRender()}
      {/* {lineAniHorLayerRender()} */}
    </Layer>
  );
};

export default React.memo(LineHorLayer);
