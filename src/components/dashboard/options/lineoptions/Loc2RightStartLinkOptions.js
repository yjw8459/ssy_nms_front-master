// const calLoc2RightStartVerLine = () => {
//     let column = 0;
//     let row = 0;
//     let maxColumn = 5;
//     let maxRow = 11;
//     let x = 0;
//     let y = 0;
//     let increaseX = +57;
//     let increaseY = -33.5;
//     let spaceBetweenX = -35;
//     let spaceBetweenY = +60.5;

//     let startX = 738;
//     let startY = 506;

//     let result = [];

//     x = startX;
//     y = startY;
//     for (row = 0; row < maxRow; row++) {
//       x = startX + row * spaceBetweenX;
//       y = startY + row * spaceBetweenY;
//       result.push({
//         number: `[${row + 1}-${column + 1}]`,
//         group: "loc2-right",
//         in_index: `loc2-${200 * (row + 1)}-${column + 1}`,
//         line_index: `start-link-line-loc2-${200 * (row + 1)}-${column + 1}`,
//         x: x,
//         y: y,
//         width: 10,
//         in_local: "loc2",
//         in_pos_x: `${200 * (row + 1)}`,
//         in_number: `${column + 1}`,
//         rotate: "hor",
//         animation: "forward",
//         line_type: "start-link-line",
//         in_status: column >= 2 ? "disabled" : "disabled",
//       });
//     }
//     console.log("라인라인");
//     console.table(result);
//     return result;
//   };

//   useEffect(() => {
//     let result = calLoc2RightStartVerLine();
//     result = [...result, ...LineOptions];
//     setLineOptions(result);
//   }, []);

const Loc2RightStartLinkOptions = [
  {
    number: "[1-1]",
    group: "loc2-right",
    in_index: "loc2-200-1",
    line_index: "start-link-line-loc2-200-1",
    x: 738,
    y: 506,
    width: 10,
    in_local: "loc2",
    in_pos_x: "200",
    in_number: "1",
    rotate: "hor",
    animation: "forward",
    line_type: "start-link-line",
    in_status: "disabled",
  },
  {
    number: "[2-1]",
    group: "loc2-right",
    in_index: "loc2-400-1",
    line_index: "start-link-line-loc2-400-1",
    x: 703,
    y: 566.5,
    width: 10,
    in_local: "loc2",
    in_pos_x: "400",
    in_number: "1",
    rotate: "hor",
    animation: "forward",
    line_type: "start-link-line",
    in_status: "disabled",
  },
  {
    number: "[3-1]",
    group: "loc2-right",
    in_index: "loc2-600-1",
    line_index: "start-link-line-loc2-600-1",
    x: 668,
    y: 627,
    width: 10,
    in_local: "loc2",
    in_pos_x: "600",
    in_number: "1",
    rotate: "hor",
    animation: "forward",
    line_type: "start-link-line",
    in_status: "disabled",
  },
  {
    number: "[4-1]",
    group: "loc2-right",
    in_index: "loc2-800-1",
    line_index: "start-link-line-loc2-800-1",
    x: 633,
    y: 687.5,
    width: 10,
    in_local: "loc2",
    in_pos_x: "800",
    in_number: "1",
    rotate: "hor",
    animation: "forward",
    line_type: "start-link-line",
    in_status: "disabled",
  },
  {
    number: "[5-1]",
    group: "loc2-right",
    in_index: "loc2-1000-1",
    line_index: "start-link-line-loc2-1000-1",
    x: 598,
    y: 748,
    width: 10,
    in_local: "loc2",
    in_pos_x: "1000",
    in_number: "1",
    rotate: "hor",
    animation: "forward",
    line_type: "start-link-line",
    in_status: "disabled",
  },
  {
    number: "[6-1]",
    group: "loc2-right",
    in_index: "loc2-1200-1",
    line_index: "start-link-line-loc2-1200-1",
    x: 563,
    y: 808.5,
    width: 10,
    in_local: "loc2",
    in_pos_x: "1200",
    in_number: "1",
    rotate: "hor",
    animation: "forward",
    line_type: "start-link-line",
    in_status: "disabled",
  },
  {
    number: "[7-1]",
    group: "loc2-right",
    in_index: "loc2-1400-1",
    line_index: "start-link-line-loc2-1400-1",
    x: 528,
    y: 869,
    width: 10,
    in_local: "loc2",
    in_pos_x: "1400",
    in_number: "1",
    rotate: "hor",
    animation: "forward",
    line_type: "start-link-line",
    in_status: "disabled",
  },
  {
    number: "[8-1]",
    group: "loc2-right",
    in_index: "loc2-1600-1",
    line_index: "start-link-line-loc2-1600-1",
    x: 493,
    y: 929.5,
    width: 10,
    in_local: "loc2",
    in_pos_x: "1600",
    in_number: "1",
    rotate: "hor",
    animation: "forward",
    line_type: "start-link-line",
    in_status: "disabled",
  },
  {
    number: "[9-1]",
    group: "loc2-right",
    in_index: "loc2-1800-1",
    line_index: "start-link-line-loc2-1800-1",
    x: 458,
    y: 990,
    width: 10,
    in_local: "loc2",
    in_pos_x: "1800",
    in_number: "1",
    rotate: "hor",
    animation: "forward",
    line_type: "start-link-line",
    in_status: "disabled",
  },
  {
    number: "[10-1]",
    group: "loc2-right",
    in_index: "loc2-2000-1",
    line_index: "start-link-line-loc2-2000-1",
    x: 423,
    y: 1050.5,
    width: 10,
    in_local: "loc2",
    in_pos_x: "2000",
    in_number: "1",
    rotate: "hor",
    animation: "forward",
    line_type: "start-link-line",
    in_status: "disabled",
  },
  {
    number: "[11-1]",
    group: "loc2-right",
    in_index: "loc2-2200-1",
    line_index: "start-link-line-loc2-2200-1",
    x: 388,
    y: 1111,
    width: 10,
    in_local: "loc2",
    in_pos_x: "2200",
    in_number: "1",
    rotate: "hor",
    animation: "forward",
    line_type: "start-link-line",
    in_status: "disabled",
  },
];

export default Loc2RightStartLinkOptions;
