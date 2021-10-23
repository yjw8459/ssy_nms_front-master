export const Down_extractLinesdByGroup = (location, _lineOptions) => {
  let extractedLines = [];
  extractedLines.push(
    ..._lineOptions.filter(
      (item) => item.in_local === location && item.in_pos_x === `0`
    )
  );
  // console.log("Down_extractLinesdByGroup =>", extractedLines);
  return extractedLines;
};

export const Down_sortSocketsByGroup = (_socketData = [], location) => {
  let newSortedGroup = [
    ..._socketData.filter(
      (item) => item.in_local === location && item.in_pos_x === `0`
    ),
  ];
  // console.log("Down_sortedSocketsByGroup =>", newSortedGroup);
  return newSortedGroup;
};

export const Down_extractMaxOpenedStartLine = (socketGroup = []) => {
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

// down은 일차원 배열이다.
export const Down_lineControl = (extractedLines, sortedSocketDataByGroup) => {
  let newLines = [];

  let maxOpenedLevel = 0;
  // 최대 오픈된 값 추출
  if (sortedSocketDataByGroup.length === 0) {
    maxOpenedLevel = 0;
  } else {
    maxOpenedLevel = Down_extractMaxOpenedStartLine(sortedSocketDataByGroup);
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
    }
  });
  // console.log("newLines Down=>", newLines);
  return newLines;
};
