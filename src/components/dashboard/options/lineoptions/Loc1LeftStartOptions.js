// const calLoc1LeftStartVerLine = () => {
//     let column = 0;
//     let row = 0;
//     let maxColumn = 5;
//     let maxRow = 7;
//     let x = 0;
//     let y = 0;
//     let increaseX = +57;
//     let increaseY = -33.5;
//     let spaceBetweenX = 60;
//     let spaceBetweenY = 0;

//     let startX = 897;
//     let startY = 442;

//     let result = [];

//     x = startX;
//     y = startY;
//     for (row = 0; row < maxRow; row++) {
//       x = startX + row * spaceBetweenX;
//       y = startY + row * spaceBetweenY;
//       result.push({
//         number: `[${row + 1}-${column + 1}]`,
//         group: "loc1-left",
//         in_index: `loc1-${200 * (row + 1)}-${column + 1}`,
//         line_index: `start-line-loc1-${200 * (row + 1)}-${column + 1}`,
//         x: (x = x + 70),
//         y: y,
//         width: 70,
//         in_local: "loc1",
//         in_pos_x: `${200 * (row + 1)}`,
//         in_number: `${column + 1}`,
//         rotate: "ver",
//         animation: "forward ",
//         line_type: "start-line",
//         in_status: "disabled",
//       });
//     }
//     console.log("라인라인");
//     console.table(result);
//     return result;
//   };

const Loc1LeftStartOptions = [
  {
    number: "[1-1]",
    group: "loc1-left",
    in_index: "loc1-200-1",
    line_index: "start-line-loc1-200-1",
    x: 958,
    y: 442,
    width: 70,
    in_local: "loc1",
    in_pos_x: "200",
    in_number: "1",
    rotate: "ver",
    animation: "forward",
    line_type: "start-line",
    in_status: "disabled",
  },
  {
    number: "[2-1]",
    group: "loc1-left",
    in_index: "loc1-400-1",
    line_index: "start-line-loc1-400-1",
    x: 1028,
    y: 442,
    width: 70,
    in_local: "loc1",
    in_pos_x: "400",
    in_number: "1",
    rotate: "ver",
    animation: "forward",
    line_type: "start-line",
    in_status: "disabled",
  },
  {
    number: "[3-1]",
    group: "loc1-left",
    in_index: "loc1-600-1",
    line_index: "start-line-loc1-600-1",
    x: 1098,
    y: 442,
    width: 70,
    in_local: "loc1",
    in_pos_x: "600",
    in_number: "1",
    rotate: "ver",
    animation: "forward",
    line_type: "start-line",
    in_status: "disabled",
  },
  {
    number: "[4-1]",
    group: "loc1-left",
    in_index: "loc1-800-1",
    line_index: "start-line-loc1-800-1",
    x: 1168,
    y: 442,
    width: 70,
    in_local: "loc1",
    in_pos_x: "800",
    in_number: "1",
    rotate: "ver",
    animation: "forward",
    line_type: "start-line",
    in_status: "disabled",
  },
  {
    number: "[5-1]",
    group: "loc1-left",
    in_index: "loc1-1000-1",
    line_index: "start-line-loc1-1000-1",
    x: 1238,
    y: 442,
    width: 70,
    in_local: "loc1",
    in_pos_x: "1000",
    in_number: "1",
    rotate: "ver",
    animation: "forward",
    line_type: "start-line",
    in_status: "disabled",
  },
  {
    number: "[6-1]",
    group: "loc1-left",
    in_index: "loc1-1200-1",
    line_index: "start-line-loc1-1200-1",
    x: 1308,
    y: 442,
    width: 70,
    in_local: "loc1",
    in_pos_x: "1200",
    in_number: "1",
    rotate: "ver",
    animation: "forward",
    line_type: "start-line",
    in_status: "disabled",
  },
  {
    number: "[7-1]",
    group: "loc1-left",
    in_index: "loc1-1400-1",
    line_index: "start-line-loc1-1400-1",
    x: 1378,
    y: 442,
    width: 70,
    in_local: "loc1",
    in_pos_x: "1400",
    in_number: "1",
    rotate: "ver",
    animation: "forward",
    line_type: "last-start-line",
    in_status: "disabled",
  },
];
export default Loc1LeftStartOptions;
