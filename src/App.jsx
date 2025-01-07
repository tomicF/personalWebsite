import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
import "./App.css";

function Model(props) {
  const { scene } = useGLTF("/devLogo.glb");
  return <primitive object={scene} {...props} />;
}

function App() {
  return (
    <>
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
            <Model scale={0.01} />
          </Stage>
        </PresentationControls>
      </Canvas>
    </>
  );
}

export default App;
