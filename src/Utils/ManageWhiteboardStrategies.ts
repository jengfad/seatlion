import useStore from "Store";
import {
  Whiteboard,
  Shape as ShapeStrategy,
  Handler,
  DrawRectangle,
  DrawCircle,
  Text,
  ArrowHandler,
  DrawRectangleWithSeats
} from "Utils";

export const handleMouseDown = (e: React.MouseEvent<SVGSVGElement>) => {
  const type = (e.target as HTMLElement).dataset.type;
  const {
    context,
    toolInUseName,
    setFocusedComponentId,
    setWhiteboardCursor,
    setShapeEditor,
    setActiveSelection,
  } = useStore.getState();

  switch (toolInUseName) {
    case "Pan":
      setFocusedComponentId("whiteboard");
      context.setStrategy(new Whiteboard());
      context.handleMouseDown(e);
      break;

    case "Select":
      switch (type) {
        case "shape":
          context.setStrategy(new ShapeStrategy());
          context.handleMouseDown(e);
          break;

        case "handler":
          context.setStrategy(new Handler());
          context.handleMouseDown(e);
          break;

        case "whiteboard":
          setFocusedComponentId("whiteboard");
          setActiveSelection([]);
          setShapeEditor({ show: false });
          break;
      }
      break;

    case "Rectangle":
      context.setStrategy(new DrawRectangle());
      context.handleMouseDown(e);
      break;

    case "Text":
      setWhiteboardCursor("cursor-draw");
      context.setStrategy(new Text());
      context.handleMouseDown(e);
      break;

    case "Arrow":
      setWhiteboardCursor("cursor-draw");
      context.setStrategy(new ArrowHandler());
      context.handleMouseDown(e);
      break;

    case "Circle":
      context.setStrategy(new DrawCircle());
      context.handleMouseDown(e);
      break;

    case "RectangleWithSeats":
      context.setStrategy(new DrawRectangleWithSeats());
      context.handleMouseDown(e);
      break;
  }
};
