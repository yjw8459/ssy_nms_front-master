import React, { useCallback } from "react";
import Layer from "../styledcomponents/map/Layer";
import Static from "../styledcomponents/map/Static";

const StaticLayer = ({ StaticOptions }) => {
  const staticLayerRender = useCallback(() => {
    if (StaticOptions) {
      return StaticOptions.map((item, index) => {
        return (
          <Static
            staticOptions={item}
            className={`static ` + item.index}
            key={`static` + index}
          />
        );
      });
    }
  }, [StaticOptions]);
  return (
    <Layer className={"static-layer"} layer={"static-layer"}>
      {staticLayerRender()}
    </Layer>
  );
};

export default React.memo(StaticLayer);
