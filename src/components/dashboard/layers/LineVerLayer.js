import React, { useCallback } from "react";
import Layer from "../styledcomponents/map/Layer";
import Line from "../styledcomponents/map/Line";
// import LineAni, { addAnimation } from "../styledcomponents/map/LineAni";

const LineVerLayer = ({ LineOptions }) => {
  const lineVerLayerRender = useCallback(() => {
    if (LineOptions) {
      let _LineOptions = LineOptions.filter((el) => el.rotate === "ver");
      return _LineOptions
        .filter((item) => item.in_status !== "disabled")
        .map((item, index) => {
          return (
            <Line
              lineOptions={item}
              className={`lineVer group:${item.group}-no:${item.number}-lineType:${item.line_type}-idx:${item.in_index}`}
              key={`lineVer-${item.line_type}` + item.in_index}
              id={`lineVer-id-${index}`}
            />
          );
        });
    }
  }, [LineOptions]);

  // const lineAniVerLayerRender = useCallback(() => {
  //   if (LineOptions) {
  //     let _LineOptions = LineOptions.filter((el) => el.rotate === "ver");
  //     return _LineOptions
  //       .filter(
  //         (item) =>
  //           item.in_status !== "disabled" && item.in_status !== "not installed"
  //       )
  //       .map((item, index) => {
  //         addAnimation(
  //           `lineMoving${item.line_index}`,
  //           `0%{
  //           opacity:0;
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
  //             left: ${item.x + item.width - 2}px;
  //           }`
  //         );
  //         return (
  //           <LineAni
  //             lineOptions={item}
  //             className={`lineAniVer group:${item.group}-no:${item.number}-lineType:${item.line_type}-idx:${item.in_index}`}
  //             key={`lineAniVer-${item.line_type}` + item.in_index}
  //           />
  //         );
  //       });
  //   }
  // }, [LineOptions]);

  return (
    <Layer className={"line-ver-layer"} layer={"line-ver-layer"}>
      {lineVerLayerRender()}
      {/* {lineAniVerLayerRender()} */}
    </Layer>
  );
};

export default React.memo(LineVerLayer);
