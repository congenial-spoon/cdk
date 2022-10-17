import styled from "@emotion/styled";
import React from "react";
import classNames from "classnames";
import * as remixicon from "@stlt/remixicon-react";
import CopyToClipboard from "react-copy-to-clipboard";

const allIcons: {
  [key: string]: any;
} = remixicon;

export interface CopyableIconProps {
  name: string;
  onCopied: (text: string) => any;
}

const IconItem = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  display: inline-block;
  cursor: pointer;
  text-align: center;
  border-radius: 2px;
  transition: all 0.2s cubic-bezier(0.4, 0.6, 0.5, 1.32);
  vertical-align: middle;
  border: 1px solid transparent;
  :hover {
  }
  > span {
    font-size: 10px;
    white-space: nowrap;
  }
`;

function _toBigCamel(str: string): string {
  let newStr = str.split("-");
  if (newStr.length <= 1) return str.charAt(0).toUpperCase() + str.slice(1);
  let res = "";
  for (let i = 0; i < newStr.length; i++) {
    res += newStr[i][0].toUpperCase() + newStr[i].substr(1);
  }
  return res;
}
const Li = styled.li`
  position: relative;
  float: left;
  width: 16.66%;
  height: 100px;
  margin: 3px 0;
  padding: 10px 0 0;
  overflow: hidden;
  color: #555;
  text-align: center;
  list-style: none;
  background-color: inherit;
  border-radius: 4px;
  cursor: pointer;
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
  > span {
    display: block;
    white-space: nowrap;
    text-align: center;
    transform: scale(0.83);
  }
`;
const CopyableIcon: React.FC<CopyableIconProps> = ({ name, onCopied }) => {
  const onCopy = (text: string, result: boolean) => {
    if (result) {
      onCopied(text);
    } else {
    }
  };

  return (
    <CopyToClipboard text={`<${_toBigCamel(name)} />`} onCopy={onCopy}>
      <Li>
        <IconItem>
          {allIcons[_toBigCamel(name)] &&
            React.createElement(allIcons[_toBigCamel(name)])}
        </IconItem>
        <span>{name}</span>
      </Li>
    </CopyToClipboard>
  );
};

export default CopyableIcon;
