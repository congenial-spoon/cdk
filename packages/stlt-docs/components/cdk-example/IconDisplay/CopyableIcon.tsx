import styled from "@emotion/styled";
import React from "react";
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
  width: 16.66667%;
  height: 100px;
  display: inline-flex;
  cursor: pointer;
  text-align: center;
  border-radius: 2px;
  align-items: center;
  flex-direction: column;
  transition: all .2s cubic-bezier(.4, .6, .5, 1.32);
  justify-content: center;

  :hover {
    border: 1px solid #006aff;
  }

  .icon-name {
    font-size: 12px;
    color: #909eb0;
  }

  svg {
    display: inline-block;
    font-size: 26px;
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

const CopyableIcon: React.FC<CopyableIconProps> = ({ name, onCopied }) => {
  const onCopy = (text: string, result: boolean) => {
    if (result) {
      onCopied(text);
    } else {
    }
  };

  return (
    <CopyToClipboard text={`<${_toBigCamel(name)} />`} onCopy={onCopy}>
      <IconItem>
        {allIcons[_toBigCamel(name)] && React.createElement(allIcons[_toBigCamel(name)])}
        <span className="icon-name">{name}</span>
      </IconItem>
    </CopyToClipboard>
  );
};

export default CopyableIcon;
