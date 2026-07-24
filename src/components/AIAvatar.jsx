import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/* ── Skin tone palette ── */
const SKIN   = '#c8956c';
const SKIN_D = '#a0704a';
const HAIR   = '#1a0a00';
const SHIRT  = '#0f0f1a';
const SHIRT_A= '#7C3AED';
const EYE_W  = '#f0f0f0';
const IRIS_L = '#06B6D4';
const IRIS_R = '#7C3AED';
const LIP    = '#b56050';

const AvatarMesh = ({ isSpeaking }) => {
  const rootRef   = useRef();
  const headRef   = useRef();
  const jawRef    = useRef();
  const irisLRef  = useRef();
  const irisRRef  = useRef();
  const lidLRef   = useRef();
  const lidRRef   = useRef();
  const bodyRef   = useRef();

  const mouse      = useRef({ x: 0, y: 0 });
  const blinkTimer = useRef(0);
  const blinkState = useRef(0); // 0=open 1=closing 2=opening

  useEffect(() => {
    const mv = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth)  * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', mv);
    return () => window.removeEventListener('mousemove', mv);
  }, []);

  useFrame((_, delta) => {
    const t = performance.now() * 0.001;

    /* floating + breathing */
    if (rootRef.current) {
      rootRef.current.position.y = Math.sin(t * 1.1) * 0.07;
      rootRef.current.rotation.z = Math.sin(t * 0.7) * 0.008;
    }
    if (bodyRef.current) {
      bodyRef.current.scale.y = 1 + Math.sin(t * 1.1) * 0.012;
    }

    /* head cursor follow */
    if (headRef.current) {
      headRef.current.rotation.y += (mouse.current.x * 0.38 - headRef.current.rotation.y) * 0.07;
      headRef.current.rotation.x += (-mouse.current.y * 0.22 - headRef.current.rotation.x) * 0.07;
    }

    /* iris cursor follow */
    const tx = mouse.current.x * 0.06;
    const ty = mouse.current.y * 0.04;
    [irisLRef, irisRRef].forEach(r => {
      if (r.current) {
        r.current.position.x += (tx + (r === irisLRef ? -0.095 : 0.095) - r.current.position.x) * 0.12;
        r.current.position.y += (ty + 0.02 - r.current.position.y) * 0.12;
      }
    });

    /* blink */
    blinkTimer.current += delta;
    if (blinkState.current === 0 && blinkTimer.current > 3 + Math.random() * 2) {
      blinkState.current = 1;
      blinkTimer.current = 0;
    }
    if (blinkState.current === 1) {
      [lidLRef, lidRRef].forEach(r => { if (r.current) r.current.scale.y = Math.max(0.04, r.current.scale.y - 0.18); });
      if (lidLRef.current && lidLRef.current.scale.y <= 0.04) blinkState.current = 2;
    }
    if (blinkState.current === 2) {
      [lidLRef, lidRRef].forEach(r => { if (r.current) r.current.scale.y = Math.min(1, r.current.scale.y + 0.16); });
      if (lidLRef.current && lidLRef.current.scale.y >= 1) blinkState.current = 0;
    }

    /* jaw / lip sync */
    if (jawRef.current) {
      const target = isSpeaking ? Math.abs(Math.sin(t * 12)) * 0.07 : 0;
      jawRef.current.position.y += ((-0.54 - target) - jawRef.current.position.y) * 0.25;
    }
  });

  return (
    <group ref={rootRef} position={[0, 0, 0]}>

      {/* ── NECK ── */}
      <mesh position={[0, -0.72, 0]}>
        <cylinderGeometry args={[0.19, 0.22, 0.42, 20]} />
        <meshStandardMaterial color={SKIN} roughness={0.7} />
      </mesh>

      {/* ── HEAD GROUP ── */}
      <group ref={headRef}>

        {/* Skull */}
        <mesh position={[0, 0, 0]} scale={[1, 1.12, 0.95]}>
          <sphereGeometry args={[0.56, 36, 36]} />
          <meshStandardMaterial color={SKIN} roughness={0.65} metalness={0.02} />
        </mesh>

        {/* Cheekbone shade */}
        <mesh position={[0.28, -0.08, 0.38]} scale={[0.28, 0.18, 0.1]}>
          <sphereGeometry args={[1, 16, 16]} />
          <meshStandardMaterial color={SKIN_D} roughness={0.9} transparent opacity={0.4} />
        </mesh>
        <mesh position={[-0.28, -0.08, 0.38]} scale={[0.28, 0.18, 0.1]}>
          <sphereGeometry args={[1, 16, 16]} />
          <meshStandardMaterial color={SKIN_D} roughness={0.9} transparent opacity={0.4} />
        </mesh>

        {/* Forehead highlight */}
        <mesh position={[0, 0.22, 0.5]} scale={[0.32, 0.18, 0.05]}>
          <sphereGeometry args={[1, 12, 12]} />
          <meshStandardMaterial color="#e8b08a" roughness={0.5} transparent opacity={0.35} />
        </mesh>

        {/* ── EYE SOCKETS ── */}
        {[[-0.175, 0.09, 0.5], [0.175, 0.09, 0.5]].map(([x, y, z], i) => (
          <group key={i} position={[x, y, z]}>
            {/* White */}
            <mesh>
              <sphereGeometry args={[0.095, 24, 24]} />
              <meshStandardMaterial color={EYE_W} roughness={0.1} />
            </mesh>
            {/* Iris */}
            <mesh ref={i === 0 ? irisLRef : irisRRef} position={[i === 0 ? -0.095 : 0.095, 0.02, 0.065]}>
              <circleGeometry args={[0.048, 24]} />
              <meshBasicMaterial color={i === 0 ? IRIS_L : IRIS_R} />
            </mesh>
            {/* Pupil */}
            <mesh position={[i === 0 ? -0.093 : 0.093, 0.02, 0.07]}>
              <circleGeometry args={[0.022, 16]} />
              <meshBasicMaterial color="#040408" />
            </mesh>
            {/* Eyelid */}
            <mesh ref={i === 0 ? lidLRef : lidRRef} position={[0, 0.042, 0.07]} scale={[1, 1, 1]}>
              <sphereGeometry args={[0.1, 20, 10, 0, Math.PI * 2, 0, Math.PI * 0.5]} />
              <meshStandardMaterial color={SKIN} roughness={0.6} side={THREE.FrontSide} />
            </mesh>
            {/* Lashes line */}
            <mesh position={[0, 0.084, 0.066]}>
              <boxGeometry args={[0.19, 0.018, 0.01]} />
              <meshBasicMaterial color="#0a0408" />
            </mesh>
          </group>
        ))}

        {/* ── EYEBROWS ── */}
        {[[-0.175, 0.22, 0.5], [0.175, 0.22, 0.5]].map(([x, y, z], i) => (
          <mesh key={i} position={[x, y, z]} rotation={[0, 0, i === 0 ? 0.1 : -0.1]}>
            <boxGeometry args={[0.17, 0.022, 0.012]} />
            <meshStandardMaterial color={HAIR} roughness={0.8} />
          </mesh>
        ))}

        {/* ── NOSE ── */}
        <mesh position={[0, -0.06, 0.54]} scale={[0.6, 0.9, 0.6]}>
          <sphereGeometry args={[0.072, 16, 16]} />
          <meshStandardMaterial color={SKIN_D} roughness={0.8} />
        </mesh>
        <mesh position={[0, -0.04, 0.535]}>
          <boxGeometry args={[0.015, 0.1, 0.025]} />
          <meshStandardMaterial color={SKIN} roughness={0.7} />
        </mesh>

        {/* ── LIPS & JAW (jaw moves for speech) ── */}
        <group ref={jawRef} position={[0, -0.54, 0]}>
          {/* Upper lip */}
          <mesh position={[0, 0.022, 0.515]}>
            <boxGeometry args={[0.21, 0.032, 0.04]} />
            <meshStandardMaterial color={LIP} roughness={0.6} />
          </mesh>
          {/* Lower lip */}
          <mesh position={[0, -0.018, 0.51]}>
            <boxGeometry args={[0.19, 0.036, 0.044]} />
            <meshStandardMaterial color={LIP} roughness={0.6} />
          </mesh>
          {/* Chin */}
          <mesh position={[0, -0.12, 0.38]} scale={[0.85, 0.55, 0.85]}>
            <sphereGeometry args={[0.22, 20, 14]} />
            <meshStandardMaterial color={SKIN} roughness={0.7} />
          </mesh>
        </group>

        {/* ── EARS ── */}
        {[[-0.56, 0, 0], [0.56, 0, 0]].map(([x, y, z], i) => (
          <mesh key={i} position={[x, y, z]} scale={[0.28, 0.38, 0.22]}>
            <sphereGeometry args={[1, 14, 14]} />
            <meshStandardMaterial color={SKIN} roughness={0.7} />
          </mesh>
        ))}

        {/* ── HAIR ── */}
        <mesh position={[0, 0.38, -0.06]} scale={[1.04, 0.72, 1.02]}>
          <sphereGeometry args={[0.58, 28, 28]} />
          <meshStandardMaterial color={HAIR} roughness={0.9} />
        </mesh>
        {/* Side hair */}
        <mesh position={[-0.52, 0.12, -0.04]} scale={[0.38, 0.8, 0.55]}>
          <sphereGeometry args={[0.58, 16, 16]} />
          <meshStandardMaterial color={HAIR} roughness={0.9} />
        </mesh>
        <mesh position={[0.52, 0.12, -0.04]} scale={[0.38, 0.8, 0.55]}>
          <sphereGeometry args={[0.58, 16, 16]} />
          <meshStandardMaterial color={HAIR} roughness={0.9} />
        </mesh>
        {/* Back hair */}
        <mesh position={[0, 0.05, -0.44]} scale={[0.92, 0.85, 0.6]}>
          <sphereGeometry args={[0.56, 18, 18]} />
          <meshStandardMaterial color={HAIR} roughness={0.9} />
        </mesh>

        {/* ── GLOWING TECH TEMPLES (brand identity) ── */}
        <mesh position={[-0.58, 0.04, 0.08]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.03, 0.03, 0.1, 10]} />
          <meshBasicMaterial color={IRIS_L} />
        </mesh>
        <mesh position={[0.58, 0.04, 0.08]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.03, 0.03, 0.1, 10]} />
          <meshBasicMaterial color={IRIS_R} />
        </mesh>
      </group>

      {/* ── BODY / SHOULDERS ── */}
      <group ref={bodyRef} position={[0, -1.05, 0]}>
        {/* Torso */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.42, 0.48, 0.88, 24]} />
          <meshStandardMaterial color={SHIRT} roughness={0.4} metalness={0.6} />
        </mesh>
        {/* Collar glow strip */}
        <mesh position={[0, 0.41, 0.08]} rotation={[0.3, 0, 0]}>
          <boxGeometry args={[0.3, 0.035, 0.02]} />
          <meshBasicMaterial color={SHIRT_A} />
        </mesh>
        {/* Left shoulder pad */}
        <mesh position={[-0.6, 0.26, 0]} scale={[0.55, 0.3, 0.5]}>
          <sphereGeometry args={[1, 18, 14]} />
          <meshStandardMaterial color={SHIRT} roughness={0.4} metalness={0.7} />
        </mesh>
        {/* Right shoulder pad */}
        <mesh position={[0.6, 0.26, 0]} scale={[0.55, 0.3, 0.5]}>
          <sphereGeometry args={[1, 18, 14]} />
          <meshStandardMaterial color={SHIRT} roughness={0.4} metalness={0.7} />
        </mesh>
        {/* Chest glowing line detail */}
        <mesh position={[0, 0.1, 0.38]}>
          <boxGeometry args={[0.015, 0.28, 0.01]} />
          <meshBasicMaterial color={IRIS_L} />
        </mesh>
      </group>
    </group>
  );
};

const AIAvatar = ({ isSpeaking }) => (
  <div style={{ width: '100%', height: '100%' }}>
    <Canvas camera={{ position: [0, 0.12, 2.1], fov: 44 }} shadows>
      <ambientLight intensity={0.6} />
      <directionalLight position={[2, 4, 3]} intensity={1.6} castShadow />
      <pointLight position={[-3, 2, 2]} intensity={1.2} color="#7C3AED" />
      <pointLight position={[3, -1, 2]} intensity={0.9} color="#06B6D4" />
      <pointLight position={[0, -3, 1]} intensity={0.5} color="#7C3AED" />
      <AvatarMesh isSpeaking={isSpeaking} />
    </Canvas>
  </div>
);

export default AIAvatar;
