const Loc2Right2400Options = [
  // const calLoc1LeftLinkVerLine = () => {
  //   let column = 0;
  //   let row = 0;
  //   let maxColumn = 5;
  //   let maxRow = 5;
  //   let x = 0;
  //   let y = 0;
  //   let increaseX = -57;
  //   let increaseY = +33.5;
  //   let spaceBetweenX = +32.5;
  //   let spaceBetweenY = -54.5;

  //   let startX = 319;
  //   let startY = 1166;

  //   let result = [];

  //   x = startX;
  //   y = startY;
  //   for (row = 0; row < maxRow; row++) {
  //     x = startX + row * spaceBetweenX;
  //     y = startY + row * spaceBetweenY;
  //     result.push({
  //       number: `[${row + 1}]`,
  //       group: "loc2-right",
  //       in_index: `loc2-2400-${row + 1}`,
  //       line_index: `link-line-loc2-2400-${row + 1}`,
  //       x: x,
  //       y: y,
  //       width: 8,
  //       in_local: "loc2",
  //       in_pos_x: `2400`,
  //       in_number: `${row + 1}`,
  //       rotate: "hor",
  //       animation: "forward",
  //       line_type: "link-line",
  //       in_status: "disabled",
  //     });
  //   }
  //   console.log("라인라인");
  //   console.table(result);
  //   return result;
  // };
  {
    number: "[1]",
    group: "loc2-right",
    in_index: "loc2-2400-1",
    line_index: "link-line-loc2-2400-1",
    x: 319,
    y: 1166,
    width: 11,
    in_local: "loc2",
    in_pos_x: "2400",
    in_number: "1",
    rotate: "hor",
    animation: "forward",
    line_type: "link-line",
    in_status: "disabled",
  },
  {
    number: "[2]",
    group: "loc2-right",
    in_index: "loc2-2400-2",
    line_index: "link-line-loc2-2400-2",
    x: 351.5,
    y: 1111.5,
    width: 10,
    in_local: "loc2",
    in_pos_x: "2400",
    in_number: "2",
    rotate: "hor",
    animation: "forward",
    line_type: "link-line",
    in_status: "disabled",
  },
  {
    number: "[3]",
    group: "loc2-right",
    in_index: "loc2-2400-3",
    line_index: "link-line-loc2-2400-3",
    x: 384,
    y: 1057,
    width: 8,
    in_local: "loc2",
    in_pos_x: "2400",
    in_number: "3",
    rotate: "hor",
    animation: "forward",
    line_type: "link-line",
    in_status: "disabled",
  },
  {
    number: "[4]",
    group: "loc2-right",
    in_index: "loc2-2400-4",
    line_index: "link-line-loc2-2400-4",
    x: 416.5,
    y: 1002.5,
    width: 8,
    in_local: "loc2",
    in_pos_x: "2400",
    in_number: "4",
    rotate: "hor",
    animation: "forward",
    line_type: "link-line",
    in_status: "disabled",
  },
  {
    number: "[5]",
    group: "loc2-right",
    in_index: "loc2-2400-5",
    line_index: "link-line-loc2-2400-5",
    x: 449,
    y: 948,
    width: 7,
    in_local: "loc2",
    in_pos_x: "2400",
    in_number: "5",
    rotate: "hor",
    animation: "forward",
    line_type: "link-line",
    in_status: "disabled",
  },
  //connect line

  {
    number: "[2]",
    group: "loc2-right",
    in_index: "loc2-2400-2",
    line_index: "connect-line-loc2-2400-2",
    x: 49,
    y: 419,
    width: 63,
    in_local: "loc2",
    in_pos_x: "2400",
    in_number: "2",
    rotate: "ver",
    animation: "reverse",
    line_type: "connect-line",
    in_status: "disabled",
  },
  {
    number: "[3]",
    group: "loc2-right",
    in_index: "loc2-2400-3",
    line_index: "connect-line-loc2-2400-3",
    x: 112,
    y: 419,
    width: 63,
    in_local: "loc2",
    in_pos_x: "2400",
    in_number: "3",
    rotate: "ver",
    animation: "reverse",
    line_type: "connect-line",
    in_status: "disabled",
  },
  {
    number: "[4]",
    group: "loc2-right",
    in_index: "loc2-2400-4",
    line_index: "connect-line-loc2-2400-4",
    x: 175,
    y: 419,
    width: 63,
    in_local: "loc2",
    in_pos_x: "2400",
    in_number: "4",
    rotate: "ver",
    animation: "reverse",
    line_type: "connect-line",
    in_status: "disabled",
  },
  {
    number: "[5]",
    group: "loc2-right",
    in_index: "loc2-2400-5",
    line_index: "connect-line-loc2-2400-5",
    x: 238,
    y: 419,
    width: 63,
    in_local: "loc2",
    in_pos_x: "2400",
    in_number: "5",
    rotate: "ver",
    animation: "reverse",
    line_type: "connect-line",
    in_status: "disabled",
  },
  // start-link-line
  {
    number: "[1]",
    group: "loc2-right",
    in_index: "loc2-2400-1",
    line_index: "start-link-line-loc2-2400-1",
    x: 331,
    y: 1166,
    width: 5,
    in_local: "loc2",
    in_pos_x: "2400",
    in_number: "1",
    rotate: "hor",
    animation: "forward",
    line_type: "start-link-line",
    in_status: "disabled",
  },
];

export default Loc2Right2400Options;
