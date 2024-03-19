import {
  OrbitControls,
  //  useHelper
} from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useRef } from "react";
import {
  PerspectiveCamera,
  // PointLightHelper
} from "three";

export function ShowCoordinates({ coors }: { coors: number[] }) {
  {
    return coors.map((x) =>
      coors.map((c) => {
        return (
          <mesh key={`${x}-${c}`} position={[x, c, 0]}>
            <axesHelper />
            <sphereGeometry args={[0.1]} />
            <meshBasicMaterial color={"#000"} />
          </mesh>
        );
      })
    );
  }
}
export function Controls() {
  const {
    camera,
    gl: { domElement },
  } = useThree();

  return <OrbitControls args={[camera, domElement]} />;
}
export function CameraHelper() {
  const camera = new PerspectiveCamera();
  return <cameraHelper args={[camera]} />;
}

export function Lights() {
  const lightRef = useRef<any>();
  const lightRef1 = useRef<any>();
  // useHelper(lightRef, PointLightHelper, 1, "#ff0f0f");
  // useHelper(lightRef1, PointLightHelper, 1, "#39ff14");
  return (
    <>
      <pointLight
        intensity={100}
        color={"#39ff14"}
        ref={lightRef1}
        position={[0, -8, 0]}
      />
      <pointLight
        intensity={50}
        color={"#ff0f0f"}
        position={[7, 0, 0]}
        ref={lightRef}
      />
    </>
  );
}