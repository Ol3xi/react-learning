import { useState } from "react";

type Prop = {
  start?: number;
  step?: number;
}


const CardCounter = ({start = 0, step = 1}:Prop) => {
  const [value, setValue] = useState(start)
  return (
    <div className="grid grid-cols-6 h-56 content-center">
        <div className="col-start-1 col-end-3 bg-amber-500 p-15">
            <div className="flex justify-center text-white">
                <h1 className="text-8xl">{value}</h1>
            </div>
            <div className="flex justify-center gap-2 pt-5 pb-0">
                <button className="border-2 pl-5 pr-5 text-2xl text-white rounded-lg" onClick={() => setValue(value + step)}>Increment</button>
                <button className="border-2 pl-5 pr-5 text-2xl text-white rounded-lg" onClick={() => setValue(value - step)}>Decrement</button>
            </div>
        </div>
    </div>
  )
}

export default CardCounter
