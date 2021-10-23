export const R2400_extractLinesdByGroup = (_lineOptions) => {
  let extractedLines = [];
  extractedLines.push(
    ..._lineOptions.filter(
      (item) => item.in_local === "loc2" && item.in_pos_x === `2400`
    )
  );
  // console.log("R2400_extractLinesdByGroup =>", extractedLines);
  return extractedLines;
};

export const R2400_sortSocketsByGroup = (_socketData = []) => {
  let newSortedGroup = [
    ..._socketData.filter(
      (item) => item.in_local === "loc2" && item.in_pos_x === `2400`
    ),
  ];
  // console.log("R2400_sortedSocketsByGroup =>", newSortedGroup);
  return newSortedGroup;
};

export const R2400_extractMaxOpenedStartLine = (socketGroup = []) => {
  let maxOpenedLevel = 0;
  let maxCount = 5;
  for (let count = 0; count < maxCount; count++) {
    if (socketGroup[count] && socketGroup[count].in_status === "open") {
      maxOpenedLevel = count + 1;
    }
  }
  // console.log("maxOpenedLevel=>", maxOpenedLevel);
  return maxOpenedLevel;
};

// R2400은 일차원 배열이다.
export const R2400_lineControl = (extractedLines, sortedSocketDataByGroup) => {
  let newLines = [];

  let maxOpenedLevel = 0;
  // 최대 오픈된 값 추출
  if (sortedSocketDataByGroup.length === 0) {
    maxOpenedLevel = 0;
  } else {
    maxOpenedLevel = R2400_extractMaxOpenedStartLine(sortedSocketDataByGroup);
  }

  // console.log("maxOpenedLevel 레벨 ", maxOpenedLevel);

  extractedLines.map((line, index) => {
    // link sync 맞추기 link 라인은 해당 소켓에 무조건 종속이다.
    if (line.line_type === "link-line") {
      newLines.push({
        ...line,
        in_status: sortedSocketDataByGroup.find(
          (socket) => socket.in_index === line.in_index
        )
          ? sortedSocketDataByGroup.find(
              (socket) => socket.in_index === line.in_index
            ).in_status
          : "disabled",
      });
    }
    // connect 라인은 최대 open 된 라인까지 열어준다.
    else if (
      line.line_type === "connect-line" &&
      line.in_number <= maxOpenedLevel
    ) {
      newLines.push({
        ...line,
        in_status: "open",
      });
    } else if (line.line_type === "start-link-line") {
      newLines.push({
        ...line,
        in_status:
          maxOpenedLevel === 0
            ? sortedSocketDataByGroup.find(
                (socket) => socket.in_status === "closed"
              )
              ? "closed"
              : "not installed"
            : "open",
      });
    }
  });
  // console.log("newLines R2400=>", newLines);
  return newLines;
};
