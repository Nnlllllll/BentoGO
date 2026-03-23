import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const modelPath = require("./assets/Bentao.glb");

function Modelo() {
  const { scene } = useGLTF(modelPath);

  // FORÇA tudo
  scene.position.set(0, 0, 0);
  scene.scale.set(10, 10, 10);

  return <primitive object={scene} />;
}

export default function App() {
  return (
    <Canvas camera={{ position: [0, 0, 15] }}>
      <ambientLight intensity={2} />
      <directionalLight position={[5, 5, 5]} intensity={3} />

      <Modelo />
      <OrbitControls />
    </Canvas>
  );
}