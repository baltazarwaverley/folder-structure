export interface IFileNode {
  name: string;
  isFolder: boolean;
  children?: IFileNode[];
};

export interface IFileNodeProps {
  file: IFileNode;
};

export interface IIconProps {
  name: 'js' | 'css' | 'json' | 'html' | 'caretRight' | 'caretDown';
  className?: string;
}
