import React, { Suspense, lazy } from "react";
// import { Loader } from "semantic-ui-react";
import DashBoardContainer from "../containers/DashBoardContainer";
// const DashBoardContainer = lazy(() =>
//   import("../containers/DashBoardContainer")
// );

const MainPage = () => {
  return (
    // <Suspense fallback={<Loader active inline="centered" />}>
    <DashBoardContainer />
    // </Suspense>
  );
};

export default MainPage;
