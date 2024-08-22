import React from "react";
import { Fade } from "react-awesome-reveal";

function Hakkımızda() {
  return (
    <div className="p-6 max-w-screen-lg mx-auto mt-20">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">Ekibimiz</h1>

      <div className="flex flex-col md:flex-row items-center gap-4">
        {/* Team Member 1 */}
        <div className="flex items-center gap-4">
          <img
            className="w-20 h-20 rounded-full object-cover"
            src="/goksel-pak.jpg" // Correct path
            alt="Göksel Pak"
          />
          <Fade cascade={false} delay={200} direction="up" triggerOnce={true}>
            <div className="font-medium dark:text-white">
              <div>Göksel Pak</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                President
              </div>
            </div>
          </Fade>
        </div>

        {/* Team Member 2 */}
        <div className="flex items-center gap-4">
          <img
            className="w-20 h-20 rounded-full object-cover"
            src="/hakan-yudar.jpg" // Correct path
            alt="Hakan Yudar"
          />
          <Fade cascade={false} delay={300} direction="up" triggerOnce={true}>
            <div className="font-medium dark:text-white">
              <div>Hakan Yudar</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Vice President
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default Hakkımızda;
