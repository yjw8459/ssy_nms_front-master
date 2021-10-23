// const calLoc2RightSocketsXY = () => {
//     let column = 0;
//     let row = 0;
//     let maxColumn = 1;
//     let maxRow = 5;
//     let x = 0;
//     let y = 0;
//     let increaseX = -57;
//     let increaseY = -33.5;
//     let spaceBetweenX = -58;
//     let spaceBetweenY = +32.5;

//     let startX = 1586;
//     let startY = 262;

//     let result = [];

//     x = startX;
//     y = startY;
//     for (row = 0; row < maxRow; row++) {
//       x = startX + row * spaceBetweenX;
//       y = startY + row * spaceBetweenY;
//       for (column = 0; column < maxColumn; column++) {
//         result.push({
//           number: `[${row + 1}-${column + 1}]`,
//           x: column === 0 ? x : (x += increaseX),
//           y: column === 0 ? y : (y += increaseY),
//           group: "loc2-right-down",
//           in_index: `loc2-2400-${column + 1}`,
//           in_local: "loc2",
//           in_pos_x: `${200 * (row + 1)}`,
//           in_number: `${column + 1}`,
//           in_name: "",
//           in_device_type: "0",
//           in_status: "disabled",
//           in_image: "",
//           textLocation: "right",
//         });
//       }
//     }
//     console.table(result);
//     return result;
//   };

const Loc2Right2400Sockets = [
  {
    number: "[1-1]",
    x: 1586,
    y: 262,
    group: "loc2-right-down",
    in_index: "loc2-2400-1",
    in_local: "loc2",
    in_pos_x: "2400",
    in_number: "1",
    in_name: "",
    in_device_type: "0",
    in_status: "disabled",
    in_image: "",
    textLocation: "top",
  },
  {
    number: "[1-2]",
    x: 1528,
    y: 294.5,
    group: "loc2-right-down",
    in_index: "loc2-2400-2",
    in_local: "loc2",
    in_pos_x: "2400",
    in_number: "2",
    in_name: "",
    in_device_type: "0",
    in_status: "disabled",
    in_image: "",
    textLocation: "top",
  },
  {
    number: "[1-3]",
    x: 1470,
    y: 327,
    group: "loc2-right-down",
    in_index: "loc2-2400-3",
    in_local: "loc2",
    in_pos_x: "2400",
    in_number: "3",
    in_name: "",
    in_device_type: "0",
    in_status: "disabled",
    in_image: "",
    textLocation: "top",
  },
  {
    number: "[1-4]",
    x: 1412,
    y: 359.5,
    group: "loc2-right-down",
    in_index: "loc2-2400-4",
    in_local: "loc2",
    in_pos_x: "2400",
    in_number: "4",
    in_name: "",
    in_device_type: "0",
    in_status: "disabled",
    in_image: "",
    textLocation: "right",
  },
  {
    number: "[1-5]",
    x: 1354,
    y: 392,
    group: "loc2-right-down",
    in_index: "loc2-2400-5",
    in_local: "loc2",
    in_pos_x: "2400",
    in_number: "5",
    in_name: "",
    in_device_type: "0",
    in_status: "disabled",
    in_image: "",
    textLocation: "right",
  },
];
export default Loc2Right2400Sockets;
