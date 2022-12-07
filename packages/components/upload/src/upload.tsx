import * as React from 'react';
export type UploadRequestMethod =
  | 'POST'
  | 'PUT'
  | 'PATCH'
  | 'post'
  | 'put'
  | 'patch';

export type UploadRequestHeader = Record<string, string>;
export interface RcFile extends File {
  uid: string;
}
export type BeforeUploadFileType = File | Blob | boolean | string;

export type Action = string | ((file: RcFile) => string | PromiseLike<string>);

export interface UploadProgressEvent extends Partial<ProgressEvent> {
  percent?: number;
}
export interface UploadRequestError extends Error {
  status?: number;
  method?: UploadRequestMethod;
  url?: string;
}
export interface UploadRequestOption<T = any> {
  onProgress?: (event: UploadProgressEvent) => void;
  onError?: (event: UploadRequestError | ProgressEvent, body?: T) => void;
  onSuccess?: (body: T, xhr?: XMLHttpRequest) => void;
  data?: Record<string, unknown>;
  filename?: string;
  file: Exclude<BeforeUploadFileType, File | boolean> | RcFile;
  withCredentials?: boolean;
  action: string;
  headers?: UploadRequestHeader;
  method: UploadRequestMethod;
}
export interface UploadProps {
  name?: string;
  style?: React.CSSProperties;
  className?: string;
  disabled?: boolean;
  component?: React.JSXElementConstructor<any>;
  action?: Action;
  method?: UploadRequestMethod;
  directory?: boolean;
  data?:
    | Record<string, unknown>
    | ((file: RcFile | string | Blob) => Record<string, unknown>);
  headers?: UploadRequestHeader;
  accept?: string;
  multiple?: boolean;
  onBatchStart?: (
    fileList: {
      file: RcFile;
      parsedFile: Exclude<BeforeUploadFileType, boolean>;
    }[],
  ) => void;
  onStart?: (file: RcFile) => void;
  onError?: (error: Error, ret: Record<string, unknown>, file: RcFile) => void;
  onSuccess?: (
    response: Record<string, unknown>,
    file: RcFile,
    xhr: XMLHttpRequest,
  ) => void;
  onProgress?: (event: UploadProgressEvent, file: RcFile) => void;
  beforeUpload?: (
    file: RcFile,
    FileList: RcFile[],
  ) => BeforeUploadFileType | Promise<void | BeforeUploadFileType>;
  customRequest?: (option: UploadRequestOption) => void;
  withCredentials?: boolean;
  openFileDialogOnClick?: boolean;
  prefixCls?: string;
  id?: string;
  onMouseEnter?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseLeave?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onClick?: (
    e: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>,
  ) => void;
}

export function Upload(props: React.PropsWithChildren<UploadProps>) {
  console.log('Upload props', props);
  const { directory, disabled, openFileDialogOnClick, children } = props;
  const fileInputRef = React.useRef<HTMLInputElement>();
  const dirProps: any = directory
    ? { directory: 'directory', webkitdirectory: 'webkitdirectory' }
    : {};
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('event', event.target);
    const fileList = [].map.call(event.target.files, function (f) {
      return {
        file: f,
      };
    });
    console.log('fileList', fileList);
  };
  const onClick = (
    e: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>,
  ) => {
    const el = fileInputRef.current;
    console.log(el);
    console.log(e);
    if (children && (children as React.ReactElement).type === 'button') {
      const parent = el?.parentNode as HTMLInputElement;
      parent.focus();
      parent?.querySelector('button')?.blur();
    }
    el?.click();
    if (onClick) {
      onClick(e);
    }
  };
  const onKeyDown = () => {};
  const onMouseEnter = () => {};
  const onMouseLeave = () => {};
  const onFileDrop = () => {};
  const events = disabled
    ? {}
    : {
        onClick: openFileDialogOnClick ? onClick : () => {},
        onKeyDown: openFileDialogOnClick ? onKeyDown : () => {},
        onMouseEnter,
        onMouseLeave,
        onDrop: onFileDrop,
        onDragOver: onFileDrop,
        tabIndex: 0,
      };
  return (
    <>
      <div role="button" {...events} aria-label="文件上传">
        <input
          type="file"
          ref={fileInputRef}
          multiple
          {...dirProps}
          onChange={onChange}
          style={{ display: 'none' }}
        />
        {props.children}
      </div>
      <div onClick={onClick}>ref</div>
    </>
  );
}
