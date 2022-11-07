import { Editor } from '@tiptap/react';
import React, { useMemo } from 'react';
import MenuItem from './MenuItem';
// import {
//   Bold,
//   Italic,
//   StackFill,
//   CodeFill,
//   MarkPenLine,
//   H1,
//   H2,
//   Paragraph,
//   ListUnordered,
//   ListOrdered,
//   ListCheck2,
//   CodeBoxLine,
//   DoubleQuotesL,
//   Separator,
//   TextWrap,
//   FormatClear,
//   ArrowGoBackLine,
//   ArrowGoForwardFill,
//   AlignCenter,
//   AlignRight,
//   AlignLeft,
//   AlignJustify,
//   ImageAddLine,
// } from "@@cuiller/cdk/react-icon"
import styled from '@emotion/styled';
import {
  RiBold,
  RiItalic,
  RiStackFill,
  RiCodeFill,
  RiMarkPenLine,
  RiH1,
  RiH2,
  RiParagraph,
  RiListUnordered,
  RiListOrdered,
  RiListCheck2,
  RiCodeBoxLine,
  RiDoubleQuotesL,
  RiSeparator,
  RiTextWrap,
  RiFormatClear,
  RiArrowGoBackLine,
  RiArrowGoForwardFill,
  RiAlignCenter,
  RiAlignRight,
  RiAlignLeft,
  RiAlignJustify,
  RiImageAddLine,
} from 'react-icons/ri';
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
  editor: Editor;
}

export default function MenuBar({ editor }: MenuBarProps) {
  const items = useMemo(() => {
    if (editor) {
      return [
        {
          icon: RiBold,
          title: 'Bold',
          action: () => editor.chain().focus().toggleBold().run(),
          isActive: () => editor.isActive('bold'),
        },
        {
          icon: RiItalic,
          title: 'Italic',
          action: () => editor.chain().focus().toggleItalic().run(),
          isActive: () => editor.isActive('italic'),
        },
        {
          icon: RiStackFill,
          title: 'Strike',
          action: () => editor.chain().focus().toggleStrike().run(),
          isActive: () => editor.isActive('strike'),
        },
        {
          icon: RiCodeFill,
          title: 'Code',
          action: () => editor.chain().focus().toggleCode().run(),
          isActive: () => editor.isActive('code'),
        },
        {
          icon: RiMarkPenLine,
          title: 'Highlight',
          action: () => editor.chain().focus().toggleHighlight().run(),
          isActive: () => editor.isActive('highlight'),
        },
        {
          type: 'divider',
        },
        {
          icon: RiH1,
          title: 'Heading 1',
          action: () =>
            editor.chain().focus().toggleHeading({ level: 1 }).run(),
          isActive: () => editor.isActive('heading', { level: 1 }),
        },
        {
          icon: RiH2,
          title: 'Heading 2',
          action: () =>
            editor.chain().focus().toggleHeading({ level: 2 }).run(),
          isActive: () => editor.isActive('heading', { level: 2 }),
        },
        {
          icon: RiParagraph,
          title: 'Paragraph',
          action: () => editor.chain().focus().setParagraph().run(),
          isActive: () => editor.isActive('paragraph'),
        },
        {
          icon: RiListUnordered,
          title: 'Bullet List',
          action: () => editor.chain().focus().toggleBulletList().run(),
          isActive: () => editor.isActive('bulletList'),
        },
        {
          icon: RiListOrdered,
          title: 'Ordered List',
          action: () => editor.chain().focus().toggleOrderedList().run(),
          isActive: () => editor.isActive('orderedList'),
        },
        {
          icon: RiListCheck2,
          title: 'Task List',
          action: () => editor.chain().focus().toggleTaskList().run(),
          isActive: () => editor.isActive('taskList'),
        },
        {
          icon: RiCodeBoxLine,
          title: 'Code Block',
          action: () => editor.chain().focus().toggleCodeBlock().run(),
          isActive: () => editor.isActive('codeBlock'),
        },
        {
          type: 'divider',
        },
        {
          icon: RiDoubleQuotesL,
          title: 'Blockquote',
          action: () => editor.chain().focus().toggleBlockquote().run(),
          isActive: () => editor.isActive('blockquote'),
        },
        {
          icon: RiSeparator,
          title: 'Horizontal Rule',
          action: () => editor.chain().focus().setHorizontalRule().run(),
        },
        {
          type: 'divider',
        },
        {
          icon: RiTextWrap,
          title: 'Hard Break',
          action: () => editor.chain().focus().setHardBreak().run(),
        },
        {
          icon: RiFormatClear,
          title: 'Clear Format',
          action: () =>
            editor.chain().focus().clearNodes().unsetAllMarks().run(),
        },
        {
          type: 'divider',
        },
        {
          icon: RiAlignCenter,
          title: 'align-center',
          action: () => editor.chain().focus().setTextAlign('center').run(),
          isActive: () => editor.isActive({ textAlign: 'center' }),
        },
        {
          icon: RiAlignLeft,
          title: 'align-left',
          action: () => editor.chain().focus().setTextAlign('left').run(),
          isActive: () => editor.isActive({ textAlign: 'left' }),
        },
        {
          icon: RiAlignRight,
          title: 'align-right',
          action: () => editor.chain().focus().setTextAlign('right').run(),
          isActive: () => editor.isActive({ textAlign: 'right' }),
        },
        {
          icon: RiAlignJustify,
          title: 'align-justify',
          action: () => editor.chain().focus().setTextAlign('justify').run(),
          isActive: () => editor.isActive({ textAlign: 'justify' }),
        },
        {
          type: 'divider',
        },
        {
          icon: RiImageAddLine,
          title: 'align-justify',
          action: () => {
            const url = window.prompt('URL');
            if (url) {
              editor.chain().focus().setImage({ src: url }).run();
            }
          },
        },
        {
          type: 'divider',
        },
        {
          icon: RiArrowGoBackLine,
          title: 'Undo',
          action: () => editor.chain().focus().undo().run(),
        },
        {
          icon: RiArrowGoForwardFill,
          title: 'Redo',
          action: () => editor.chain().focus().redo().run(),
        },
      ];
    } else {
      return [];
    }
  }, [editor]);

  return (
    <Header>
      {items.length > 0 &&
        items?.map((item, index) =>
          item.type === 'divider' ? (
            <Divider key={index} />
          ) : (
            <MenuItem {...item} key={index} />
          ),
        )}
      {/* TODO 字数统计 */}
    </Header>
  );
}
