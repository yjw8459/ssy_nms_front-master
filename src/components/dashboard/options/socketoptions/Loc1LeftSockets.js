// const calLoc1LeftSocketsXY = () => {
//   let column = 0;
//   let row = 0;
//   let maxColumn = 5;
//   let maxRow = 6;
//   let x = 0;
//   let y = 0;
//   let increaseX = -57;
//   let increaseY = -33.5;
//   let spaceBetweenX = -60.8;
//   let spaceBetweenY = +34.5;

//   let startX = 668;
//   let startY = 689;

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
//         group: "loc1-left",
//         in_index: `loc1-${200 * (row + 1)}-${column + 1}`,
//         in_local: "loc1",
//         in_pos_x: `${200 * (row + 1)}`,
//         in_number: `${column + 1}`,
//         in_name: "",
//         in_device_type: "0",
//         in_status: "disabled",
//         in_image: "",
//         textLocation: "right",
//       });
//     }
//   }
//   console.table(result);
//   return result;
// };

const Loc1LeftSockets = [
  {
    number: "[1-1]",
    x: 668,
    y: 689,
    group: "loc1-left",
    in_index: "loc1-200-1",
    in_local: "loc1",
    in_pos_x: "200",
    in_number: "1",
    in_name: "",
    in_device_type: "0",
    in_status: "disabled",
    in_image: "",
    textLocation: "right",
  },
  {
    number: "[1-2]",
    x: 611,
    y: 655.5,
    group: "loc1-left",
    in_index: "loc1-200-2",
    in_local: "loc1",
    in_pos_x: "200",
    in_number: "2",
    in_name: "",
    in_device_type: "0",
    in_status: "disabled",
    in_image: "",
    textLocation: "right",
  },
  {
    number: "[1-3]",
    x: 554,
    y: 622,
    group: "loc1-left",
    in_index: "loc1-200-3",
    in_local: "loc1",
    in_pos_x: "200",
    in_number: "3",
    in_name: "",
    in_device_type: "0",
    in_status: "disabled",
    in_image: "",
    textLocation: "right",
  },
  {
    number: "[1-4]",
    x: 497,
    y: 588.5,
    group: "loc1-left",
    in_index: "loc1-200-4",
    in_local: "loc1",
    in_pos_x: "200",
    in_number: "4",
    in_name: "",
    in_device_type: "0",
    in_status: "disabled",
    in_image: "",
    textLocation: "right",
  },
  {
    number: "[1-5]",
    x: 440,
    y: 555,
    group: "loc1-left",
    in_index: "loc1-200-5",
    in_local: "loc1",
    in_pos_x: "200",
    in_number: "5",
    in_name: "",
    in_device_type: "0",
    in_status: "disabled",
    in_image: "",
    textLocation: "right",
  },
  {
    number: "[2-1]",
    x: 607.2,
    y: 723.5,
    group: "loc1-left",
    in_index: "loc1-400-1",
    in_local: "loc1",
    in_pos_x: "400",
    in_number: "1",
    in_name: "",
    in_device_type: "0",
    in_status: "disabled",
    in_image: "",
    textLocation: "right",
  },
  {
    number: "[2-2]",
    x: 550.2,
    y: 690,
    group: "loc1-left",
    in_index: "loc1-400-2",
    in_local: "loc1",
    in_pos_x: "400",
    in_number: "2",
    in_name: "",
    in_device_type: "0",
    in_status: "disabled",
    in_image: "",
    textLocation: "right",
  },
  {
    number: "[2-3]",
    x: 493.20000000000005,
    y: 656.5,
    group: "loc1-left",
    in_index: "loc1-400-3",
    in_local: "loc1",
    in_pos_x: "400",
    in_number: "3",
    in_name: "",
    in_device_type: "0",
    in_status: "disabled",
    in_image: "",
    textLocation: "right",
  },
  {
    number: "[2-4]",
    x: 436.20000000000005,
    y: 623,
    group: "loc1-left",
    in_index: "loc1-400-4",
    in_local: "loc1",
    in_pos_x: "400",
    in_number: "4",
    in_name: "",
    in_device_type: "0",
    in_status: "disabled",
    in_image: "",
    textLocation: "right",
  },
  {
    number: "[2-5]",
    x: 379.20000000000005,
    y: 589.5,
    group: "loc1-left",
    in_index: "loc1-400-5",
    in_local: "loc1",
    in_pos_x: "400",
    in_number: "5",
    in_name: "",
    in_device_type: "0",
    in_status: "disabled",
    in_image: "",
    textLocation: "right",
  },
  {
    number: "[3-1]",
    x: 546.4,
    y: 758,
    group: "loc1-left",
    in_index: "loc1-600-1",
    in_local: "loc1",
    in_pos_x: "600",
    in_number: "1",
    in_name: "",
    in_device_type: "0",
    in_status: "disabled",
    in_image: "",
    textLocation: "right",
  },
  {
    number: "[3-2]",
    x: 489.4,
    y: 724.5,
    group: "loc1-left",
    in_index: "loc1-600-2",
    in_local: "loc1",
    in_pos_x: "600",
    in_number: "2",
    in_name: "",
    in_device_type: "0",
    in_status: "disabled",
    in_image: "",
    textLocation: "right",
  },
  {
    number: "[3-3]",
    x: 432.4,
    y: 691,
    group: "loc1-left",
    in_index: "loc1-600-3",
    in_local: "loc1",
    in_pos_x: "600",
    in_number: "3",
    in_name: "",
    in_device_type: "0",
    in_status: "disabled",
    in_image: "",
    textLocation: "right",
  },
  {
    number: "[3-4]",
    x: 375.4,
    y: 657.5,
    group: "loc1-left",
    in_index: "loc1-600-4",
    in_local: "loc1",
    in_pos_x: "600",
    in_number: "4",
    in_name: "",
    in_device_type: "0",
    in_status: "disabled",
    in_image: "",
    textLocation: "right",
  },
  {
    number: "[3-5]",
    x: 318.4,
    y: 624,
    group: "loc1-left",
    in_index: "loc1-600-5",
    in_local: "loc1",
    in_pos_x: "600",
    in_number: "5",
    in_name: "",
    in_device_type: "0",
    in_status: "disabled",
    in_image: "",
    textLocation: "right",
  },
  {
    number: "[4-1]",
    x: 485.6,
    y: 792.5,
    group: "loc1-left",
    in_index: "loc1-800-1",
    in_local: "loc1",
    in_pos_x: "800",
    in_number: "1",
    in_name: "",
    in_device_type: "0",
    in_status: "disabled",
    in_image: "",
    textLocation: "right",
  },
  {
    number: "[4-2]",
    x: 428.6,
    y: 759,
    group: "loc1-left",
    in_index: "loc1-800-2",
    in_local: "loc1",
    in_pos_x: "800",
    in_number: "2",
    in_name: "",
    in_device_type: "0",
    in_status: "disabled",
    in_image: "",
    textLocation: "right",
  },
  {
    number: "[4-3]",
    x: 371.6,
    y: 725.5,
    group: "loc1-left",
    in_index: "loc1-800-3",
    in_local: "loc1",
    in_pos_x: "800",
    in_number: "3",
    in_name: "",
    in_device_type: "0",
    in_status: "disabled",
    in_image: "",
    textLocation: "right",
  },
  {
    number: "[4-4]",
    x: 314.6,
    y: 692,
    group: "loc1-left",
    in_index: "loc1-800-4",
    in_local: "loc1",
    in_pos_x: "800",
    in_number: "4",
    in_name: "",
    in_device_type: "0",
    in_status: "disabled",
    in_image: "",
    textLocation: "right",
  },
  {
    number: "[4-5]",
    x: 257.6,
    y: 658.5,
    group: "loc1-left",
    in_index: "loc1-800-5",
    in_local: "loc1",
    in_pos_x: "800",
    in_number: "5",
    in_name: "",
    in_device_type: "0",
    in_status: "disabled",
    in_image: "",
    textLocation: "right",
  },
  {
    number: "[5-1]",
    x: 424.8,
    y: 827,
    group: "loc1-left",
    in_index: "loc1-1000-1",
    in_local: "loc1",
    in_pos_x: "1000",
    in_number: "1",
    in_name: "",
    in_device_type: "0",
    in_status: "disabled",
    in_image: "",
    textLocation: "right",
  },
  {
    number: "[5-2]",
    x: 367.8,
    y: 793.5,
    group: "loc1-left",
    in_index: "loc1-1000-2",
    in_local: "loc1",
    in_pos_x: "1000",
    in_number: "2",
    in_name: "",
    in_device_type: "0",
    in_status: "disabled",
    in_image: "",
    textLocation: "right",
  },
  {
    number: "[5-3]",
    x: 310.8,
    y: 760,
    group: "loc1-left",
    in_index: "loc1-1000-3",
    in_local: "loc1",
    in_pos_x: "1000",
    in_number: "3",
    in_name: "",
    in_device_type: "0",
    in_status: "disabled",
    in_image: "",
    textLocation: "right",
  },
  {
    number: "[5-4]",
    x: 253.8,
    y: 726.5,
    group: "loc1-left",
    in_index: "loc1-1000-4",
    in_local: "loc1",
    in_pos_x: "1000",
    in_number: "4",
    in_name: "",
    in_device_type: "0",
    in_status: "disabled",
    in_image: "",
    textLocation: "right",
  },
  {
    number: "[5-5]",
    x: 196.8,
    y: 693,
    group: "loc1-left",
    in_index: "loc1-1000-5",
    in_local: "loc1",
    in_pos_x: "1000",
    in_number: "5",
    in_name: "",
    in_device_type: "0",
    in_status: "disabled",
    in_image: "",
    textLocation: "right",
  },
  {
    number: "[6-1]",
    x: 364,
    y: 861.5,
    group: "loc1-left",
    in_index: "loc1-1200-1",
    in_local: "loc1",
    in_pos_x: "1200",
    in_number: "1",
    in_name: "",
    in_device_type: "0",
    in_status: "disabled",
    in_image: "",
    textLocation: "right",
  },
  {
    number: "[6-2]",
    x: 307,
    y: 828,
    group: "loc1-left",
    in_index: "loc1-1200-2",
    in_local: "loc1",
    in_pos_x: "1200",
    in_number: "2",
    in_name: "",
    in_device_type: "0",
    in_status: "disabled",
    in_image: "",
    textLocation: "right",
  },
  {
    number: "[6-3]",
    x: 250,
    y: 794.5,
    group: "loc1-left",
    in_index: "loc1-1200-3",
    in_local: "loc1",
    in_pos_x: "1200",
    in_number: "3",
    in_name: "",
    in_device_type: "0",
    in_status: "disabled",
    in_image: "",
    textLocation: "right",
  },
  {
    number: "[6-4]",
    x: 193,
    y: 761,
    group: "loc1-left",
    in_index: "loc1-1200-4",
    in_local: "loc1",
    in_pos_x: "1200",
    in_number: "4",
    in_name: "",
    in_device_type: "0",
    in_status: "disabled",
    in_image: "",
    textLocation: "right",
  },
  {
    number: "[6-5]",
    x: 136,
    y: 727.5,
    group: "loc1-left",
    in_index: "loc1-1200-5",
    in_local: "loc1",
    in_pos_x: "1200",
    in_number: "5",
    in_name: "",
    in_device_type: "0",
    in_status: "disabled",
    in_image: "",
    textLocation: "right",
  },
];

export default Loc1LeftSockets;