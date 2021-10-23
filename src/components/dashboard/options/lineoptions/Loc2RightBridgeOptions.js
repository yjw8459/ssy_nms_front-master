// const [lineOptions, setLineOptions] = useState([]);
// const calLoc2RightStartVerLine = () => {
//   let column = 0;
//   let row = 0;
//   let maxColumn = 5;
//   let maxRow = 11;
//   let x = 0;
//   let y = 0;
//   let increaseX = +57;
//   let increaseY = -33.5;
//   let spaceBetweenX = -69.5;
//   let spaceBetweenY = -34.5;

//   let startX = 827;
//   let startY = 448;

//   let result = [];

//   x = startX;
//   y = startY;
//   for (row = 0; row < maxRow; row++) {
//     x = startX + row * spaceBetweenX;
//     // y = startY + row * spaceBetweenY;
//     result.push({
//       number: `[${row + 1}-${column + 1}]`,
//       group: "loc2-right",
//       in_index: `loc2-${200 * (row + 1)}-${column + 1}`,
//       line_index: `bridge-line-loc2-${200 * (row + 1)}-${column + 1}`,
//       x: x,
//       y: y,
//       width: 22 + row * 0.6,
//       in_local: "loc2",
//       in_pos_x: `${200 * (row + 1)}`,
//       in_number: `${column + 1}`,
//       rotate: "ver",
//       animation: "forward",
//       line_type: "bridge-line",
//       in_status: column >= 2 ? "not installed" : "disabled",
//     });
//   }

//   console.log("라인라인");
//   console.table(result);
//   return result;
// };

// useEffect(() => {
//   let result = calLoc2RightStartVerLine();
//   result = [...result, ...LineOptions];
//   setLineOptions(result);
// }, []);

const Loc2RightBridgeOptions = [
  {
    number: "[1-1]",
    group: "loc2-right",
    in_index: "loc2-200-2",
    line_index: "bridge-line-loc2-200-2",
    x: 829,
    y: 448,
    width: 20,
    in_local: "loc2",
    in_pos_x: "200",
    in_number: "2",
    rotate: "ver",
    animation: "forward",
    line_type: "bridge-line",
    in_status: "disabled",
  },
  {
    number: "[2-1]",
    group: "loc2-right",
    in_index: "loc2-400-2",
    line_index: "bridge-line-loc2-400-2",
    x: 759.5,
    y: 448,
    width: 22.6,
    in_local: "loc2",
    in_pos_x: "400",
    in_number: "2",
    rotate: "ver",
    animation: "forward",
    line_type: "bridge-line",
    in_status: "disabled",
  },
  {
    number: "[3-1]",
    group: "loc2-right",
    in_index: "loc2-600-2",
    line_index: "bridge-line-loc2-600-2",
    x: 690,
    y: 448,
    width: 22.2,
    in_local: "loc2",
    in_pos_x: "600",
    in_number: "2",
    rotate: "ver",
    animation: "forward",
    line_type: "bridge-line",
    in_status: "disabled",
  },
  {
    number: "[4-1]",
    group: "loc2-right",
    in_index: "loc2-800-2",
    line_index: "bridge-line-loc2-800-2",
    x: 620.5,
    y: 448,
    width: 22.8,
    in_local: "loc2",
    in_pos_x: "800",
    in_number: "2",
    rotate: "ver",
    animation: "forward",
    line_type: "bridge-line",
    in_status: "disabled",
  },
  {
    number: "[5-1]",
    group: "loc2-right",
    in_index: "loc2-1000-2",
    line_index: "bridge-line-loc2-1000-2",
    x: 550,
    y: 448,
    width: 23.4,
    in_local: "loc2",
    in_pos_x: "1000",
    in_number: "2",
    rotate: "ver",
    animation: "forward",
    line_type: "bridge-line",
    in_status: "disabled",
  },
  {
    number: "[6-1]",
    group: "loc2-right",
    in_index: "loc2-1200-2",
    line_index: "bridge-line-loc2-1200-2",
    x: 479.5,
    y: 448,
    width: 25,
    in_local: "loc2",
    in_pos_x: "1200",
    in_number: "2",
    rotate: "ver",
    animation: "forward",
    line_type: "bridge-line",
    in_status: "disabled",
  },
  {
    number: "[7-1]",
    group: "loc2-right",
    in_index: "loc2-1400-2",
    line_index: "bridge-line-loc2-1400-2",
    x: 410,
    y: 448,
    width: 25.6,
    in_local: "loc2",
    in_pos_x: "1400",
    in_number: "2",
    rotate: "ver",
    animation: "forward",
    line_type: "bridge-line",
    in_status: "disabled",
  },
  {
    number: "[8-1]",
    group: "loc2-right",
    in_index: "loc2-1600-2",
    line_index: "bridge-line-loc2-1600-2",
    x: 340.5,
    y: 448,
    width: 26.2,
    in_local: "loc2",
    in_pos_x: "1600",
    in_number: "2",
    rotate: "ver",
    animation: "forward",
    line_type: "bridge-line",
    in_status: "disabled",
  },
  {
    number: "[9-1]",
    group: "loc2-right",
    in_index: "loc2-1800-2",
    line_index: "bridge-line-loc2-1800-2",
    x: 271,
    y: 448,
    width: 26.8,
    in_local: "loc2",
    in_pos_x: "1800",
    in_number: "2",
    rotate: "ver",
    animation: "forward",
    line_type: "bridge-line",
    in_status: "disabled",
  },
  {
    number: "[10-1]",
    group: "loc2-right",
    in_index: "loc2-2000-2",
    line_index: "bridge-line-loc2-2000-2",
    x: 201.5,
    y: 448,
    width: 27.4,
    in_local: "loc2",
    in_pos_x: "2000",
    in_number: "2",
    rotate: "ver",
    animation: "forward",
    line_type: "bridge-line",
    in_status: "disabled",
  },
  {
    number: "[11-1]",
    group: "loc2-right",
    in_index: "loc2-2200-2",
    line_index: "bridge-line-loc2-2200-2",
    x: 130,
    y: 448,
    width: 30,
    in_local: "loc2",
    in_pos_x: "2200",
    in_number: "2",
    rotate: "ver",
    animation: "forward",
    line_type: "bridge-line",
    in_status: "disabled",
  },
];

export default Loc2RightBridgeOptions;
