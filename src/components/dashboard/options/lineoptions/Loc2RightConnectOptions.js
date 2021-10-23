// const calLoc2RightStartVerLine = () => {
//     let column = 0;
//     let row = 0;
//     let maxColumn = 5;
//     let maxRow = 11;
//     let x = 0;
//     let y = 0;
//     let increaseX = +57;
//     let increaseY = -33.5;
//     let spaceBetweenX = -34.5;
//     let spaceBetweenY = +59.8;

//     let startX = 755;
//     let startY = 487;

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
//         line_index: `connect-loc2-${200 * (row + 1)}-${column + 1}`,
//         x: x,
//         y: y,
//         width: 90,
//         in_local: "loc2",
//         in_pos_x: `${200 * (row + 1)}`,
//         in_number: `${column + 1}`,
//         rotate: "hor",
//         animation: "forward",
//         line_type: "connect-line",
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

const Loc2RightConnectOptions = [
  {
    number: "[1-1]",
    group: "loc2-right",
    in_index: "loc2-200-2",
    line_index: "connect-loc2-200-2",
    x: 755,
    y: 487,
    width: 90,
    in_local: "loc2",
    in_pos_x: "200",
    in_number: "2",
    rotate: "hor",
    animation: "forward",
    line_type: "connect-line",
    in_status: "disabled",
  },
  {
    number: "[2-1]",
    group: "loc2-right",
    in_index: "loc2-400-2",
    line_index: "connect-loc2-400-2",
    x: 720.5,
    y: 546.8,
    width: 90,
    in_local: "loc2",
    in_pos_x: "400",
    in_number: "2",
    rotate: "hor",
    animation: "forward",
    line_type: "connect-line",
    in_status: "disabled",
  },
  {
    number: "[3-1]",
    group: "loc2-right",
    in_index: "loc2-600-2",
    line_index: "connect-loc2-600-2",
    x: 686,
    y: 606.6,
    width: 90,
    in_local: "loc2",
    in_pos_x: "600",
    in_number: "2",
    rotate: "hor",
    animation: "forward",
    line_type: "connect-line",
    in_status: "disabled",
  },
  {
    number: "[4-1]",
    group: "loc2-right",
    in_index: "loc2-800-2",
    line_index: "connect-loc2-800-2",
    x: 651.5,
    y: 666.4,
    width: 90,
    in_local: "loc2",
    in_pos_x: "800",
    in_number: "2",
    rotate: "hor",
    animation: "forward",
    line_type: "connect-line",
    in_status: "disabled",
  },
  {
    number: "[5-1]",
    group: "loc2-right",
    in_index: "loc2-1000-2",
    line_index: "connect-loc2-1000-2",
    x: 617,
    y: 726.2,
    width: 90,
    in_local: "loc2",
    in_pos_x: "1000",
    in_number: "2",
    rotate: "hor",
    animation: "forward",
    line_type: "connect-line",
    in_status: "disabled",
  },
  {
    number: "[6-1]",
    group: "loc2-right",
    in_index: "loc2-1200-2",
    line_index: "connect-loc2-1200-2",
    x: 582.5,
    y: 786,
    width: 90,
    in_local: "loc2",
    in_pos_x: "1200",
    in_number: "2",
    rotate: "hor",
    animation: "forward",
    line_type: "connect-line",
    in_status: "disabled",
  },
  {
    number: "[7-1]",
    group: "loc2-right",
    in_index: "loc2-1400-2",
    line_index: "connect-loc2-1400-2",
    x: 548,
    y: 845.8,
    width: 90,
    in_local: "loc2",
    in_pos_x: "1400",
    in_number: "2",
    rotate: "hor",
    animation: "forward",
    line_type: "connect-line",
    in_status: "disabled",
  },
  {
    number: "[8-1]",
    group: "loc2-right",
    in_index: "loc2-1600-2",
    line_index: "connect-loc2-1600-2",
    x: 513.5,
    y: 905.5999999999999,
    width: 90,
    in_local: "loc2",
    in_pos_x: "1600",
    in_number: "2",
    rotate: "hor",
    animation: "forward",
    line_type: "connect-line",
    in_status: "disabled",
  },
  {
    number: "[9-1]",
    group: "loc2-right",
    in_index: "loc2-1800-2",
    line_index: "connect-loc2-1800-2",
    x: 479,
    y: 965.4,
    width: 90,
    in_local: "loc2",
    in_pos_x: "1800",
    in_number: "2",
    rotate: "hor",
    animation: "forward",
    line_type: "connect-line",
    in_status: "disabled",
  },
  {
    number: "[10-1]",
    group: "loc2-right",
    in_index: "loc2-2000-2",
    line_index: "connect-loc2-2000-2",
    x: 444.5,
    y: 1025.1999999999998,
    width: 90,
    in_local: "loc2",
    in_pos_x: "2000",
    in_number: "2",
    rotate: "hor",
    animation: "forward",
    line_type: "connect-line",
    in_status: "disabled",
  },
  {
    number: "[11-1]",
    group: "loc2-right",
    in_index: "loc2-2200-2",
    line_index: "connect-loc2-2200-2",
    x: 410,
    y: 1085,
    width: 90,
    in_local: "loc2",
    in_pos_x: "2200",
    in_number: "2",
    rotate: "hor",
    animation: "forward",
    line_type: "connect-line",
    in_status: "disabled",
  },
  //   const calLoc2RightStartVerLine = () => {
  //     let column = 0;
  //     let row = 0;
  //     let maxColumn = 5;
  //     let maxRow = 11;
  //     let x = 0;
  //     let y = 0;
  //     let increaseX = 69;
  //     let increaseY = 0;
  //     let spaceBetweenX = -34.5;
  //     let spaceBetweenY = +59.8;

  //     let startX = 775;
  //     let startY = 487;

  //     let result = [];

  //     x = startX;
  //     y = startY;
  //     for (row = 0; row < maxRow; row++) {
  //       x = startX + row * spaceBetweenX;
  //       y = startY + row * spaceBetweenY;
  //       for (column = 2; column < maxColumn; column++) {
  //         result.push({
  //           number: `[${row + 1}-${column + 1}]`,
  //           group: "loc2-right",
  //           in_index: `loc2-${200 * (row + 1)}-${column + 1}`,
  //           line_index: `connect-loc2-${200 * (row + 1)}-${column + 1}`,
  //           x: column === 0 ? x : (x += increaseX),
  //           y: column === 0 ? y : (y += increaseY),
  //           width: 69,
  //           in_local: "loc2",
  //           in_pos_x: `${200 * (row + 1)}`,
  //           in_number: `${column + 1}`,
  //           rotate: "hor",
  //           animation: "forward",
  //           line_type: "connect-line",
  //           in_status: column >= 2 ? "disabled" : "disabled",
  //         });
  //       }
  //     }
  //     console.log("라인라인");
  //     console.table(result);
  //     return result;
  //   };
  {
    number: "[1-3]",
    group: "loc2-right",
    in_index: "loc2-200-3",
    line_index: "connect-loc2-200-3",
    x: 844,
    y: 487,
    width: 69,
    in_local: "loc2",
    in_pos_x: "200",
    in_number: "3",
    rotate: "hor",
    animation: "forward",
    line_type: "connect-line",
    in_status: "disabled",
  },
  {
    number: "[1-4]",
    group: "loc2-right",
    in_index: "loc2-200-4",
    line_index: "connect-loc2-200-4",
    x: 913,
    y: 487,
    width: 69,
    in_local: "loc2",
    in_pos_x: "200",
    in_number: "4",
    rotate: "hor",
    animation: "forward",
    line_type: "connect-line",
    in_status: "disabled",
  },
  {
    number: "[1-5]",
    group: "loc2-right",
    in_index: "loc2-200-5",
    line_index: "connect-loc2-200-5",
    x: 982,
    y: 487,
    width: 69,
    in_local: "loc2",
    in_pos_x: "200",
    in_number: "5",
    rotate: "hor",
    animation: "forward",
    line_type: "connect-line",
    in_status: "disabled",
  },
  {
    number: "[2-3]",
    group: "loc2-right",
    in_index: "loc2-400-3",
    line_index: "connect-loc2-400-3",
    x: 809.5,
    y: 546.8,
    width: 69,
    in_local: "loc2",
    in_pos_x: "400",
    in_number: "3",
    rotate: "hor",
    animation: "forward",
    line_type: "connect-line",
    in_status: "disabled",
  },
  {
    number: "[2-4]",
    group: "loc2-right",
    in_index: "loc2-400-4",
    line_index: "connect-loc2-400-4",
    x: 878.5,
    y: 546.8,
    width: 69,
    in_local: "loc2",
    in_pos_x: "400",
    in_number: "4",
    rotate: "hor",
    animation: "forward",
    line_type: "connect-line",
    in_status: "disabled",
  },
  {
    number: "[2-5]",
    group: "loc2-right",
    in_index: "loc2-400-5",
    line_index: "connect-loc2-400-5",
    x: 947.5,
    y: 546.8,
    width: 69,
    in_local: "loc2",
    in_pos_x: "400",
    in_number: "5",
    rotate: "hor",
    animation: "forward",
    line_type: "connect-line",
    in_status: "disabled",
  },
  {
    number: "[3-3]",
    group: "loc2-right",
    in_index: "loc2-600-3",
    line_index: "connect-loc2-600-3",
    x: 775,
    y: 606.6,
    width: 69,
    in_local: "loc2",
    in_pos_x: "600",
    in_number: "3",
    rotate: "hor",
    animation: "forward",
    line_type: "connect-line",
    in_status: "disabled",
  },
  {
    number: "[3-4]",
    group: "loc2-right",
    in_index: "loc2-600-4",
    line_index: "connect-loc2-600-4",
    x: 844,
    y: 606.6,
    width: 69,
    in_local: "loc2",
    in_pos_x: "600",
    in_number: "4",
    rotate: "hor",
    animation: "forward",
    line_type: "connect-line",
    in_status: "disabled",
  },
  {
    number: "[3-5]",
    group: "loc2-right",
    in_index: "loc2-600-5",
    line_index: "connect-loc2-600-5",
    x: 913,
    y: 606.6,
    width: 69,
    in_local: "loc2",
    in_pos_x: "600",
    in_number: "5",
    rotate: "hor",
    animation: "forward",
    line_type: "connect-line",
    in_status: "disabled",
  },
  {
    number: "[4-3]",
    group: "loc2-right",
    in_index: "loc2-800-3",
    line_index: "connect-loc2-800-3",
    x: 740.5,
    y: 666.4,
    width: 69,
    in_local: "loc2",
    in_pos_x: "800",
    in_number: "3",
    rotate: "hor",
    animation: "forward",
    line_type: "connect-line",
    in_status: "disabled",
  },
  {
    number: "[4-4]",
    group: "loc2-right",
    in_index: "loc2-800-4",
    line_index: "connect-loc2-800-4",
    x: 809.5,
    y: 666.4,
    width: 69,
    in_local: "loc2",
    in_pos_x: "800",
    in_number: "4",
    rotate: "hor",
    animation: "forward",
    line_type: "connect-line",
    in_status: "disabled",
  },
  {
    number: "[4-5]",
    group: "loc2-right",
    in_index: "loc2-800-5",
    line_index: "connect-loc2-800-5",
    x: 878.5,
    y: 666.4,
    width: 69,
    in_local: "loc2",
    in_pos_x: "800",
    in_number: "5",
    rotate: "hor",
    animation: "forward",
    line_type: "connect-line",
    in_status: "disabled",
  },
  {
    number: "[5-3]",
    group: "loc2-right",
    in_index: "loc2-1000-3",
    line_index: "connect-loc2-1000-3",
    x: 706,
    y: 726.2,
    width: 69,
    in_local: "loc2",
    in_pos_x: "1000",
    in_number: "3",
    rotate: "hor",
    animation: "forward",
    line_type: "connect-line",
    in_status: "disabled",
  },
  {
    number: "[5-4]",
    group: "loc2-right",
    in_index: "loc2-1000-4",
    line_index: "connect-loc2-1000-4",
    x: 775,
    y: 726.2,
    width: 69,
    in_local: "loc2",
    in_pos_x: "1000",
    in_number: "4",
    rotate: "hor",
    animation: "forward",
    line_type: "connect-line",
    in_status: "disabled",
  },
  {
    number: "[5-5]",
    group: "loc2-right",
    in_index: "loc2-1000-5",
    line_index: "connect-loc2-1000-5",
    x: 844,
    y: 726.2,
    width: 69,
    in_local: "loc2",
    in_pos_x: "1000",
    in_number: "5",
    rotate: "hor",
    animation: "forward",
    line_type: "connect-line",
    in_status: "disabled",
  },
  {
    number: "[6-3]",
    group: "loc2-right",
    in_index: "loc2-1200-3",
    line_index: "connect-loc2-1200-3",
    x: 671.5,
    y: 786,
    width: 69,
    in_local: "loc2",
    in_pos_x: "1200",
    in_number: "3",
    rotate: "hor",
    animation: "forward",
    line_type: "connect-line",
    in_status: "disabled",
  },
  {
    number: "[6-4]",
    group: "loc2-right",
    in_index: "loc2-1200-4",
    line_index: "connect-loc2-1200-4",
    x: 740.5,
    y: 786,
    width: 69,
    in_local: "loc2",
    in_pos_x: "1200",
    in_number: "4",
    rotate: "hor",
    animation: "forward",
    line_type: "connect-line",
    in_status: "disabled",
  },
  {
    number: "[6-5]",
    group: "loc2-right",
    in_index: "loc2-1200-5",
    line_index: "connect-loc2-1200-5",
    x: 809.5,
    y: 786,
    width: 69,
    in_local: "loc2",
    in_pos_x: "1200",
    in_number: "5",
    rotate: "hor",
    animation: "forward",
    line_type: "connect-line",
    in_status: "disabled",
  },
  {
    number: "[7-3]",
    group: "loc2-right",
    in_index: "loc2-1400-3",
    line_index: "connect-loc2-1400-3",
    x: 637,
    y: 845.8,
    width: 69,
    in_local: "loc2",
    in_pos_x: "1400",
    in_number: "3",
    rotate: "hor",
    animation: "forward",
    line_type: "connect-line",
    in_status: "disabled",
  },
  {
    number: "[7-4]",
    group: "loc2-right",
    in_index: "loc2-1400-4",
    line_index: "connect-loc2-1400-4",
    x: 706,
    y: 845.8,
    width: 69,
    in_local: "loc2",
    in_pos_x: "1400",
    in_number: "4",
    rotate: "hor",
    animation: "forward",
    line_type: "connect-line",
    in_status: "disabled",
  },
  {
    number: "[7-5]",
    group: "loc2-right",
    in_index: "loc2-1400-5",
    line_index: "connect-loc2-1400-5",
    x: 775,
    y: 845.8,
    width: 69,
    in_local: "loc2",
    in_pos_x: "1400",
    in_number: "5",
    rotate: "hor",
    animation: "forward",
    line_type: "connect-line",
    in_status: "disabled",
  },
  {
    number: "[8-3]",
    group: "loc2-right",
    in_index: "loc2-1600-3",
    line_index: "connect-loc2-1600-3",
    x: 602.5,
    y: 905.5999999999999,
    width: 69,
    in_local: "loc2",
    in_pos_x: "1600",
    in_number: "3",
    rotate: "hor",
    animation: "forward",
    line_type: "connect-line",
    in_status: "disabled",
  },
  {
    number: "[8-4]",
    group: "loc2-right",
    in_index: "loc2-1600-4",
    line_index: "connect-loc2-1600-4",
    x: 671.5,
    y: 905.5999999999999,
    width: 69,
    in_local: "loc2",
    in_pos_x: "1600",
    in_number: "4",
    rotate: "hor",
    animation: "forward",
    line_type: "connect-line",
    in_status: "disabled",
  },
  {
    number: "[8-5]",
    group: "loc2-right",
    in_index: "loc2-1600-5",
    line_index: "connect-loc2-1600-5",
    x: 740.5,
    y: 905.5999999999999,
    width: 69,
    in_local: "loc2",
    in_pos_x: "1600",
    in_number: "5",
    rotate: "hor",
    animation: "forward",
    line_type: "connect-line",
    in_status: "disabled",
  },
  {
    number: "[9-3]",
    group: "loc2-right",
    in_index: "loc2-1800-3",
    line_index: "connect-loc2-1800-3",
    x: 568,
    y: 965.4,
    width: 69,
    in_local: "loc2",
    in_pos_x: "1800",
    in_number: "3",
    rotate: "hor",
    animation: "forward",
    line_type: "connect-line",
    in_status: "disabled",
  },
  {
    number: "[9-4]",
    group: "loc2-right",
    in_index: "loc2-1800-4",
    line_index: "connect-loc2-1800-4",
    x: 637,
    y: 965.4,
    width: 69,
    in_local: "loc2",
    in_pos_x: "1800",
    in_number: "4",
    rotate: "hor",
    animation: "forward",
    line_type: "connect-line",
    in_status: "disabled",
  },
  {
    number: "[9-5]",
    group: "loc2-right",
    in_index: "loc2-1800-5",
    line_index: "connect-loc2-1800-5",
    x: 706,
    y: 965.4,
    width: 69,
    in_local: "loc2",
    in_pos_x: "1800",
    in_number: "5",
    rotate: "hor",
    animation: "forward",
    line_type: "connect-line",
    in_status: "disabled",
  },
  {
    number: "[10-3]",
    group: "loc2-right",
    in_index: "loc2-2000-3",
    line_index: "connect-loc2-2000-3",
    x: 533.5,
    y: 1025.1999999999998,
    width: 69,
    in_local: "loc2",
    in_pos_x: "2000",
    in_number: "3",
    rotate: "hor",
    animation: "forward",
    line_type: "connect-line",
    in_status: "disabled",
  },
  {
    number: "[10-4]",
    group: "loc2-right",
    in_index: "loc2-2000-4",
    line_index: "connect-loc2-2000-4",
    x: 602.5,
    y: 1025.1999999999998,
    width: 69,
    in_local: "loc2",
    in_pos_x: "2000",
    in_number: "4",
    rotate: "hor",
    animation: "forward",
    line_type: "connect-line",
    in_status: "disabled",
  },
  {
    number: "[10-5]",
    group: "loc2-right",
    in_index: "loc2-2000-5",
    line_index: "connect-loc2-2000-5",
    x: 671.5,
    y: 1025.1999999999998,
    width: 69,
    in_local: "loc2",
    in_pos_x: "2000",
    in_number: "5",
    rotate: "hor",
    animation: "forward",
    line_type: "connect-line",
    in_status: "disabled",
  },
  {
    number: "[11-3]",
    group: "loc2-right",
    in_index: "loc2-2200-3",
    line_index: "connect-loc2-2200-3",
    x: 499,
    y: 1085,
    width: 69,
    in_local: "loc2",
    in_pos_x: "2200",
    in_number: "3",
    rotate: "hor",
    animation: "forward",
    line_type: "connect-line",
    in_status: "disabled",
  },
  {
    number: "[11-4]",
    group: "loc2-right",
    in_index: "loc2-2200-4",
    line_index: "connect-loc2-2200-4",
    x: 568,
    y: 1085,
    width: 69,
    in_local: "loc2",
    in_pos_x: "2200",
    in_number: "4",
    rotate: "hor",
    animation: "forward",
    line_type: "connect-line",
    in_status: "disabled",
  },
  {
    number: "[11-5]",
    group: "loc2-right",
    in_index: "loc2-2200-5",
    line_index: "connect-loc2-2200-5",
    x: 637,
    y: 1085,
    width: 69,
    in_local: "loc2",
    in_pos_x: "2200",
    in_number: "5",
    rotate: "hor",
    animation: "forward",
    line_type: "connect-line",
    in_status: "disabled",
  },
];
export default Loc2RightConnectOptions;