"use client";

import { ReactNode } from "react";
import { Vortex } from "./ui/vortex";

export default function VortexContainer({ children }: { children: ReactNode }) {
  return <Vortex>{children}</Vortex>;
}
