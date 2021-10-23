// const calLoc1LeftBridgeVerLine = () => {
//   let column = 0;
//   let row = 0;
//   let maxColumn = 5;
//   let maxRow = 6;
//   let x = 0;
//   let y = 0;
//   let increaseX = -57;
//   let increaseY = +33.5;
//   let spaceBetweenX = +69.9;
//   let spaceBetweenY = +34.5;

//   let startX = 1032;
//   let startY = 449;

//   let result = [];

//   x = startX;
//   y = startY;
//   for (row = 0; row < maxRow; row++) {
//     x = startX + row * spaceBetweenX;
//     // y = startY + row * spaceBetweenY;
//     result.push({
//       number: `[${row + 1}-${column + 1}]`,
//       group: "loc1-left",
//       in_index: `loc1-${200 * (row + 1)}-${column + 1}`,
//       line_index: `bridge-line-loc1-${200 * (row + 1)}-${column + 1}`,
//       x: x,
//       y: y,
//       width: 22 + row * 0.6,
//       in_local: "loc1",
//       in_pos_x: `${200 * (row + 1)}`,
//       in_number: `${column + 1}`,
//       rotate: "ver",
//       animation: "forward",
//       line_type: "bridge-line",
//       in_status: "disabled",
//     });
//   }

//   console.log("라인라인");
//   console.table(result);
//   return result;
// };

const Loc1LeftBridgeOptions = [
  {
    number: "[1-2]",
    group: "loc1-left",
    in_index: "loc1-200-2",
    line_index: "bridge-line-loc1-200-2",
    x: 1032,
    y: 449,
    width: 22,
    in_local: "loc1",
    in_pos_x: "200",
    in_number: "2",
    rotate: "ver",
    animation: "forward",
    line_type: "bridge-line",
    in_status: "disabled",
  },
  {
    number: "[2-2]",
    group: "loc1-left",
    in_index: "loc1-400-2",
    line_index: "bridge-line-loc1-400-2",
    x: 1101.9,
    y: 449,
    width: 22.6,
    in_local: "loc1",
    in_pos_x: "400",
    in_number: "2",
    rotate: "ver",
    animation: "forward",
    line_type: "bridge-line",
    in_status: "disabled",
  },
  {
    number: "[3-2]",
    group: "loc1-left",
    in_index: "loc1-600-2",
    line_index: "bridge-line-loc1-600-2",
    x: 1171.8,
    y: 449,
    width: 23.2,
    in_local: "loc1",
    in_pos_x: "600",
    in_number: "2",
    rotate: "ver",
    animation: "forward",
    line_type: "bridge-line",
    in_status: "disabled",
  },
  {
    number: "[4-2]",
    group: "loc1-left",
    in_index: "loc1-800-2",
    line_index: "bridge-line-loc1-800-2",
    x: 1241.7,
    y: 449,
    width: 23.8,
    in_local: "loc1",
    in_pos_x: "800",
    in_number: "2",
    rotate: "ver",
    animation: "forward",
    line_type: "bridge-line",
    in_status: "disabled",
  },
  {
    number: "[5-2]",
    group: "loc1-left",
    in_index: "loc1-1000-2",
    line_index: "bridge-line-loc1-1000-2",
    x: 1311.6,
    y: 449,
    width: 24.4,
    in_local: "loc1",
    in_pos_x: "1000",
    in_number: "2",
    rotate: "ver",
    animation: "forward",
    line_type: "bridge-line",
    in_status: "disabled",
  },
  {
    number: "[6-2]",
    group: "loc1-left",
    in_index: "loc1-1200-2",
    line_index: "bridge-line-loc1-1200-2",
    x: 1381.5,
    y: 449,
    width: 25,
    in_local: "loc1",
    in_pos_x: "1200",
    in_number: "2",
    rotate: "ver",
    animation: "forward",
    line_type: "bridge-line",
    in_status: "disabled",
  },
];
export default Loc1LeftBridgeOptions;
