import React from "react";

function GridBG({
  gridSizeX = 60,
  gridSizeY = 60,
  gridColor = "rgba(255, 255, 255, 0.4)",
  gridWidth = 1,
  opacity = 0.15,
  className = "",
  children,
}) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
    >
      {/* Background Grid Layer */}
      <div
        className="absolute inset-0"
        style={{
          opacity,
          backgroundImage: `
            linear-gradient(to right, ${gridColor} ${gridWidth}px, transparent ${gridWidth}px),
            linear-gradient(to bottom, ${gridColor} ${gridWidth}px, transparent ${gridWidth}px)
          `,
          backgroundSize: `${gridSizeX}px ${gridSizeY}px`,
        }}
      />

      {/* Content wrapper (optional) */}
      {children && (
        <div className="relative z-10 pointer-events-auto">{children}</div>
      )}
    </div>
  );
}

export default GridBG;
