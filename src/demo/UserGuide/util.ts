import tinycolor from "tinycolor2";

type ColorSet = {
  [key: string]: string;
};

const generateColorSchemeForMode = (
  baseHex: string,
  baseColorVariableName: string,
  isDarkMode: boolean = false
): ColorSet => {
  const baseColor = tinycolor(baseHex);

  // Function to generate color variations based on lightness and saturation
  const getColorShades = (
    color: tinycolor.Instance,
    darkMode: boolean
  ): string[] => {
    const shades: string[] = [];

    // Create slightly lighter, slightly darker, muted and text colors
    const base = color
      .clone()
      .desaturate(darkMode ? 5 : 0)
      .toHexString();
    const light = color
      .clone()
      .lighten(darkMode ? 6 : 6)
      .desaturate(darkMode ? 5 : 0)
      .toHexString();
    const dark = color
      .clone()
      .darken(darkMode ? 6 : 6)
      .desaturate(darkMode ? 5 : 0)
      .toHexString();
    const muted = color
      .clone()
      .lighten(darkMode ? 10 : 10)
      .desaturate(darkMode ? 10 : 5)
      .toHexString();
    const text = darkMode
      ? color.clone().lighten(15).saturate(0).toHexString()
      : color.clone().darken(15).toHexString();

    shades.push(
      base,
      light,
      dark,
      muted,
      text,
      `${base}70`,
      `${light}70`,
      `${dark}70`,
      `${muted}70`
    );

    return shades;
  };

  // Generate 5 color variations
  const colorShades = getColorShades(baseColor, isDarkMode);

  // Choose the best foreground color (either white or black) for legibility across most shades
  const foregroundColor = tinycolor
    .mostReadable(baseHex, ["#ffffff", "#000000"], {
      includeFallbackColors: true,
      level: "AAA",
      size: "large",
    })
    .toHexString();

  // Assign colors and foregrounds with updated variable names
  const colors: ColorSet = {
    [`--basicui-bg-${baseColorVariableName}`]: colorShades[0],
    [`--basicui-bg-${baseColorVariableName}-light`]: colorShades[1],
    [`--basicui-bg-${baseColorVariableName}-dark`]: colorShades[2],
    [`--basicui-bg-${baseColorVariableName}-muted`]: colorShades[3],
    [`--basicui-bg-${baseColorVariableName}-text`]: colorShades[4],
    [`--basicui-bg-${baseColorVariableName}-transparent`]: colorShades[5],
    [`--basicui-bg-${baseColorVariableName}-transparent-light`]: colorShades[6],
    [`--basicui-bg-${baseColorVariableName}-transparent-dark`]: colorShades[7],
    [`--basicui-bg-${baseColorVariableName}-transparent-muted`]: colorShades[8],
    [`--basicui-fg-${baseColorVariableName}`]: foregroundColor,
  };

  return colors;
};

export const generateCompleteColorScheme = (
  baseHex: string,
  baseColorVariableName: string
) => {
  // Light mode colors
  const lightMode = generateColorSchemeForMode(
    baseHex,
    baseColorVariableName,
    false
  );

  // Dark mode colors
  const darkMode = generateColorSchemeForMode(
    baseHex,
    baseColorVariableName,
    true
  );

  return {
    lightMode,
    darkMode,
  };
};
