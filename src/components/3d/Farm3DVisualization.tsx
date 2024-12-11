import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { Suspense } from 'react';
import FarmModel from './FarmModel';

export default function Farm3DVisualization() {
  return (
    <Canvas camera={{ position: [10, 10, 10], fov: 50 }}>
      <Suspense fallback={null}>
        <Environment preset="sunset" />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <FarmModel />
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
}
