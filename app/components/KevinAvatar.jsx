"use client";

import React from "react";
import { Avatar } from "@readyplayerme/visage";
import { useMediaQuery } from "usehooks-ts";
import LoadingTriangle from "./Loading/LoadingTriangle";

const modelSrc = "kevin-avatar.glb"; // this can be a relative or absolute URL
const animationSrc = "/male-idle.glb";

export default function KevinAvatar() {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  return (
    <Avatar
      ambientLightColor="#fff5b6"
      ambientLightIntensity={0.25}
      animationSrc={animationSrc}
      cameraInitialDistance={2.5}
      cameraTarget={1.6}
      cameraZoomTarget={[
        {
          x: 0,
          y: 0.5,
          z: 0.48,
        },
      ]}
      dirLightColor="#002aff"
      dirLightIntensity={5}
      dirLightPosition={{
        x: -3,
        y: 5,
        z: -5,
        "_constructor-name_": "Vector3",
      }}
      environment="city"
      headMovement
      idleRotation
      modelSrc={modelSrc}
      onLoaded={function noRefCheck() {}}
      onLoading={function noRefCheck() {}}
      scale={1.1}
      shadows
      spotLightAngle={0.314}
      spotLightColor="#fff5b6"
      spotLightIntensity={1}
      spotLightPosition={[
        {
          x: 12,
          y: 10,
          z: 7.5,
        },
      ]}
      style={{
        background: "transparent",
        height: isSmallScreen ? "160px" : "516px",
      }}
      loader={<LoadingTriangle />}
    />
  );
}
