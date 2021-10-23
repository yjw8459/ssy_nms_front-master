// const calLoc2RightSocketsXY = () => {
//   let column = 0;
//   let row = 0;
//   let maxColumn = 5;
//   let maxRow = 1;
//   let x = 0;
//   let y = 0;
//   let increaseX = +57;
//   let increaseY = +33.5;
//   let spaceBetweenX = -58;
//   let spaceBetweenY = +32.5;

//   let startX = 917;
//   let startY = 640;

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
//         group: "loc2-000",
//         in_index: `loc2-000-${column + 1}`,
//         in_local: "loc2",
//         in_pos_x: `000`,
//         in_number: `${column + 1}`,
//         in_name: "",
//         in_device_type: 2,
//         in_status: "open",
//         in_image: "",
//         textLocation: "right",
//       });
//     }
//   }
//   console.table(result);
//   return result;
// };

const Loc2DownSockets = [
  {
    number: "[1-1]",
    x: 917,
    y: 640,
    group: "loc2-000",
    in_index: "loc2-000-1",
    in_local: "loc2",
    in_pos_x: "000",
    in_number: "1",
    in_name: "",
    in_device_type: 0,
    in_status: "disabled",
    in_image: "",
    textLocation: "right",
  },
  {
    number: "[1-2]",
    x: 974,
    y: 673.5,
    group: "loc2-000",
    in_index: "loc2-000-2",
    in_local: "loc2",
    in_pos_x: "000",
    in_number: "2",
    in_name: "",
    in_device_type: 0,
    in_status: "disabled",
    in_image: "",
    textLocation: "right",
  },
  {
    number: "[1-3]",
    x: 1031,
    y: 707,
    group: "loc2-000",
    in_index: "loc2-000-3",
    in_local: "loc2",
    in_pos_x: "000",
    in_number: "3",
    in_name: "",
    in_device_type: 0,
    in_status: "disabled",
    in_image: "",
    textLocation: "right",
  },
  {
    number: "[1-4]",
    x: 1088,
    y: 740.5,
    group: "loc2-000",
    in_index: "loc2-000-4",
    in_local: "loc2",
    in_pos_x: "000",
    in_number: "4",
    in_name: "",
    in_device_type: 0,
    in_status: "disabled",
    in_image: "",
    textLocation: "right",
  },
  {
    number: "[1-5]",
    x: 1145,
    y: 774,
    group: "loc2-000",
    in_index: "loc2-000-5",
    in_local: "loc2",
    in_pos_x: "000",
    in_number: "5",
    in_name: "",
    in_device_type: 0,
    in_status: "disabled",
    in_image: "",
    textLocation: "right",
  },
];

export default Loc2DownSockets;
