//   const [lineOptions, setLineOptions] = useState([]);
//   const calLoc2RightLinkVerLine = () => {
//     let column = 0;
//     let row = 0;
//     let maxColumn = 5;
//     let maxRow = 11;
//     let x = 0;
//     let y = 0;
//     let increaseX = +34;
//     let increaseY = +59.5;
//     let spaceBetweenX = -69;
//     let spaceBetweenY = 0;

//     let startX = 851;
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
//           group: "loc2-right",
//           in_index: `loc2-${200 * (row + 1)}-${column + 1}`,
//           line_index: `linkline-loc2-${200 * (row + 1)}-${column + 1}`,
//           x: column === 0 ? x : (x += increaseX),
//           y: column === 0 ? y : (y += increaseY),
//           width: 10,
//           in_local: "loc2",
//           in_pos_x: `${200 * (row + 1)}`,
//           in_number: `${column + 1}`,
//           rotate: "ver",
//           animation: "reverse",
//           line_type: "link-line",
//           in_status: column >= 2 ? "disabled" : "disabled",
//         });
//       }
//     }
//     console.log("라인라인");
//     console.table(result);
//     return result;
//   };

//   useEffect(() => {
//     let result = calLoc2RightLinkVerLine();
//     setLineOptions(result);
//   }, []);

const Loc2RightLinkOptions = [
  {
    number: "[1-2]",
    group: "loc2-right",
    in_index: "loc2-200-2",
    line_index: "linkline-loc2-200-2",
    x: 885,
    y: 524.5,
    width: 10,
    in_local: "loc2",
    in_pos_x: "200",
    in_number: "2",
    rotate: "ver",
    animation: "reverse",
    line_type: "link-line",
    in_status: "disabled",
  },
  {
    number: "[1-3]",
    group: "loc2-right",
    in_index: "loc2-200-3",
    line_index: "linkline-loc2-200-3",
    x: 919,
    y: 584,
    width: 10,
    in_local: "loc2",
    in_pos_x: "200",
    in_number: "3",
    rotate: "ver",
    animation: "reverse",
    line_type: "link-line",
    in_status: "disabled",
  },
  {
    number: "[1-4]",
    group: "loc2-right",
    in_index: "loc2-200-4",
    line_index: "linkline-loc2-200-4",
    x: 953,
    y: 643.5,
    width: 10,
    in_local: "loc2",
    in_pos_x: "200",
    in_number: "4",
    rotate: "ver",
    animation: "reverse",
    line_type: "link-line",
    in_status: "disabled",
  },
  {
    number: "[1-5]",
    group: "loc2-right",
    in_index: "loc2-200-5",
    line_index: "linkline-loc2-200-5",
    x: 987,
    y: 703,
    width: 10,
    in_local: "loc2",
    in_pos_x: "200",
    in_number: "5",
    rotate: "ver",
    animation: "reverse",
    line_type: "link-line",
    in_status: "disabled",
  },
  {
    number: "[2-2]",
    group: "loc2-right",
    in_index: "loc2-400-2",
    line_index: "linkline-loc2-400-2",
    x: 816,
    y: 524.5,
    width: 10,
    in_local: "loc2",
    in_pos_x: "400",
    in_number: "2",
    rotate: "ver",
    animation: "reverse",
    line_type: "link-line",
    in_status: "disabled",
  },
  {
    number: "[2-3]",
    group: "loc2-right",
    in_index: "loc2-400-3",
    line_index: "linkline-loc2-400-3",
    x: 850,
    y: 584,
    width: 10,
    in_local: "loc2",
    in_pos_x: "400",
    in_number: "3",
    rotate: "ver",
    animation: "reverse",
    line_type: "link-line",
    in_status: "disabled",
  },
  {
    number: "[2-4]",
    group: "loc2-right",
    in_index: "loc2-400-4",
    line_index: "linkline-loc2-400-4",
    x: 884,
    y: 643.5,
    width: 10,
    in_local: "loc2",
    in_pos_x: "400",
    in_number: "4",
    rotate: "ver",
    animation: "reverse",
    line_type: "link-line",
    in_status: "disabled",
  },
  {
    number: "[2-5]",
    group: "loc2-right",
    in_index: "loc2-400-5",
    line_index: "linkline-loc2-400-5",
    x: 918,
    y: 703,
    width: 10,
    in_local: "loc2",
    in_pos_x: "400",
    in_number: "5",
    rotate: "ver",
    animation: "reverse",
    line_type: "link-line",
    in_status: "disabled",
  },
  {
    number: "[3-2]",
    group: "loc2-right",
    in_index: "loc2-600-2",
    line_index: "linkline-loc2-600-2",
    x: 747,
    y: 524.5,
    width: 10,
    in_local: "loc2",
    in_pos_x: "600",
    in_number: "2",
    rotate: "ver",
    animation: "reverse",
    line_type: "link-line",
    in_status: "disabled",
  },
  {
    number: "[3-3]",
    group: "loc2-right",
    in_index: "loc2-600-3",
    line_index: "linkline-loc2-600-3",
    x: 781,
    y: 584,
    width: 10,
    in_local: "loc2",
    in_pos_x: "600",
    in_number: "3",
    rotate: "ver",
    animation: "reverse",
    line_type: "link-line",
    in_status: "disabled",
  },
  {
    number: "[3-4]",
    group: "loc2-right",
    in_index: "loc2-600-4",
    line_index: "linkline-loc2-600-4",
    x: 815,
    y: 643.5,
    width: 10,
    in_local: "loc2",
    in_pos_x: "600",
    in_number: "4",
    rotate: "ver",
    animation: "reverse",
    line_type: "link-line",
    in_status: "disabled",
  },
  {
    number: "[3-5]",
    group: "loc2-right",
    in_index: "loc2-600-5",
    line_index: "linkline-loc2-600-5",
    x: 849,
    y: 703,
    width: 10,
    in_local: "loc2",
    in_pos_x: "600",
    in_number: "5",
    rotate: "ver",
    animation: "reverse",
    line_type: "link-line",
    in_status: "disabled",
  },
  {
    number: "[4-2]",
    group: "loc2-right",
    in_index: "loc2-800-2",
    line_index: "linkline-loc2-800-2",
    x: 678,
    y: 524.5,
    width: 10,
    in_local: "loc2",
    in_pos_x: "800",
    in_number: "2",
    rotate: "ver",
    animation: "reverse",
    line_type: "link-line",
    in_status: "disabled",
  },
  {
    number: "[4-3]",
    group: "loc2-right",
    in_index: "loc2-800-3",
    line_index: "linkline-loc2-800-3",
    x: 712,
    y: 584,
    width: 10,
    in_local: "loc2",
    in_pos_x: "800",
    in_number: "3",
    rotate: "ver",
    animation: "reverse",
    line_type: "link-line",
    in_status: "disabled",
  },
  {
    number: "[4-4]",
    group: "loc2-right",
    in_index: "loc2-800-4",
    line_index: "linkline-loc2-800-4",
    x: 746,
    y: 643.5,
    width: 10,
    in_local: "loc2",
    in_pos_x: "800",
    in_number: "4",
    rotate: "ver",
    animation: "reverse",
    line_type: "link-line",
    in_status: "disabled",
  },
  {
    number: "[4-5]",
    group: "loc2-right",
    in_index: "loc2-800-5",
    line_index: "linkline-loc2-800-5",
    x: 780,
    y: 703,
    width: 10,
    in_local: "loc2",
    in_pos_x: "800",
    in_number: "5",
    rotate: "ver",
    animation: "reverse",
    line_type: "link-line",
    in_status: "disabled",
  },
  {
    number: "[5-2]",
    group: "loc2-right",
    in_index: "loc2-1000-2",
    line_index: "linkline-loc2-1000-2",
    x: 609,
    y: 524.5,
    width: 10,
    in_local: "loc2",
    in_pos_x: "1000",
    in_number: "2",
    rotate: "ver",
    animation: "reverse",
    line_type: "link-line",
    in_status: "disabled",
  },
  {
    number: "[5-3]",
    group: "loc2-right",
    in_index: "loc2-1000-3",
    line_index: "linkline-loc2-1000-3",
    x: 643,
    y: 584,
    width: 10,
    in_local: "loc2",
    in_pos_x: "1000",
    in_number: "3",
    rotate: "ver",
    animation: "reverse",
    line_type: "link-line",
    in_status: "disabled",
  },
  {
    number: "[5-4]",
    group: "loc2-right",
    in_index: "loc2-1000-4",
    line_index: "linkline-loc2-1000-4",
    x: 677,
    y: 643.5,
    width: 10,
    in_local: "loc2",
    in_pos_x: "1000",
    in_number: "4",
    rotate: "ver",
    animation: "reverse",
    line_type: "link-line",
    in_status: "disabled",
  },
  {
    number: "[5-5]",
    group: "loc2-right",
    in_index: "loc2-1000-5",
    line_index: "linkline-loc2-1000-5",
    x: 711,
    y: 703,
    width: 10,
    in_local: "loc2",
    in_pos_x: "1000",
    in_number: "5",
    rotate: "ver",
    animation: "reverse",
    line_type: "link-line",
    in_status: "disabled",
  },
  {
    number: "[6-2]",
    group: "loc2-right",
    in_index: "loc2-1200-2",
    line_index: "linkline-loc2-1200-2",
    x: 540,
    y: 524.5,
    width: 10,
    in_local: "loc2",
    in_pos_x: "1200",
    in_number: "2",
    rotate: "ver",
    animation: "reverse",
    line_type: "link-line",
    in_status: "disabled",
  },
  {
    number: "[6-3]",
    group: "loc2-right",
    in_index: "loc2-1200-3",
    line_index: "linkline-loc2-1200-3",
    x: 574,
    y: 584,
    width: 10,
    in_local: "loc2",
    in_pos_x: "1200",
    in_number: "3",
    rotate: "ver",
    animation: "reverse",
    line_type: "link-line",
    in_status: "disabled",
  },
  {
    number: "[6-4]",
    group: "loc2-right",
    in_index: "loc2-1200-4",
    line_index: "linkline-loc2-1200-4",
    x: 608,
    y: 643.5,
    width: 10,
    in_local: "loc2",
    in_pos_x: "1200",
    in_number: "4",
    rotate: "ver",
    animation: "reverse",
    line_type: "link-line",
    in_status: "disabled",
  },
  {
    number: "[6-5]",
    group: "loc2-right",
    in_index: "loc2-1200-5",
    line_index: "linkline-loc2-1200-5",
    x: 642,
    y: 703,
    width: 10,
    in_local: "loc2",
    in_pos_x: "1200",
    in_number: "5",
    rotate: "ver",
    animation: "reverse",
    line_type: "link-line",
    in_status: "disabled",
  },
  {
    number: "[7-2]",
    group: "loc2-right",
    in_index: "loc2-1400-2",
    line_index: "linkline-loc2-1400-2",
    x: 471,
    y: 524.5,
    width: 10,
    in_local: "loc2",
    in_pos_x: "1400",
    in_number: "2",
    rotate: "ver",
    animation: "reverse",
    line_type: "link-line",
    in_status: "disabled",
  },
  {
    number: "[7-3]",
    group: "loc2-right",
    in_index: "loc2-1400-3",
    line_index: "linkline-loc2-1400-3",
    x: 505,
    y: 584,
    width: 10,
    in_local: "loc2",
    in_pos_x: "1400",
    in_number: "3",
    rotate: "ver",
    animation: "reverse",
    line_type: "link-line",
    in_status: "disabled",
  },
  {
    number: "[7-4]",
    group: "loc2-right",
    in_index: "loc2-1400-4",
    line_index: "linkline-loc2-1400-4",
    x: 539,
    y: 643.5,
    width: 10,
    in_local: "loc2",
    in_pos_x: "1400",
    in_number: "4",
    rotate: "ver",
    animation: "reverse",
    line_type: "link-line",
    in_status: "disabled",
  },
  {
    number: "[7-5]",
    group: "loc2-right",
    in_index: "loc2-1400-5",
    line_index: "linkline-loc2-1400-5",
    x: 573,
    y: 703,
    width: 10,
    in_local: "loc2",
    in_pos_x: "1400",
    in_number: "5",
    rotate: "ver",
    animation: "reverse",
    line_type: "link-line",
    in_status: "disabled",
  },
  {
    number: "[8-2]",
    group: "loc2-right",
    in_index: "loc2-1600-2",
    line_index: "linkline-loc2-1600-2",
    x: 402,
    y: 524.5,
    width: 10,
    in_local: "loc2",
    in_pos_x: "1600",
    in_number: "2",
    rotate: "ver",
    animation: "reverse",
    line_type: "link-line",
    in_status: "disabled",
  },
  {
    number: "[8-3]",
    group: "loc2-right",
    in_index: "loc2-1600-3",
    line_index: "linkline-loc2-1600-3",
    x: 436,
    y: 584,
    width: 10,
    in_local: "loc2",
    in_pos_x: "1600",
    in_number: "3",
    rotate: "ver",
    animation: "reverse",
    line_type: "link-line",
    in_status: "disabled",
  },
  {
    number: "[8-4]",
    group: "loc2-right",
    in_index: "loc2-1600-4",
    line_index: "linkline-loc2-1600-4",
    x: 470,
    y: 643.5,
    width: 10,
    in_local: "loc2",
    in_pos_x: "1600",
    in_number: "4",
    rotate: "ver",
    animation: "reverse",
    line_type: "link-line",
    in_status: "disabled",
  },
  {
    number: "[8-5]",
    group: "loc2-right",
    in_index: "loc2-1600-5",
    line_index: "linkline-loc2-1600-5",
    x: 504,
    y: 703,
    width: 10,
    in_local: "loc2",
    in_pos_x: "1600",
    in_number: "5",
    rotate: "ver",
    animation: "reverse",
    line_type: "link-line",
    in_status: "disabled",
  },
  {
    number: "[9-2]",
    group: "loc2-right",
    in_index: "loc2-1800-2",
    line_index: "linkline-loc2-1800-2",
    x: 333,
    y: 524.5,
    width: 10,
    in_local: "loc2",
    in_pos_x: "1800",
    in_number: "2",
    rotate: "ver",
    animation: "reverse",
    line_type: "link-line",
    in_status: "disabled",
  },
  {
    number: "[9-3]",
    group: "loc2-right",
    in_index: "loc2-1800-3",
    line_index: "linkline-loc2-1800-3",
    x: 367,
    y: 584,
    width: 10,
    in_local: "loc2",
    in_pos_x: "1800",
    in_number: "3",
    rotate: "ver",
    animation: "reverse",
    line_type: "link-line",
    in_status: "disabled",
  },
  {
    number: "[9-4]",
    group: "loc2-right",
    in_index: "loc2-1800-4",
    line_index: "linkline-loc2-1800-4",
    x: 401,
    y: 643.5,
    width: 10,
    in_local: "loc2",
    in_pos_x: "1800",
    in_number: "4",
    rotate: "ver",
    animation: "reverse",
    line_type: "link-line",
    in_status: "disabled",
  },
  {
    number: "[9-5]",
    group: "loc2-right",
    in_index: "loc2-1800-5",
    line_index: "linkline-loc2-1800-5",
    x: 435,
    y: 703,
    width: 10,
    in_local: "loc2",
    in_pos_x: "1800",
    in_number: "5",
    rotate: "ver",
    animation: "reverse",
    line_type: "link-line",
    in_status: "disabled",
  },
  {
    number: "[10-2]",
    group: "loc2-right",
    in_index: "loc2-2000-2",
    line_index: "linkline-loc2-2000-2",
    x: 264,
    y: 524.5,
    width: 10,
    in_local: "loc2",
    in_pos_x: "2000",
    in_number: "2",
    rotate: "ver",
    animation: "reverse",
    line_type: "link-line",
    in_status: "disabled",
  },
  {
    number: "[10-3]",
    group: "loc2-right",
    in_index: "loc2-2000-3",
    line_index: "linkline-loc2-2000-3",
    x: 298,
    y: 584,
    width: 10,
    in_local: "loc2",
    in_pos_x: "2000",
    in_number: "3",
    rotate: "ver",
    animation: "reverse",
    line_type: "link-line",
    in_status: "disabled",
  },
  {
    number: "[10-4]",
    group: "loc2-right",
    in_index: "loc2-2000-4",
    line_index: "linkline-loc2-2000-4",
    x: 332,
    y: 643.5,
    width: 10,
    in_local: "loc2",
    in_pos_x: "2000",
    in_number: "4",
    rotate: "ver",
    animation: "reverse",
    line_type: "link-line",
    in_status: "disabled",
  },
  {
    number: "[10-5]",
    group: "loc2-right",
    in_index: "loc2-2000-5",
    line_index: "linkline-loc2-2000-5",
    x: 366,
    y: 703,
    width: 10,
    in_local: "loc2",
    in_pos_x: "2000",
    in_number: "5",
    rotate: "ver",
    animation: "reverse",
    line_type: "link-line",
    in_status: "disabled",
  },
  {
    number: "[11-2]",
    group: "loc2-right",
    in_index: "loc2-2200-2",
    line_index: "linkline-loc2-2200-2",
    x: 195,
    y: 524.5,
    width: 10,
    in_local: "loc2",
    in_pos_x: "2200",
    in_number: "2",
    rotate: "ver",
    animation: "reverse",
    line_type: "link-line",
    in_status: "disabled",
  },
  {
    number: "[11-3]",
    group: "loc2-right",
    in_index: "loc2-2200-3",
    line_index: "linkline-loc2-2200-3",
    x: 229,
    y: 584,
    width: 10,
    in_local: "loc2",
    in_pos_x: "2200",
    in_number: "3",
    rotate: "ver",
    animation: "reverse",
    line_type: "link-line",
    in_status: "disabled",
  },
  {
    number: "[11-4]",
    group: "loc2-right",
    in_index: "loc2-2200-4",
    line_index: "linkline-loc2-2200-4",
    x: 263,
    y: 643.5,
    width: 10,
    in_local: "loc2",
    in_pos_x: "2200",
    in_number: "4",
    rotate: "ver",
    animation: "reverse",
    line_type: "link-line",
    in_status: "disabled",
  },
  {
    number: "[11-5]",
    group: "loc2-right",
    in_index: "loc2-2200-5",
    line_index: "linkline-loc2-2200-5",
    x: 297,
    y: 703,
    width: 10,
    in_local: "loc2",
    in_pos_x: "2200",
    in_number: "5",
    rotate: "ver",
    animation: "reverse",
    line_type: "link-line",
    in_status: "disabled",
  },
];
export default Loc2RightLinkOptions;
