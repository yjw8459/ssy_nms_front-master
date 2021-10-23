export const L1400_extractLinesdByGroup = (_lineOptions) => {
  let extractedLines = [];
  extractedLines.push(
    ..._lineOptions.filter(
      (item) => item.in_local === "loc1" && item.in_pos_x === `1400`
    )
  );
  // console.log("L1400_extractLinesdByGroup =>", extractedLines);
  return extractedLines;
};

export const L1400_sortSocketsByGroup = (_socketData = []) => {
  let newSortedGroup = [
    ..._socketData.filter(
      (item) => item.in_local === "loc1" && item.in_pos_x === `1400`
    ),
  ];
  // console.log("L1400_sortedSocketsByGroup =>", newSortedGroup);
  return newSortedGroup;
};

export const isOpened = (socket) => {
  if (socket && socket.in_status === "open") {
    return true;
  } else {
    return false;
  }
};

export const isNotInstalledOrDisabled = (socket) => {
  if (
    socket &&
    (socket.in_status === "not installed" || socket.in_status === "disabled")
  ) {
    return true;
  }
  return false;
};

// L1400은 일차원 배열이다.
export const L1400_lineControl = (extractedLines, sortedSocketDataByGroup) => {
  let newLines = [];

  const loc1_1400_socket_1 = sortedSocketDataByGroup.find(
    (item) => item.in_index === `loc1-1400-1`
  )
    ? sortedSocketDataByGroup.find((item) => item.in_index === `loc1-1400-1`)
    : { in_status: "disabled" };
  const loc1_1400_socket_2 = sortedSocketDataByGroup.find(
    (item) => item.in_index === `loc1-1400-2`
  )
    ? sortedSocketDataByGroup.find((item) => item.in_index === `loc1-1400-2`)
    : { in_status: "disabled" };
  const loc1_1400_socket_3 = sortedSocketDataByGroup.find(
    (item) => item.in_index === `loc1-1400-3`
  )
    ? sortedSocketDataByGroup.find((item) => item.in_index === `loc1-1400-3`)
    : { in_status: "disabled" };
  const loc1_1400_socket_4 = sortedSocketDataByGroup.find(
    (item) => item.in_index === `loc1-1400-4`
  )
    ? sortedSocketDataByGroup.find((item) => item.in_index === `loc1-1400-4`)
    : { in_status: "disabled" };
  const loc1_1400_socket_5 = sortedSocketDataByGroup.find(
    (item) => item.in_index === `loc1-1400-5`
  )
    ? sortedSocketDataByGroup.find((item) => item.in_index === `loc1-1400-5`)
    : { in_status: "disabled" };

  // newLines.push({
  //   ...line,
  //   in_status: sortedSocketDataByGroup.find(
  //     (socket) => socket.in_index === line.in_index
  //   )
  //     ? sortedSocketDataByGroup.find(
  //         (socket) => socket.in_index === line.in_index
  //       ).in_status
  //     : "disabled",
  // });

  extractedLines.map((line, index) => {
    // link sync 맞추기 link 라인은 해당 소켓에 무조건 종속이다.
    if (line.line_type === "link-line") {
      newLines.push({
        ...line,
        in_status:
          sortedSocketDataByGroup.find(
            (socket) => socket.in_index === line.in_index
          )?.in_status ?? "disabled",
      });
    }
    // connect 라인 2 > 1 에 종속
    // 3 > 4,5 에 종속
    // 4 > 5 에 종속
    else if (line.line_type === "connect-line") {
      if (
        line.in_index === "loc1-1400-2" &&
        loc1_1400_socket_1.in_status === "open"
      ) {
        newLines.push({
          ...line,
          in_status: "open",
        });
      } else if (
        line.in_index === "loc1-1400-3" &&
        (loc1_1400_socket_4.in_status === "open" ||
          loc1_1400_socket_5.in_status === "open")
      ) {
        newLines.push({
          ...line,
          in_status: "open",
        });
      } else if (
        line.in_index === "loc1-1400-4" &&
        loc1_1400_socket_5.in_status === "open"
      ) {
        newLines.push({
          ...line,
          in_status: "open",
        });
      }
    } else if (line.line_type === "start-link-line") {
      if (
        !isOpened(loc1_1400_socket_1) &&
        !isOpened(loc1_1400_socket_2) &&
        !isOpened(loc1_1400_socket_3) &&
        !isOpened(loc1_1400_socket_4) &&
        !isOpened(loc1_1400_socket_5)
      ) {
        isNotInstalledOrDisabled(loc1_1400_socket_1) &&
        isNotInstalledOrDisabled(loc1_1400_socket_2) &&
        isNotInstalledOrDisabled(loc1_1400_socket_3) &&
        isNotInstalledOrDisabled(loc1_1400_socket_4) &&
        isNotInstalledOrDisabled(loc1_1400_socket_5)
          ? newLines.push({
              ...line,
              in_status: "not installed",
            })
          : newLines.push({
              ...line,
              in_status: "closed",
            });
      } else if (
        isOpened(loc1_1400_socket_1) ||
        isOpened(loc1_1400_socket_2) ||
        isOpened(loc1_1400_socket_3) ||
        isOpened(loc1_1400_socket_4) ||
        isOpened(loc1_1400_socket_5)
      ) {
        newLines.push({
          ...line,
          in_status: "open",
        });
      }
    }
  });
  // console.log("newLines L1400=>", newLines);
  return newLines;
};
