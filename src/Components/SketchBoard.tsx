import { Circle, Connector, Rectangle, Shape, Text } from "Components/Shapes";
import { memo } from "react";

import { Collaboration, Resizer } from "Components";
import useStore from "Store";
import RectangleWithSeats from "./Shapes/RectangleWithSeats";

export const SketchBoard = memo(() => {
  const { board, activeSelection } = useStore();
  const isSelected = (id: string) => activeSelection.includes(id);

  return (
    <>
      <g>
        {board.map(({ id, type, props }) => {
          const commonProps = {
            ...props,
            stroke: isSelected(id) ? "blue" : props.stroke,
            strokeWidth: isSelected(id) ? 2 : props.strokeWidth,
          };

          switch (type) {
            case "rectangle":
              return <Rectangle {...commonProps} key={id} id={id} rx="8" />;

            case "circle":
              return <Circle key={id} id={id} {...commonProps} />;

            case "text":
              return <Text key={id} id={id} {...props} />;

            case "shape":
              return <Shape key={id} id={id} {...props} />;

            case "connector":
              return <Connector key={id} id={id} {...props} />;

            case "rectangleWithSeats":
              return <RectangleWithSeats numberOfSeats={15} />;

            default:
              return <></>;
          }
        })}
      </g>
      <g>
        <Resizer />
      </g>
      <Collaboration />
    </>
  );
});
