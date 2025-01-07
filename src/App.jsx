import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
import "./App.css";

function ModelDevLogo(props) {
  const { scene } = useGLTF("/devLogo.glb");
  return <primitive object={scene} {...props} />;
}

function ModelMapPin(props) {
  const { scene } = useGLTF("/mapPin.glb");
  return <primitive object={scene} {...props} />;
}

function ModelGdev(props) {
  const { scene } = useGLTF("/gdevModel.glb");
  return <primitive object={scene} {...props} />;
}

function ModelTasks(props) {
  const { scene } = useGLTF("/toDoAppModel.glb");
  return (
    <primitive object={scene} {...props} rotation={[0, Math.PI / -2, 0]} />
  );
}

function App() {
  return (
    <>
      {/* DEV MODEL AND HEADER */}
      <div>
        <div>
          <p className="myNameIs">my name is</p>
          <p className="myName">Filip Tomic</p>
          <p className="mydescription">
            I’m a high school student and aspiring developer from Sarajevo. I
            enjoy building projects with code. My goal is to inspire others
            through tech and contribute to education in Bosnia and Herzegovina.
            Let’s build something awesome! 🚀
          </p>
        </div>

        <Canvas
          dpr={[1, 2]}
          camera={{ fov: 45 }}
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "60%",
            height: "100%",
          }}
        >
          <color attach="background" args={["#000000"]} />
          <PresentationControls
            speed={1.5}
            global
            zoom={0.5}
            polar={[-0.1, Math.PI / 4]}
          >
            <Stage environment={"city"} shadows={false}>
              <ModelDevLogo scale={0.01} />
            </Stage>
          </PresentationControls>
        </Canvas>
      </div>
      {/* MAP PIN MODEL AND DESCRIPTION */}
      <div>
        <Canvas
          dpr={[1, 2]}
          camera={{ fov: 45 }}
          style={{
            position: "absolute",
            bottom: "-360px",
            left: "80px",
            width: "30%",
            height: "50%",
          }}
        >
          <color attach="background" args={["#000000"]} />
          <PresentationControls
            speed={1.5}
            global
            zoom={0.5}
            polar={[-0.1, Math.PI / 4]}
          >
            <Stage environment={"city"} shadows={false}>
              <ModelMapPin scale={0.01} />
            </Stage>
          </PresentationControls>
        </Canvas>
        <div>
          <p className="balkanDescription">
            The{" "}
            <a href="https://github.com/tomicF/tripBalkan">Balkan Trip app</a>{" "}
            helps tourists explore Sarajevo and the Balkans, discover landmarks,
            and complete challenges. Built with React Native, it offers a
            seamless experience across iOS and Android, combining culture,
            history, and adventure for an unforgettable journey.
          </p>
        </div>
      </div>

      {/* GDEV PIN AND DESCRIPTION */}
      <div>
        <Canvas
          dpr={[1, 2]}
          camera={{ fov: 45 }}
          style={{
            position: "absolute",
            bottom: "-840px",
            left: "120px",
            width: "30%",
            height: "50%",
          }}
        >
          <color attach="background" args={["#000000"]} />
          <PresentationControls
            speed={1.5}
            global
            zoom={0.5}
            polar={[-0.1, Math.PI / 4]}
          >
            <Stage environment={"city"} shadows={false}>
              <ModelGdev scale={0.01} />
            </Stage>
          </PresentationControls>
        </Canvas>
        <div>
          <p className="gdevDescription">
            Developed with GDevelop, this 3D game follows the journey of an
            office worker as he explores the world beyond his desk. With a
            strong focus on narrative, the game invites players to immerse
            themselves in a story-driven experience filled with exploration and
            discovery.
          </p>
        </div>
      </div>

      {/* TO DO APP PIN AND DESCRIPTION */}
      <div>
        <Canvas
          dpr={[1, 2]}
          camera={{ fov: 45 }}
          style={{
            position: "absolute",
            bottom: "-1400px",
            left: "120px",
            width: "30%",
            height: "50%",
          }}
        >
          <color attach="background" args={["#000000"]} />
          <PresentationControls
            speed={1.5}
            global
            zoom={0.5}
            polar={[-0.1, Math.PI / 4]}
          >
            <Stage environment={"city"} shadows={false}>
              <ModelTasks scale={0.01} />
            </Stage>
          </PresentationControls>
        </Canvas>
        <div>
          <p className="toDoDescription">
            This <a href="https://github.com/tomicF/todoApp">to-do app</a> helps
            users stay organized and on top of their tasks. Built with React
            Native, it features a clean and intuitive interface that allows easy
            task management, with reminders, priority settings, and task
            categories to streamline productivity across both iOS and Android
            devices.
          </p>
        </div>
        <p className="more">
          ... <a href="https://github.com/tomicF">more</a>
        </p>
        <div class="line"></div>

        <p className="info">
          <a href="mailto:filetomic2008@gmail.com">email</a> & +38761385312
        </p>
      </div>
    </>
  );
}

export default App;
