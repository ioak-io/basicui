import React, {
    useEffect,
    useState,
    isValidElement,
    cloneElement,
    ReactElement,
} from "react";

interface SvgIconProps {
    src?: string;
    children?: any;
    className?: string;
    width?: number | string;
    height?: number | string;
    fill?: string;
}

export default function SvgIcon({ children, src, className, width, height, fill }: SvgIconProps) {
    const [svgContent, setSvgContent] = useState<string | null>(null);
    const [updatedSvgContent, setUpdatedSvgContent] = useState<string | null>(null);

    useEffect(() => {
        const fetchSVG = async () => {
            try {
                const response = await fetch(src);
                const text = await response.text();
                setSvgContent(text);
                setUpdatedSvgContent(text.replace(
                    /<svg([^>]+)>/,
                    (match, group) => {
                        const widthAttr = width ? `width="${width}" ` : '';
                        const heightAttr = height ? `height="${height}" ` : '';
                        return `<svg ${group} ${widthAttr}${heightAttr}>`;
                    }
                ));
            } catch (error) {
                console.error("Failed to fetch SVG:", error);
            }
        };

        if (src) {
            fetchSVG();
        }
    }, [src, width, height]);

    if (!src && !children) return null;

    const wrapperStyle = {
        width: width || "20px",
        height: height || "20px",
        fill: fill || "var(--basicui-fg)",
        // display: 'inline-block' as const,
    };

    const styledChildren = isValidElement(children)
        ? cloneElement(children as ReactElement<any>, {
            style: {
                ...(children.props as any).style,
                width,
                height,
            },
        })
        : children;

    return (
        <>
            {children && (
                <div
                    className={`basicui-svgicon ${className || ""}`}
                    style={wrapperStyle}
                >
                    {styledChildren}
                </div>
            )}
            {!children && updatedSvgContent && (
                <div
                    className={`basicui-svgicon ${className || ""}`}
                    style={wrapperStyle}
                    dangerouslySetInnerHTML={{ __html: updatedSvgContent }}
                />
            )}
        </>
    );
}
