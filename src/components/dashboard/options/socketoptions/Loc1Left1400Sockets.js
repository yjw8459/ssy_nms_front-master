// const calLoc2RightSocketsXY = () => {
//   let column = 0;
//   let row = 0;
//   let maxColumn = 1;
//   let maxRow = 5;
//   let x = 0;
//   let y = 0;
//   let increaseX = -57;
//   let increaseY = -33.5;
//   let spaceBetweenX = -58;
//   let spaceBetweenY = +32.5;

//   let startX = 525;
//   let startY = 870;

//   let result = [];

//   x = startX;
//   y = startY;
//   for (row = 0; row < maxRow; row++) {
//     x = startX + row * spaceBetweenX;
//     y = startY + row * spaceBetweenY;
//     for (column = 0; column < maxColumn; column++) {
//       result.push({
//         number: `[${row + 1}-${column + 1}]`,
//         x: column === 0 ? x : (x += increaseX),
//         y: column === 0 ? y : (y += increaseY),
//         group: "loc1-left-down",
//         in_index: `loc1-1400-${column + 1}`,
//         in_local: "loc1",
//         in_pos_x: `1400`,
//         in_number: `${row + 1}`,
//         in_name: "",
//         in_device_type: 0,
//         in_status: "disabled",
//         in_image: "",
//         textLocation: "right",
//       });
//     }
//   }
//   console.table(result);
//   return result;
// };

const Loc1Left1400Sockets = [
  {
    number: "[5]",
    x: 525,
    y: 875,
    group: "loc1-left-down",
    in_index: "loc1-1400-5",
    in_local: "loc1",
    in_pos_x: "1400",
    in_number: "5",
    in_name: "",
    in_device_type: 0,
    in_status: "disabled",
    in_image: "",
    textLocation: "right",
  },
  {
    number: "[4]",
    x: 467,
    y: 907.5,
    group: "loc1-left-down",
    in_index: "loc1-1400-4",
    in_local: "loc1",
    in_pos_x: "1400",
    in_number: "4",
    in_name: "",
    in_device_type: 0,
    in_status: "disabled",
    in_image: "",
    textLocation: "right",
  },
  {
    number: "[3]",
    x: 409,
    y: 940,
    group: "loc1-left-down",
    in_index: "loc1-1400-3",
    in_local: "loc1",
    in_pos_x: "1400",
    in_number: "3",
    in_name: "",
    in_device_type: 0,
    in_status: "disabled",
    in_image: "",
    textLocation: "right",
  },
  {
    number: "[2]",
    x: 351,
    y: 972.5,
    group: "loc1-left-down",
    in_index: "loc1-1400-2",
    in_local: "loc1",
    in_pos_x: "1400",
    in_number: "2",
    in_name: "",
    in_device_type: 0,
    in_status: "disabled",
    in_image: "",
    textLocation: "right",
  },
  {
    number: "[1]",
    x: 293,
    y: 1005,
    group: "loc1-left-down",
    in_index: "loc1-1400-1",
    in_local: "loc1",
    in_pos_x: "1400",
    in_number: "1",
    in_name: "",
    in_device_type: 0,
    in_status: "disabled",
    in_image: "",
    textLocation: "right",
  },
];
export default Loc1Left1400Sockets;
