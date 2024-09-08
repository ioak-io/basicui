import React, { useEffect, useState } from "react";
import "./style.css";
import { generateCompleteColorScheme } from "./util";
import ColorPalette from "./ColorPalette";
import Input from "../../components/Input";
import Button from "../../components/Button";

const ColorSchemeGenerator = () => {
  const [palette, setPalette] = useState<any>();
  const [baseColor, setBaseColor] = useState("#CF8BA9");
  const [colorname, setColorname] = useState("secondary");

  useEffect(() => {
    setPalette(generateCompleteColorScheme(baseColor, colorname));
  }, [colorname, baseColor]);

  const onChangeBaseColor = (event: any) => {
    setBaseColor(event.currentTarget.value);
  };

  const onChange = (event: any) => {
    setColorname(event.currentTarget.value);
  };
  function generateCSS(mode: string): string {
    const theme = palette[mode];
    return Object.entries(theme)
      .map(([key, value]) => {
        return `${key}: ${value};`;
      })
      .join("\n");
  }

  const onCopy = async () => {
    const lightModeCSS = generateCSS("lightMode");
    const darkModeCSS = generateCSS("darkMode");
    try {
      await navigator.clipboard.writeText(
        `.basicui-light {\n ${lightModeCSS} \n} .basicui-dark {\n ${darkModeCSS} \n}`
      );
    } catch (err) {
      console.error("Failed to copy CSS to clipboard: ", err);
    }
  };

  return (
    <div>
      <Input type="color" onInput={onChangeBaseColor} value={baseColor} />
      <Input onInput={onChange} value={colorname} />
      {palette && <ColorPalette colors={palette} colorname={colorname} />}
      <Button onClick={onCopy}>Copy CSS</Button>
    </div>
  );
};

export default ColorSchemeGenerator;
