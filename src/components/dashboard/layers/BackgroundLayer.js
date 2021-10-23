import React, { useCallback } from "react";
import Layer from "../styledcomponents/map/Layer";

const BackgroundLayer = () => {
  const backgroundLayerRenderer = useCallback(() => {
    return <Layer className={"background-layer"} layer={"background-layer"} />;
  }, []);
  return backgroundLayerRenderer();
};

export default React.memo(BackgroundLayer);
