import React from "react";
import { BookMarkFill, AllIcons } from "@stlt/remixicon-react";
import CopyableIcon from "./CopyableIcon";
import { message } from "antd";

const IconDisplay: React.FC = () => {
  const onCopied = React.useCallback((text: string) => {
    message.success(
      <span>
        <code className="copied-code">{text}</code> copied 🎉
      </span>
    );
  }, []);

  return (
    <div>
      {AllIcons.map((item) => {
        return (
          <div key={item.name}>
            <h2>{item.name}</h2>
            <div className="grid grid-flow-col grid-rows-4 gap-4 mt-10">
              {item.items.length > 0 &&
                item.items.map((icon) => {
                  return (
                    <React.Fragment key={icon}>
                      <CopyableIcon name={icon} onCopied={onCopied} />
                    </React.Fragment>
                  );
                })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default IconDisplay;
