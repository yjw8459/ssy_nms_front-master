// const calLoc1LeftStartShortLinkVerLine = () => {
//     let column = 0;
//     let row = 0;
//     let maxColumn = 5;
//     let maxRow = 6;
//     let x = 0;
//     let y = 0;
//     let increaseX = -57;
//     let increaseY = +33.5;
//     let spaceBetweenX = +35;
//     let spaceBetweenY = -60.5;

//     let startX = 847;
//     let startY = 330;

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
//         line_index: `start-short-link-line-loc1-${200 * (row + 1)}-${
//           column + 1
//         }`,
//         x: x,
//         y: y,
//         width: 10,
//         in_local: "loc1",
//         in_pos_x: `${200 * (row + 1)}`,
//         in_number: `${column + 1}`,
//         rotate: "hor",
//         animation: "forward",
//         line_type: "start-short-link-line",
//         in_status: "disabled",
//       });
//     }
//     console.log("라인라인");
//     console.table(result);
//     return result;
//   };

const Loc1LeftStartShortLinkOptions = [
  {
    number: "[1-1]",
    group: "loc1-left",
    in_index: "loc1-200-1",
    line_index: "start-short-link-line-loc1-200-1",
    x: 847,
    y: 330,
    width: 10,
    in_local: "loc1",
    in_pos_x: "200",
    in_number: "1",
    rotate: "hor",
    animation: "forward",
    line_type: "start-short-link-line",
    in_status: "disabled",
  },
  {
    number: "[2-1]",
    group: "loc1-left",
    in_index: "loc1-400-1",
    line_index: "start-short-link-line-loc1-400-1",
    x: 882,
    y: 269.5,
    width: 10,
    in_local: "loc1",
    in_pos_x: "400",
    in_number: "1",
    rotate: "hor",
    animation: "forward",
    line_type: "start-short-link-line",
    in_status: "disabled",
  },
  {
    number: "[3-1]",
    group: "loc1-left",
    in_index: "loc1-600-1",
    line_index: "start-short-link-line-loc1-600-1",
    x: 917,
    y: 209,
    width: 10,
    in_local: "loc1",
    in_pos_x: "600",
    in_number: "1",
    rotate: "hor",
    animation: "forward",
    line_type: "start-short-link-line",
    in_status: "disabled",
  },
  {
    number: "[4-1]",
    group: "loc1-left",
    in_index: "loc1-800-1",
    line_index: "start-short-link-line-loc1-800-1",
    x: 952,
    y: 148.5,
    width: 10,
    in_local: "loc1",
    in_pos_x: "800",
    in_number: "1",
    rotate: "hor",
    animation: "forward",
    line_type: "start-short-link-line",
    in_status: "disabled",
  },
  {
    number: "[5-1]",
    group: "loc1-left",
    in_index: "loc1-1000-1",
    line_index: "start-short-link-line-loc1-1000-1",
    x: 987,
    y: 88,
    width: 10,
    in_local: "loc1",
    in_pos_x: "1000",
    in_number: "1",
    rotate: "hor",
    animation: "forward",
    line_type: "start-short-link-line",
    in_status: "disabled",
  },
  {
    number: "[6-1]",
    group: "loc1-left",
    in_index: "loc1-1200-1",
    line_index: "start-short-link-line-loc1-1200-1",
    x: 1022,
    y: 27.5,
    width: 10,
    in_local: "loc1",
    in_pos_x: "1200",
    in_number: "1",
    rotate: "hor",
    animation: "forward",
    line_type: "start-short-link-line",
    in_status: "disabled",
  },
];
export default Loc1LeftStartShortLinkOptions;
