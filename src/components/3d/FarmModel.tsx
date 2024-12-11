import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

export default function FarmModel() {
  const fieldRef = useRef<Mesh>(null);
  const sensorRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (sensorRef.current) {
      sensorRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group>
      {/* Ground/Field */}
      <mesh 
        ref={fieldRef} 
        position={[0, -0.1, 0]} 
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#90EE90" />
      </mesh>

      {/* Sensor Nodes */}
      <mesh ref={sensorRef} position={[0, 0.5, 0]}>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial color="#4287f5" />
      </mesh>

      {/* Add more sensor nodes at different positions */}
      {[
        [-2, 0.5, -2],
        [2, 0.5, 2],
        [-2, 0.5, 2],
        [2, 0.5, -2],
      ].map((position, index) => (
        <mesh key={index} position={position}>
          <sphereGeometry args={[0.2, 32, 32]} />
          <meshStandardMaterial color="#4287f5" />
        </mesh>
      ))}
    </group>
  );
}
