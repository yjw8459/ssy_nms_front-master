// const calLoc1LeftLinkVerLine = () => {
//     let column = 0;
//     let row = 0;
//     let maxColumn = 5;
//     let maxRow = 6;
//     let x = 0;
//     let y = 0;
//     let increaseX = +34.3;
//     let increaseY = +59.7;
//     let spaceBetweenX = +69.5;
//     let spaceBetweenY = 0;

//     let startX = 1056;
//     let startY = 465;

//     let result = [];

//     x = startX;
//     y = startY;
//     for (row = 0; row < maxRow; row++) {
//       x = startX + row * spaceBetweenX;
//       y = startY + row * spaceBetweenY;
//       for (column = 1; column < maxColumn; column++) {
//         result.push({
//           number: `[${row + 1}-${column + 1}]`,
//           group: "loc1-left",
//           in_index: `loc1-${200 * (row + 1)}-${column + 1}`,
//           line_index: `link-line-loc1-${200 * (row + 1)}-${column + 1}`,
//           x: column === 0 ? x : (x += increaseX),
//           y: column === 0 ? y : (y += increaseY),
//           width: 10,
//           in_local: "loc1",
//           in_pos_x: `${200 * (row + 1)}`,
//           in_number: `${column + 1}`,
//           rotate: "ver",
//           animation: "reverse",
//           line_type: "link-line",
//           in_status: "disabled",
//         });
//       }
//     }
//     console.log("라인라인");
//     console.table(result);
//     return result;
//   };

const Loc1LeftLinkOptions = [
  {
    number: "[1-2]",
    group: "loc1-left",
    in_index: "loc1-200-2",
    line_index: "link-line-loc1-200-2",
    x: 1090.3,
    y: 524.7,
    width: 10,
    in_local: "loc1",
    in_pos_x: "200",
    in_number: "2",
    rotate: "ver",
    animation: "reverse",
    line_type: "link-line",
    in_status: "disabled",
  },
  {
    number: "[1-3]",
    group: "loc1-left",
    in_index: "loc1-200-3",
    line_index: "link-line-loc1-200-3",
    x: 1124.6,
    y: 584.4,
    width: 10,
    in_local: "loc1",
    in_pos_x: "200",
    in_number: "3",
    rotate: "ver",
    animation: "reverse",
    line_type: "link-line",
    in_status: "disabled",
  },
  {
    number: "[1-4]",
    group: "loc1-left",
    in_index: "loc1-200-4",
    line_index: "link-line-loc1-200-4",
    x: 1158.9,
    y: 644.1,
    width: 10,
    in_local: "loc1",
    in_pos_x: "200",
    in_number: "4",
    rotate: "ver",
    animation: "reverse",
    line_type: "link-line",
    in_status: "disabled",
  },
  {
    number: "[1-5]",
    group: "loc1-left",
    in_index: "loc1-200-5",
    line_index: "link-line-loc1-200-5",
    x: 1193.2,
    y: 703.8,
    width: 10,
    in_local: "loc1",
    in_pos_x: "200",
    in_number: "5",
    rotate: "ver",
    animation: "reverse",
    line_type: "link-line",
    in_status: "disabled",
  },
  {
    number: "[2-2]",
    group: "loc1-left",
    in_index: "loc1-400-2",
    line_index: "link-line-loc1-400-2",
    x: 1159.8,
    y: 524.7,
    width: 10,
    in_local: "loc1",
    in_pos_x: "400",
    in_number: "2",
    rotate: "ver",
    animation: "reverse",
    line_type: "link-line",
    in_status: "disabled",
  },
  {
    number: "[2-3]",
    group: "loc1-left",
    in_index: "loc1-400-3",
    line_index: "link-line-loc1-400-3",
    x: 1194.1,
    y: 584.4,
    width: 10,
    in_local: "loc1",
    in_pos_x: "400",
    in_number: "3",
    rotate: "ver",
    animation: "reverse",
    line_type: "link-line",
    in_status: "disabled",
  },
  {
    number: "[2-4]",
    group: "loc1-left",
    in_index: "loc1-400-4",
    line_index: "link-line-loc1-400-4",
    x: 1228.4,
    y: 644.1,
    width: 10,
    in_local: "loc1",
    in_pos_x: "400",
    in_number: "4",
    rotate: "ver",
    animation: "reverse",
    line_type: "link-line",
    in_status: "disabled",
  },
  {
    number: "[2-5]",
    group: "loc1-left",
    in_index: "loc1-400-5",
    line_index: "link-line-loc1-400-5",
    x: 1262.7,
    y: 703.8,
    width: 10,
    in_local: "loc1",
    in_pos_x: "400",
    in_number: "5",
    rotate: "ver",
    animation: "reverse",
    line_type: "link-line",
    in_status: "disabled",
  },
  {
    number: "[3-2]",
    group: "loc1-left",
    in_index: "loc1-600-2",
    line_index: "link-line-loc1-600-2",
    x: 1229.3,
    y: 524.7,
    width: 10,
    in_local: "loc1",
    in_pos_x: "600",
    in_number: "2",
    rotate: "ver",
    animation: "reverse",
    line_type: "link-line",
    in_status: "disabled",
  },
  {
    number: "[3-3]",
    group: "loc1-left",
    in_index: "loc1-600-3",
    line_index: "link-line-loc1-600-3",
    x: 1263.6,
    y: 584.4,
    width: 10,
    in_local: "loc1",
    in_pos_x: "600",
    in_number: "3",
    rotate: "ver",
    animation: "reverse",
    line_type: "link-line",
    in_status: "disabled",
  },
  {
    number: "[3-4]",
    group: "loc1-left",
    in_index: "loc1-600-4",
    line_index: "link-line-loc1-600-4",
    x: 1297.9,
    y: 644.1,
    width: 10,
    in_local: "loc1",
    in_pos_x: "600",
    in_number: "4",
    rotate: "ver",
    animation: "reverse",
    line_type: "link-line",
    in_status: "disabled",
  },
  {
    number: "[3-5]",
    group: "loc1-left",
    in_index: "loc1-600-5",
    line_index: "link-line-loc1-600-5",
    x: 1332.2,
    y: 703.8,
    width: 10,
    in_local: "loc1",
    in_pos_x: "600",
    in_number: "5",
    rotate: "ver",
    animation: "reverse",
    line_type: "link-line",
    in_status: "disabled",
  },
  {
    number: "[4-2]",
    group: "loc1-left",
    in_index: "loc1-800-2",
    line_index: "link-line-loc1-800-2",
    x: 1298.8,
    y: 524.7,
    width: 10,
    in_local: "loc1",
    in_pos_x: "800",
    in_number: "2",
    rotate: "ver",
    animation: "reverse",
    line_type: "link-line",
    in_status: "disabled",
  },
  {
    number: "[4-3]",
    group: "loc1-left",
    in_index: "loc1-800-3",
    line_index: "link-line-loc1-800-3",
    x: 1333.1,
    y: 584.4,
    width: 10,
    in_local: "loc1",
    in_pos_x: "800",
    in_number: "3",
    rotate: "ver",
    animation: "reverse",
    line_type: "link-line",
    in_status: "disabled",
  },
  {
    number: "[4-4]",
    group: "loc1-left",
    in_index: "loc1-800-4",
    line_index: "link-line-loc1-800-4",
    x: 1367.4,
    y: 644.1,
    width: 10,
    in_local: "loc1",
    in_pos_x: "800",
    in_number: "4",
    rotate: "ver",
    animation: "reverse",
    line_type: "link-line",
    in_status: "disabled",
  },
  {
    number: "[4-5]",
    group: "loc1-left",
    in_index: "loc1-800-5",
    line_index: "link-line-loc1-800-5",
    x: 1401.7,
    y: 703.8,
    width: 10,
    in_local: "loc1",
    in_pos_x: "800",
    in_number: "5",
    rotate: "ver",
    animation: "reverse",
    line_type: "link-line",
    in_status: "disabled",
  },
  {
    number: "[5-2]",
    group: "loc1-left",
    in_index: "loc1-1000-2",
    line_index: "link-line-loc1-1000-2",
    x: 1368.3,
    y: 524.7,
    width: 10,
    in_local: "loc1",
    in_pos_x: "1000",
    in_number: "2",
    rotate: "ver",
    animation: "reverse",
    line_type: "link-line",
    in_status: "disabled",
  },
  {
    number: "[5-3]",
    group: "loc1-left",
    in_index: "loc1-1000-3",
    line_index: "link-line-loc1-1000-3",
    x: 1402.6,
    y: 584.4,
    width: 10,
    in_local: "loc1",
    in_pos_x: "1000",
    in_number: "3",
    rotate: "ver",
    animation: "reverse",
    line_type: "link-line",
    in_status: "disabled",
  },
  {
    number: "[5-4]",
    group: "loc1-left",
    in_index: "loc1-1000-4",
    line_index: "link-line-loc1-1000-4",
    x: 1436.9,
    y: 644.1,
    width: 10,
    in_local: "loc1",
    in_pos_x: "1000",
    in_number: "4",
    rotate: "ver",
    animation: "reverse",
    line_type: "link-line",
    in_status: "disabled",
  },
  {
    number: "[5-5]",
    group: "loc1-left",
    in_index: "loc1-1000-5",
    line_index: "link-line-loc1-1000-5",
    x: 1471.2,
    y: 703.8,
    width: 10,
    in_local: "loc1",
    in_pos_x: "1000",
    in_number: "5",
    rotate: "ver",
    animation: "reverse",
    line_type: "link-line",
    in_status: "disabled",
  },
  {
    number: "[6-2]",
    group: "loc1-left",
    in_index: "loc1-1200-2",
    line_index: "link-line-loc1-1200-2",
    x: 1437.8,
    y: 524.7,
    width: 10,
    in_local: "loc1",
    in_pos_x: "1200",
    in_number: "2",
    rotate: "ver",
    animation: "reverse",
    line_type: "link-line",
    in_status: "disabled",
  },
  {
    number: "[6-3]",
    group: "loc1-left",
    in_index: "loc1-1200-3",
    line_index: "link-line-loc1-1200-3",
    x: 1472.1,
    y: 584.4,
    width: 10,
    in_local: "loc1",
    in_pos_x: "1200",
    in_number: "3",
    rotate: "ver",
    animation: "reverse",
    line_type: "link-line",
    in_status: "disabled",
  },
  {
    number: "[6-4]",
    group: "loc1-left",
    in_index: "loc1-1200-4",
    line_index: "link-line-loc1-1200-4",
    x: 1506.4,
    y: 644.1,
    width: 10,
    in_local: "loc1",
    in_pos_x: "1200",
    in_number: "4",
    rotate: "ver",
    animation: "reverse",
    line_type: "link-line",
    in_status: "disabled",
  },
  {
    number: "[6-5]",
    group: "loc1-left",
    in_index: "loc1-1200-5",
    line_index: "link-line-loc1-1200-5",
    x: 1540.7,
    y: 703.8,
    width: 10,
    in_local: "loc1",
    in_pos_x: "1200",
    in_number: "5",
    rotate: "ver",
    animation: "reverse",
    line_type: "link-line",
    in_status: "disabled",
  },
];
export default Loc1LeftLinkOptions;
