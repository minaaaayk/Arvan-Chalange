import styled from "styled-components";

//FIXME Remove props! we don't use inline style
interface IProps {
  flexDirection?: "column" | "row-reverse" | "column-reverse";
  justifyContent?:
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  alignItems?: "stretch" | "flex-end" | "center" | "baseline";

  padding?: string;
  margin?: string;
  width?: string;
  height?: string;
  gap?: string;
}

/** @deprecated use display:flex instead using this component   {*} */
export const FlexWrapper = styled.div<IProps>`
  display: flex;

  gap: ${({ gap }) => gap || "0"};

  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
  align-items: ${({ alignItems }) => alignItems || "flex-start"};

  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "auto"};

  padding: ${({ padding }) => padding || "0"};
  margin: ${({ margin }) => margin || "0"};

  position: relative;
`;
