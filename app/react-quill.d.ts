declare module 'react-quill' {
  import React from 'react';

  interface QuillProps {
    value?: string;
    onChange?: (content: string, delta: any, source: string, editor: any) => void;
    readOnly?: boolean;
    theme?: string;
    modules?: object;
    formats?: string[] | null;
    bounds?: string | HTMLElement;
    placeholder?: string;
    tabIndex?: number;
    autoFocus?: boolean;
    className?: string;
    style?: React.CSSProperties;
    preserveWhitespace?: boolean;
    children?: React.ReactNode;
    onChangeSelection?: (selection: any, source: string, editor: any) => void;
    onFocus?: (selection: any, source: string, editor: any) => void;
    onBlur?: (previousSelection: any, source: string, editor: any) => void;
    onKeyDown?: (event: React.KeyboardEvent, editor: any) => void;
    onKeyPress?: (event: React.KeyboardEvent, editor: any) => void;
    onKeyUp?: (event: React.KeyboardEvent, editor: any) => void;
    onMouseOver?: (event: React.MouseEvent, editor: any) => void;
    onMouseLeave?: (event: React.MouseEvent, editor: any) => void;
    onDrop?: (event: React.DragEvent, editor: any) => void;
    onPaste?: (event: React.ClipboardEvent, editor: any) => void;
    onFocusCapture?: (selection: any, source: string, editor: any) => void;
    onBlurCapture?: (previousSelection: any, source: string, editor: any) => void;
    onChangeCapture?: (content: string, delta: any, source: string, editor: any) => void;
  }

  const ReactQuill: React.ComponentClass<QuillProps>;
  export default ReactQuill;
}
