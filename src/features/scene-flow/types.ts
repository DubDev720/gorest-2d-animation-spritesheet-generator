import type { GameScene } from "../../types";

export type SceneFlowNode = {
  id: string;
  title: string;
  subtitle: string;
  scene?: GameScene;
  isCurrent?: boolean;
  isPlaceholder?: boolean;
  x: number;
  y: number;
  width: number;
  thumbnail?: string;
  backgroundColor: string;
};

export type SceneFlowPoint = {
  x: number;
  y: number;
};
