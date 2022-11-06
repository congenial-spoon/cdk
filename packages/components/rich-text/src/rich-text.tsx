import CharacterCount from "@tiptap/extension-character-count"
import Highlight from "@tiptap/extension-highlight"
import {
  EditorContent,
  useEditor,
  FloatingMenu as TiptapFloatingMenu,
  BubbleMenu as TiptapBubbleMenu,
} from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import TextAlign from "@tiptap/extension-text-align"
import Image from "@tiptap/extension-image"
import React, { useEffect } from "react"
import styled from "@emotion/styled"
import MenuBar from "./MenuBar"
import TaskItem from "@tiptap/extension-task-item"
import TaskList from "@tiptap/extension-task-list"

const FloatingMenu = styled(TiptapFloatingMenu)`
  display: flex;
  background-color: #0d0d0d10;
  padding: 0.2rem;
  border-radius: 0.5rem;

  button {
    border: none;
    background: none;
    font-size: 0.85rem;
    font-weight: 500;
    padding: 0 0.2rem;
    opacity: 0.6;

    &:hover,
    &.is-active {
      opacity: 1;
    }
  }
`

export interface RichTextProps {
  content?: string
  isEditable?: boolean
  setIsEditable?: () => void
  bubbleMenu?: boolean
  floatingMenu?: boolean
}

function RichText(props: RichTextProps) {
  const {
    content,
    isEditable = true,
    bubbleMenu = false,
    floatingMenu = false,
  } = props
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        history: false,
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Highlight,
      CharacterCount.configure({
        limit: 10000,
      }),
      Image,
      TaskList,
      TaskItem.configure({
        nested: true,
      }),
    ],
    content,
  })

  useEffect(() => {
    if (editor) {
      editor.setEditable(isEditable)
    }
  }, [isEditable, editor])

  return (
    <div className="editor">
      {editor && <MenuBar editor={editor} />}
      <EditorContent
        className="editor__content"
        editor={editor}
        style={{
          height: 500,
          overflowY: "scroll",
          // border: "1px #0d0d0d solid",
        }}
      />
      {editor && bubbleMenu && (
        <TiptapBubbleMenu tippyOptions={{ duration: 100 }} editor={editor}>
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={editor.isActive("bold") ? "is-active" : ""}
          >
            Bold
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={editor.isActive("italic") ? "is-active" : ""}
          >
            Italic
          </button>
          <button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={editor.isActive("strike") ? "is-active" : ""}
          >
            Strike
          </button>
        </TiptapBubbleMenu>
      )}
      {editor && floatingMenu && (
        <FloatingMenu tippyOptions={{ duration: 100 }} editor={editor}>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
            className={
              editor.isActive("heading", { level: 1 }) ? "is-active" : ""
            }
          >
            H1
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
            className={
              editor.isActive("heading", { level: 2 }) ? "is-active" : ""
            }
          >
            H2
          </button>
          <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={editor.isActive("bulletList") ? "is-active" : ""}
          >
            Bullet List
          </button>
        </FloatingMenu>
      )}
    </div>
  )
}

export default RichText
