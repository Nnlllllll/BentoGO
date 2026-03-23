import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import modelPath from "./assets/Bentao.glb";

function Modelo() {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} scale={1.5} />;
}

export default function App() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} />
      <Modelo />
      <OrbitControls />
    </Canvas>
  );
}