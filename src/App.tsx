import { 
  Overlay,
  Board as Whiteboard,
  ToolBox,
  ZoomIndicator
} from "Components";

function App() {
  return (
    <div className="flex flex-row w-full h-full relative select-none">
      <Overlay></Overlay>
      <Whiteboard></Whiteboard>
      <ToolBox />
      <ZoomIndicator />
    </div>
  )
}

export default App
