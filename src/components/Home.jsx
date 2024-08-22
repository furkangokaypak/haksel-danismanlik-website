import React from "react";
import CardWithNav from "./CardWithNav";
import { Fade } from "react-awesome-reveal";

function Home() {
  return (
    <main className="flex-grow">
      <Fade triggerOnce={true} direction="up">
        <div className="mt-24"></div>
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="w-full max-w-4xl">
              <CardWithNav />
            </div>
          </div>
        </div>
      </Fade>
    </main>
  );
}

export default Home;
