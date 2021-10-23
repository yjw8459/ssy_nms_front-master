export const Tbm_extractLinesdByGroup = (location, _lineOptions) => {
  let extractedLines = [];
  extractedLines.push(
    ..._lineOptions.filter(
      (item) => item.in_local === location && item.in_pos_x === `tbm`
    )
  );
  // console.log("Tbm_extractLinesdByGroup =>", extractedLines);
  return extractedLines;
};

export const Tbm_sortSocketsByGroup = (_socketData = [], location) => {
  let newSortedGroup = [];
  newSortedGroup.push(
    ..._socketData.filter(
      (item) => item.in_local === location && item.in_pos_x === `tbm`
    )
  );
  // console.log("Tbm_sortedSocketsByGroup =>", newSortedGroup);
  return newSortedGroup;
};

export const isOpened = (socket) => {
  if (socket && socket.in_status === "open") {
    return true;
  } else {
    return false;
  }
};

// Tbm은 일차원 배열이다.
export const Tbm_lineControl = (
  extractedLines,
  sortedSocketDataByGroup,
  location
) => {
  const tbm_socket_1 = sortedSocketDataByGroup.find(
    (item) => item.in_index === `${location}-tbm-1`
  );
  const tbm_socket_2 = sortedSocketDataByGroup.find(
    (item) => item.in_index === `${location}-tbm-2`
  );
  const tbm_socket_3 = sortedSocketDataByGroup.find(
    (item) => item.in_index === `${location}-tbm-3`
  );
  const tbm_socket_4 = sortedSocketDataByGroup.find(
    (item) => item.in_index === `${location}-tbm-4`
  );
  const tbm_socket_5 = sortedSocketDataByGroup.find(
    (item) => item.in_index === `${location}-tbm-5`
  );
  const tbm_socket_6 = sortedSocketDataByGroup.find(
    (item) => item.in_index === `${location}-tbm-6`
  );
  const tbm_socket_7 = sortedSocketDataByGroup.find(
    (item) => item.in_index === `${location}-tbm-7`
  );
  const tbm_socket_8 = sortedSocketDataByGroup.find(
    (item) => item.in_index === `${location}-tbm-8`
  );

  extractedLines.map((line, index) => {
    // tbm 라인들은 거의 대부분 같이 움직인다.
    // 앞 로직에서 in_index에 종속된 라인들을 이미 동기화 시켜놓았기 때문에
    // 추가적인 로직만 설계한다.

    // 단, connect line 4, 6 은 .
    // 3이 open이면 4 connect line도 open
    // 6이 open이면 5 connect line도 open

    if (
      (line.line_type === "connect-line" &&
        line.in_index === `${location}-tbm-4` &&
        isOpened(tbm_socket_3)) ||
      (line.line_type === "connect-line" &&
        line.in_index === `${location}-tbm-5` &&
        isOpened(tbm_socket_6))
    ) {
      extractedLines.splice(index, 1, {
        ...line,
        in_status: "open",
      });
    }
    // entry line 은 전체가 closed 상태거나, disabled 상태일때 만 같이 움직인다.
    else if (line.line_type === "entry-line") {
      if (
        !isOpened(tbm_socket_1) &&
        !isOpened(tbm_socket_2) &&
        !isOpened(tbm_socket_3) &&
        !isOpened(tbm_socket_4) &&
        !isOpened(tbm_socket_5) &&
        !isOpened(tbm_socket_6) &&
        !isOpened(tbm_socket_7) &&
        !isOpened(tbm_socket_8)
      ) {
        extractedLines.splice(index, 1, {
          ...line,
          in_status: "closed",
        });
      } else if (
        isOpened(tbm_socket_1) ||
        isOpened(tbm_socket_2) ||
        isOpened(tbm_socket_3) ||
        isOpened(tbm_socket_4) ||
        isOpened(tbm_socket_5) ||
        isOpened(tbm_socket_6) ||
        isOpened(tbm_socket_7) ||
        isOpened(tbm_socket_8)
      ) {
        extractedLines.splice(index, 1, {
          ...line,
          in_status: "open",
        });
      }
    }
    // short-entry-line 은 하단 4개가 문제있을 때 같이 움직인다.
    else if (line.line_type === "short-entry-line") {
      if (
        !isOpened(tbm_socket_3) &&
        !isOpened(tbm_socket_4) &&
        !isOpened(tbm_socket_5) &&
        !isOpened(tbm_socket_6)
      ) {
        extractedLines.splice(index, 1, {
          ...line,
          in_status: "closed",
        });
      } else if (
        isOpened(tbm_socket_3) ||
        isOpened(tbm_socket_4) ||
        isOpened(tbm_socket_5) ||
        isOpened(tbm_socket_6)
      ) {
        extractedLines.splice(index, 1, {
          ...line,
          in_status: "open",
        });
      }
    }
  });
  return extractedLines;
};
