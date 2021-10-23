const Loc2MainOptions = [
  // [2구간-수직선]
  {
    number: "scanner",
    group: "loc2-main",
    line_type: "link-line",
    line_index: "link-line-loc2-main-scanner",
    in_index: "loc2-start-1",
    in_local: "loc2",
    in_status: "disabled",
    rotate: "ver",
    animation: "reverse",
    x: 1103,
    y: 925,
    width: 32,
  },
  {
    number: "cctv",
    group: "loc2-main",
    line_type: "link-line",
    line_index: "link-line-loc2-main-cctv",
    in_index: "loc2-gantry-1",
    in_local: "loc2",
    in_status: "disabled",
    rotate: "ver",
    animation: "reverse",
    x: 1036,
    y: 725,
    width: 14,
  },
  // [2구간-수평선]
  {
    number: "main",
    group: "loc1-main",
    line_type: "main-line",
    line_index: "connect-line-loc2-main",
    in_index: "loc2-gantry-1",
    in_local: "loc2",
    in_status: "disabled",
    rotate: "hor",
    animation: "reverse",
    x: 776,
    y: 453,
    width: 540,
  },
];

export default Loc2MainOptions;
