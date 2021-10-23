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

//   let startX = 760;
//   let startY = 732;

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
//         group: "loc1-000",
//         in_index: `loc1-000-${column + 1}`,
//         in_local: "loc1",
//         in_pos_x: `000`,
//         in_number: `${column + 1}`,
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

const Loc1DownSockets = [
  {
    number: "[1-1]",
    x: 760,
    y: 732,
    group: "loc1-000",
    in_index: "loc1-000-1",
    in_local: "loc1",
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
    x: 817,
    y: 765.5,
    group: "loc1-000",
    in_index: "loc1-000-2",
    in_local: "loc1",
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
    x: 874,
    y: 799,
    group: "loc1-000",
    in_index: "loc1-000-3",
    in_local: "loc1",
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
    x: 931,
    y: 832.5,
    group: "loc1-000",
    in_index: "loc1-000-4",
    in_local: "loc1",
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
    x: 988,
    y: 866,
    group: "loc1-000",
    in_index: "loc1-000-5",
    in_local: "loc1",
    in_pos_x: "000",
    in_number: "5",
    in_name: "",
    in_device_type: 0,
    in_status: "disabled",
    in_image: "",
    textLocation: "right",
  },
];
export default Loc1DownSockets;
