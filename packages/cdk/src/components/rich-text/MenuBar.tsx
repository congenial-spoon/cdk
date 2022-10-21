import { Editor } from "@tiptap/react";
import React, { useMemo } from "react";
import MenuItem from "./MenuItem";
import {
  Bold,
  Italic,
  StackFill,
  CodeFill,
  MarkPenLine,
  H1,
  H2,
  Paragraph,
  ListUnordered,
  ListOrdered,
  ListCheck2,
  CodeBoxLine,
  DoubleQuotesL,
  Separator,
  TextWrap,
  FormatClear,
  ArrowGoBackLine,
  ArrowGoForwardFill,
  AlignCenter,
  AlignRight,
  AlignLeft,
  AlignJustify,
  ImageAddLine,
} from "@congenial-spoon/react-icon";
import styled from "@emotion/styled";

const Header = styled.div`
  border-bottom: 3px solid #0d0d0d;
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  flex-wrap: wrap;
  padding: 0.25rem;
`;
const Divider = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  height: 1.25rem;
  margin-left: 0.5rem;
  margin-right: 0.75rem;
  width: 2px;
`;

interface MenuBarProps {
  editor: Editor
}

export default function MenuBar({ editor }: MenuBarProps) {
  const items = useMemo(() => {
    if (editor) {
      return [
        {
          icon: Bold,
          title: "Bold",
          action: () => editor.chain().focus().toggleBold().run(),
          isActive: () => editor.isActive("bold"),
        },
        {
          icon: Italic,
          title: "Italic",
          action: () => editor.chain().focus().toggleItalic().run(),
          isActive: () => editor.isActive("italic"),
        },
        {
          icon: StackFill,
          title: "Strike",
          action: () => editor.chain().focus().toggleStrike().run(),
          isActive: () => editor.isActive("strike"),
        },
        {
          icon: CodeFill,
          title: "Code",
          action: () => editor.chain().focus().toggleCode().run(),
          isActive: () => editor.isActive("code"),
        },
        {
          icon: MarkPenLine,
          title: "Highlight",
          action: () => editor.chain().focus().toggleHighlight().run(),
          isActive: () => editor.isActive("highlight"),
        },
        {
          type: "divider",
        },
        {
          icon: H1,
          title: "Heading 1",
          action: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
          isActive: () => editor.isActive("heading", { level: 1 }),
        },
        {
          icon: H2,
          title: "Heading 2",
          action: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
          isActive: () => editor.isActive("heading", { level: 2 }),
        },
        {
          icon: Paragraph,
          title: "Paragraph",
          action: () => editor.chain().focus().setParagraph().run(),
          isActive: () => editor.isActive("paragraph"),
        },
        {
          icon: ListUnordered,
          title: "Bullet List",
          action: () => editor.chain().focus().toggleBulletList().run(),
          isActive: () => editor.isActive("bulletList"),
        },
        {
          icon: ListOrdered,
          title: "Ordered List",
          action: () => editor.chain().focus().toggleOrderedList().run(),
          isActive: () => editor.isActive("orderedList"),
        },
        {
          icon: ListCheck2,
          title: "Task List",
          action: () => editor.chain().focus().toggleTaskList().run(),
          isActive: () => editor.isActive("taskList"),
        },
        {
          icon: CodeBoxLine,
          title: "Code Block",
          action: () => editor.chain().focus().toggleCodeBlock().run(),
          isActive: () => editor.isActive("codeBlock"),
        },
        {
          type: "divider",
        },
        {
          icon: DoubleQuotesL,
          title: "Blockquote",
          action: () => editor.chain().focus().toggleBlockquote().run(),
          isActive: () => editor.isActive("blockquote"),
        },
        {
          icon: Separator,
          title: "Horizontal Rule",
          action: () => editor.chain().focus().setHorizontalRule().run(),
        },
        {
          type: "divider",
        },
        {
          icon: TextWrap,
          title: "Hard Break",
          action: () => editor.chain().focus().setHardBreak().run(),
        },
        {
          icon: FormatClear,
          title: "Clear Format",
          action: () => editor.chain().focus().clearNodes().unsetAllMarks().run(),
        },
        {
          type: "divider",
        },
        {
          icon: AlignCenter,
          title: "align-center",
          action: () => editor.chain().focus().setTextAlign("center").run(),
          isActive: () => editor.isActive({ textAlign: "center" }),
        },
        {
          icon: AlignLeft,
          title: "align-left",
          action: () => editor.chain().focus().setTextAlign("left").run(),
          isActive: () => editor.isActive({ textAlign: "left" }),
        },
        {
          icon: AlignRight,
          title: "align-right",
          action: () => editor.chain().focus().setTextAlign("right").run(),
          isActive: () => editor.isActive({ textAlign: "right" }),
        },
        {
          icon: AlignJustify,
          title: "align-justify",
          action: () => editor.chain().focus().setTextAlign("justify").run(),
          isActive: () => editor.isActive({ textAlign: "justify" }),
        },
        {
          type: "divider",
        },
        {
          icon: ImageAddLine,
          title: "align-justify",
          action: () => {
            const url = window.prompt("URL");
            if (url) {
              editor.chain().focus().setImage({ src: url }).run();
            }
          },
        },
        {
          type: "divider",
        },
        {
          icon: ArrowGoBackLine,
          title: "Undo",
          action: () => editor.chain().focus().undo().run(),
        },
        {
          icon: ArrowGoForwardFill,
          title: "Redo",
          action: () => editor.chain().focus().redo().run(),
        },

        /*
        *
         * <button onClick={() => editor.chain().focus().setTextAlign('left').run()} className={editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''}>
            left
          </button>
          <button onClick={() => editor.chain().focus().setTextAlign('center').run()} className={editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''}>
            center
          </button>
          <button onClick={() => editor.chain().focus().setTextAlign('right').run()} className={editor.isActive({ textAlign: 'right' }) ? 'is-active' : ''}>
            right
          </button>
          <button onClick={() => editor.chain().focus().setTextAlign('justify').run()} className={editor.isActive({ textAlign: 'justify' }) ? 'is-active' : ''}>
            justify
          </button>
         */
      ]
    } else {
      return []
    }
  }, [editor]);

  return (
    <Header>
      {items.length > 0 && items?.map((item, index) => item.type === "divider" ? <Divider key={index} /> :
        <MenuItem {...item} key={index} />)}
      {/* TODO 字数统计 */}
    </Header>
  );
}
