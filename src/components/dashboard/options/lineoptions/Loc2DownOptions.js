// const calLoc1LeftLinkVerLine = () => {
//     let column = 0;
//     let row = 0;
//     let maxColumn = 5;
//     let maxRow = 6;
//     let x = 0;
//     let y = 0;
//     let increaseX = -65;
//     let increaseY = 0;
//     let spaceBetweenX = +35.3;
//     let spaceBetweenY = -60.5;

//     let startX = 697;
//     let startY = 472;

//     let result = [];

//     x = startX;
//     y = startY;

//     for (column = 0; column < maxColumn; column++) {
//       result.push({
//         number: `[${row + 1}-${column + 1}]`,
//         group: "loc2-right",
//         in_index: `loc2-000-${column + 1}`,
//         line_index: `connect-loc2-000-${column + 1}`,
//         x: column === 0 ? x : (x += increaseX),
//         y: column === 0 ? y : (y += increaseY),
//         width: 65,
//         in_local: "loc2",
//         in_pos_x: `000`,
//         in_number: `${column + 1}`,
//         rotate: "hor",
//         animation: "forward",
//         line_type: "connect-line",
//         in_status: "disabled",
//       });
//     }

//     console.log("라인라인");
//     console.table(result);
//     return result;
//   };

// 테스트용 useEffect
// useEffect(() => {
//   // let result = calLoc2RightSocketsXY();
//   let result = [];
//   let lineresult = calLoc1LeftLinkVerLine();
//   // let lineresult = [];

//   let newLines = [...lineresult, ...lineOptions];

//   newLines.map((item, index) => {
//     newLines.splice(index, 1, {
//       ...item,
//       in_status: "open",
//     });
//   });

//   setLineOptions(newLines);

//   let newSocketData_ = [...SocketOptions, ...result];
//   newSocketData_.map((item, index) => {
//     newSocketData_.splice(index, 1, {
//       ...item,
//       in_status: "open",
//       in_device_type: "1",
//     });
//   });
//   setSocketData(newSocketData_);
// }, []);

const Loc2DownOptions = [
  {
    number: "[1-1]",
    group: "loc2-right",
    in_index: "loc2-000-1",
    line_index: "connect-loc2-000-1",
    x: 705,
    y: 472,
    width: 65,
    in_local: "loc2",
    in_pos_x: "0",
    in_number: "1",
    rotate: "hor",
    animation: "forward",
    line_type: "connect-line",
    in_status: "disabled",
  },
  {
    number: "[1-2]",
    group: "loc2-right",
    in_index: "loc2-000-2",
    line_index: "connect-loc2-000-2",
    x: 636,
    y: 472,
    width: 68,
    in_local: "loc2",
    in_pos_x: "0",
    in_number: "2",
    rotate: "hor",
    animation: "forward",
    line_type: "connect-line",
    in_status: "disabled",
  },
  {
    number: "[1-3]",
    group: "loc2-right",
    in_index: "loc2-000-3",
    line_index: "connect-loc2-000-3",
    x: 568,
    y: 472,
    width: 67,
    in_local: "loc2",
    in_pos_x: "0",
    in_number: "3",
    rotate: "hor",
    animation: "forward",
    line_type: "connect-line",
    in_status: "disabled",
  },
  {
    number: "[1-4]",
    group: "loc2-right",
    in_index: "loc2-000-4",
    line_index: "connect-loc2-000-4",
    x: 502,
    y: 472,
    width: 66,
    in_local: "loc2",
    in_pos_x: "0",
    in_number: "4",
    rotate: "hor",
    animation: "forward",
    line_type: "connect-line",
    in_status: "disabled",
  },
  {
    number: "[1-5]",
    group: "loc2-right",
    in_index: "loc2-000-5",
    line_index: "connect-loc2-000-5",
    x: 437,
    y: 472,
    width: 65,
    in_local: "loc2",
    in_pos_x: "0",
    in_number: "5",
    rotate: "hor",
    animation: "forward",
    line_type: "connect-line",
    in_status: "disabled",
  },
  //   link - lines
  {
    number: "[1]",
    group: "loc2-right-down",
    in_index: "loc2-000-1",
    line_index: "link-line-loc2-000-1",
    x: 824,
    y: 396,
    width: 14,
    in_local: "loc2",
    in_pos_x: "0",
    in_number: "1",
    rotate: "ver",
    animation: "reverse",
    line_type: "link-line",
    in_status: "disabled",
  },
  {
    number: "[2]",
    group: "loc2-right-down",
    in_index: "loc2-000-2",
    line_index: "link-line-loc2-000-2",
    x: 789,
    y: 336,
    width: 14,
    in_local: "loc2",
    in_pos_x: "0",
    in_number: "2",
    rotate: "ver",
    animation: "reverse",
    line_type: "link-line",
    in_status: "disabled",
  },
  {
    number: "[3]",
    group: "loc2-right-down",
    in_index: "loc2-000-3",
    line_index: "link-line-loc2-000-3",
    x: 756,
    y: 278,
    width: 14,
    in_local: "loc2",
    in_pos_x: "0",
    in_number: "3",
    rotate: "ver",
    animation: "reverse",
    line_type: "link-line",
    in_status: "disabled",
  },
  {
    number: "[4]",
    group: "loc2-right-down",
    in_index: "loc2-000-4",
    line_index: "link-line-loc2-000-4",
    x: 723,
    y: 220,
    width: 14,
    in_local: "loc2",
    in_pos_x: "0",
    in_number: "4",
    rotate: "ver",
    animation: "reverse",
    line_type: "link-line",
    in_status: "disabled",
  },
  {
    number: "[5]",
    group: "loc2-right-down",
    in_index: "loc2-000-5",
    line_index: "link-line-loc2-000-5",
    x: 691,
    y: 166,
    width: 14,
    in_local: "loc2",
    in_pos_x: "0",
    in_number: "5",
    rotate: "ver",
    animation: "reverse",
    line_type: "link-line",
    in_status: "disabled",
  },
];

export default Loc2DownOptions;
