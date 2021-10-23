// sortSocketsByGroup : 소켓 데이터를 그룹별로 정렬하여, 2차원 배열로 반환합니다.
// 파라미터
//1. _socketData : 원본 소켓 데이터
//2. location : "loc1" || "loc2"
//3. maxCount : loc1 : 200~1200m, 6개 // loc2 : 200~2200, 11개
export const LR_sortSocketsByGroup = (_socketData = [], location) => {
  let newSortedGroup = [];
  let maxCount = 0;
  if (location === "loc1") {
    maxCount = 6;
  }
  if (location === "loc2") {
    maxCount = 11;
  }
  for (let count = 0; count <= maxCount; count++) {
    let meter = (count + 1) * 200;
    // console.log("meter -> ", meter);
    newSortedGroup.push(
      _socketData.filter(
        (item) => item.in_local === location && item.in_pos_x === `${meter}`
      )
    );
  }
  // console.log("LR_sortedSocketsByGroup =>", newSortedGroup);
  return newSortedGroup;
};

// extractMaxOpenedLevelSocket : (세로)정렬된 2차원 배열에서 가장 높은 in_number값을 추출합니다.
export const LR_extractMaxOpenedLevelSocket = (socketGroup = []) => {
  let maxOpenedLevel = 0;
  for (let k = 0; k <= socketGroup.length; k++) {
    if (socketGroup && socketGroup[k] && socketGroup[k].in_status === "open") {
      maxOpenedLevel = k + 1; // in_number는 1부터 시작하기에 +1
    }
  }
  // console.log("LR_extractMaxOpenedLevelSocket =>", maxOpenedLevel);
  return maxOpenedLevel;
};

//extractMaxOpenedStartLine: (가로)정렬된 2차열배열에서 [0] 번째 인덱스를 순환하면서 open값을 체크합니다.
export const LR_extractMaxOpenedStartLine = (socketGroup = [], location) => {
  let maxOpenedLevel = 0;
  let maxCount = 0;
  if (location === "loc1") {
    maxCount = 6;
  }
  if (location === "loc2") {
    maxCount = 11;
  }
  for (let count = 0; count < maxCount; count++) {
    if (
      socketGroup[count] &&
      socketGroup[count][0] &&
      socketGroup[count][0].in_status === "open"
    ) {
      maxOpenedLevel = count;
    }
  }
  return maxOpenedLevel;
};

export const LR_changeLines = (line, sortedSocketDataByGroup) => {
  let newLine = {
    ...line,
    in_status:
      sortedSocketDataByGroup.find(
        (socket) => socket.in_index === line.in_index
      ) &&
      sortedSocketDataByGroup.find(
        (socket) => socket.in_index === line.in_index
      ).in_status,
  };
  // console.log("LR_changeLines =>", newLine);
  return newLine;
};

// 1. 그룹별로 추출
// in_index 로 찾아야 함.
// 1구간. 200 ~ 1200, 6번
// 2구간. 200 ~ 2200, 11번
// includes.
// [[],[],[],[],[],[]...] 2차원 배열로

// extractLinesByGroup : 그룹별로 종속된 라인들을 추출합니다.
export const LR_extractLinesByGroup = (location, _lineOptions) => {
  let extractedLines = [];
  let maxCount = 0;
  if (location === "loc1") {
    maxCount = 6;
  }
  if (location === "loc2") {
    maxCount = 11;
  }
  for (let count = 0; count <= maxCount; count++) {
    let meter = (count + 1) * 200;
    extractedLines.push(
      _lineOptions.filter(
        (item) => item.in_local === location && item.in_pos_x === `${meter}`
      )
    );
  }
  // console.log("LR_extractLinesByGroup =>", extractedLines);
  return extractedLines;
};

export const LR_lineControl = (
  extractedLines,
  sortedSocketDataByGroup,
  location
) => {
  let newLines = [];

  let maxCount = 0;
  if (location === "loc1") {
    maxCount = 6;
  }
  if (location === "loc2") {
    maxCount = 11;
  }

  for (let count = 0; count < maxCount; count++) {
    // level의 최대 open된 level 파악
    let maxOpenedLevel = 0;
    if (sortedSocketDataByGroup[count].length === 0) {
      maxOpenedLevel = 0;
    } else if (sortedSocketDataByGroup[count].length === 1) {
      sortedSocketDataByGroup[count].in_status === "open"
        ? (maxOpenedLevel = 1)
        : (maxOpenedLevel = 0);
    } else {
      maxOpenedLevel = LR_extractMaxOpenedLevelSocket(
        sortedSocketDataByGroup[count]
      );
      // console.log(maxOpenedLevel);
    }
    let maxOpenedStartLine = LR_extractMaxOpenedStartLine(
      sortedSocketDataByGroup,
      location
    );
    extractedLines[count].map((line) => {
      // 예외사항 : 소켓이 1개 밖에 없을 때나
      // maxOpenedStartLine 이상의 그룹에서,
      if (sortedSocketDataByGroup[count].length === 1) {
        if (
          line.line_type === "start-link-line" ||
          line.line_type === "link-line" ||
          line.line_type === "start-short-link-line"
        ) {
          // 위 세개 라인 동기화
          newLines.push(LR_changeLines(line, sortedSocketDataByGroup[count]));
        }
      }
      // 소켓이 1개 이상있을 때
      else if (
        line.line_type === "link-line" ||
        line.line_type === "start-short-link-line"
      ) {
        newLines.push(LR_changeLines(line, sortedSocketDataByGroup[count]));
      } else if (
        line.line_type === "connect-line" ||
        line.line_type === "bridge-line" ||
        (line.line_type === "start-link-line" && count <= maxOpenedStartLine)
      ) {
        if (
          sortedSocketDataByGroup[count].length === 2 &&
          sortedSocketDataByGroup[count][1].in_status === "closed" &&
          line.in_number === "2"
        ) {
          newLines.push({ ...line, in_status: "closed" });
        }
        // 2-2 최대 open 된 라인까지 connect 라인 동기화.
        else if (line.in_number > 1 && line.in_number <= maxOpenedLevel) {
          newLines.push({ ...line, in_status: "open" });
        } else {
          if (
            // 만약 정렬된 소켓데이터에서 라인 인덱스와 일치하는게 없을 경우,
            // 해당 라인은 disabled 상태로 간주한다.
            sortedSocketDataByGroup[count].findIndex(
              (item) => item.in_index === line.in_index
            ) === -1
          ) {
            newLines.push({ ...line, in_status: "disabled" });
          } else {
            //나머지 closed, not installed, disabled 상태로 놓아두기
            let find_status_result = sortedSocketDataByGroup[count].find(
              (socket) => socket.in_index === line.in_index
            ).in_status;
            // console.log(find_status_result);
            newLines.push({
              ...line,
              in_status: find_status_result,
            });
          }
        }
      }
      // start-line, start-line-line 컨트롤
      if (line.line_type === "start-line") {
        if (count > maxOpenedStartLine) {
          if (maxOpenedLevel <= 1) {
            newLines.push({
              ...line,
              in_status: sortedSocketDataByGroup[count][0].in_status,
            });
          }
        } else {
          newLines.push({
            ...line,
            in_status: count <= maxOpenedStartLine ? "open" : "closed",
          });
        }
      } else if (line.line_type === "start-link-line") {
        if (count > maxOpenedStartLine) {
          if (maxOpenedLevel <= 1) {
            newLines.push({
              ...line,
              in_status: sortedSocketDataByGroup[count][0].in_status,
            });
          } else {
            newLines.push({
              ...line,
              in_status: "open",
            });
          }
        }
      }
    });
  }

  // console.log(
  //   "%c%s",
  //   "color: red; background: sky; font-size: 15px;",
  //   `제어된 라인 객체들 (하단).`
  // );
  // console.table(newLines);
  return newLines;
};

export const LR_syncStartLineEqualsTbm = (
  newLines,
  loc1_tbm_isOpen,
  loc2_tbm_isOpen
) => {
  newLines.map((item, index) => {
    // 예외 ! start-line은 각 tbm 라인에 종속된다.
    // tbm이 켜져있으면 전부 open, tbm이 꺼져있으면 open을 제외하고 closed 상태를 반영
    // 이때 tbm 켜짐 유무는 각 tbm entry 라인에 맞춰주면 된다.

    if (
      item.in_local === "loc1" &&
      item.group === "loc1-left" &&
      item.line_type === "start-line"
    ) {
      newLines.splice(index, 1, {
        ...item,
        in_status: loc1_tbm_isOpen ? "open" : "closed",
      });
    } else if (
      item.in_local === "loc2" &&
      item.group === "loc2-right" &&
      item.line_type === "start-line"
    ) {
      // console.log("line ===>", item);
      newLines.splice(index, 1, {
        ...item,
        in_status: loc2_tbm_isOpen ? "open" : "closed",
      });
    } else if (
      item.in_local === "loc1" &&
      item.line_type === "last-start-line"
    ) {
      newLines.splice(index, 1, {
        ...item,
        in_status: loc1_tbm_isOpen ? "open" : "closed",
      });
    } else if (
      item.in_local === "loc2" &&
      item.line_type === "last-start-line"
    ) {
      newLines.splice(index, 1, {
        ...item,
        in_status: loc2_tbm_isOpen ? "open" : "closed",
      });
    }
  });
  return newLines;
};
