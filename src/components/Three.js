import React,{Suspense} from "react";
import {Canvas,useLoader} from "react-three-fiber";
import {OrbitControls, Stars} from "@react-three/drei";
import {TextureLoader}   from "three/src/loaders/TextureLoader";
import texture from "../assets/img/texture.jpg"
 
function Box() {
    const colormap = useLoader(TextureLoader,texture);
    return (
    <mesh>
            <boxBufferGeometry attach="geometry" args={[3,3,3]}/>
            <meshStandardMaterial map={colormap}/>
    </mesh>
     );
}


export default function Three() {
    return ( 
        <Canvas className="canvas">
            <OrbitControls enableZoom={false}/>
            <ambientLight intensity={0.5} />
            <directionalLight position={[-2,5,2]} intensity={1} />
            <Suspense fallback={null}>
            <Box />
            </Suspense>
        </Canvas>
     );
}


