import React from "react";
import { AllIcons } from "@stlt/remixicon-react";
import CopyableIcon from "./CopyableIcon";
import { message } from "antd";
import styled from "@emotion/styled";

const Container = styled.div`
  position: relative;
  height: inherit;
  max-width: 1200px;
  margin: 0 auto;

  .icon-list {
    padding: 24px 0 0;
  }

  .icon-type-item {
    display: flex;
    flex-direction: column-reverse;
    border-bottom: 1px solid #d6e0ea;
  }

  .icon-items {
    width: 100%;
    padding-bottom: 24px;
  }
`

const IconDisplay: React.FC = () => {
  const onCopied = React.useCallback((text: string) => {
    message.success(
      <span>
        <code className="copied-code">{text}</code> copied 🎉
      </span>
    );
  }, []);

  return (
    <Container>
      <div className="icon-list">
        {AllIcons.map((item) => {
          return (
            <div key={item.name} className="icon-type-item">
              <div className="icon-items">
                {item.items.length > 0 &&
                  item.items.map((icon) => (
                    <React.Fragment key={icon}>
                      <CopyableIcon name={icon} onCopied={onCopied} />
                    </React.Fragment>
                  ))}
              </div>
              <h2>{item.name}</h2>
            </div>
          );
        })}
      </div>

    </Container>
  );
};

export default IconDisplay;
