import React, { useState } from "react";
import ReactPlayer from "react-player";
import AdvancedFilter from "./AdvancedFilter";

export default function AllShowing() {
  const [handleTrailer] = useState(
    "https://www.youtube.com/watch?v=oUFJJNQGwhk"
  );

  return (
    <div>
      <AdvancedFilter />
      <div>
        <h1>Video Player:</h1>
        <ReactPlayer url={handleTrailer} />
      </div>
    </div>
  );
}
