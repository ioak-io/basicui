import React, { useEffect, useState } from "react";
import { useDarkMode } from "storybook-dark-mode";

interface ColorPaletteProps {
  colors: {
    lightMode: Record<string, string>;
    darkMode: Record<string, string>;
  };
  colorname: string;
}

const ColorPalette: React.FC<ColorPaletteProps> = (
  props: ColorPaletteProps
) => {
  const [mode, setMode] = useState<"lightMode" | "darkMode">("lightMode");
  const [palette, setPalette] = useState<string[][]>([]);
  const colorKey = [
    "muted",
    "light",
    "base",
    "dark",
    "text",
    "transparent-muted",
    "transparent-light",
    "transparent-base",
    "transparent-dark",
  ];
  const isDarkMode = useDarkMode();

  // Update local state when the colors prop changes or mode changes
  useEffect(() => {
    const colorOrder = [
      `--basicui-bg-${props.colorname}-muted`,
      `--basicui-bg-${props.colorname}-light`,
      `--basicui-bg-${props.colorname}`,
      `--basicui-bg-${props.colorname}-dark`,
      `--basicui-bg-${props.colorname}-text`,
      `--basicui-bg-${props.colorname}-transparent-muted`,
      `--basicui-bg-${props.colorname}-transparent-light`,
      `--basicui-bg-${props.colorname}-transparent`,
      `--basicui-bg-${props.colorname}-transparent-dark`,
    ];

    // Filter and sort colorEntries by the defined order
    setPalette(
      colorOrder.map((key) => [
        key,
        props.colors[isDarkMode ? "darkMode" : "lightMode"][key],
      ])
    );
  }, [props.colors, props.colorname, isDarkMode]);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
      {palette.map(([key, color], index) => {
        return (
          <div
            key={key}
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: color,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontWeight: "bold",
              borderRadius: "4px",
              boxShadow: "0 0 5px rgba(0,0,0,0.3)",
            }}
          >
            {colorKey[index]}
          </div>
        );
      })}
    </div>
  );
};

export default ColorPalette;
