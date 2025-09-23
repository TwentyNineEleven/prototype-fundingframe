
'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

interface TiptapEditorProps {
  content: string;
  onChange: (content: string) => void;
}

export function TiptapEditor({ content, onChange }: TiptapEditorProps) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: 'prose lg:prose-xl max-w-none w-full h-96 overflow-y-auto border border-gray-300 rounded-md p-4',
      },
    },
  });

  return <EditorContent editor={editor} />;
}
