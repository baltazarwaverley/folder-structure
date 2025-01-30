import { useCallback, useState } from 'react';
import Icon from './Icon';

interface FileNode {
  name: string;
  isFolder: boolean;
  children?: FileNode[];
};

interface FileNodeProps {
  file: FileNode;
  level?: number;
};

const Folder = ({ file, level = 0 }: FileNodeProps) => {

  const [fileName, fileExtension] = file.name.split('.');
  const [showChildren, setShowChildren] = useState(false);

  const onExpandedHandler = useCallback(() => {
    setShowChildren(!showChildren)
  }, [showChildren, setShowChildren])

  return <div className={`pl-${level}`}>
    <div
      className={`hover:cursor-pointer hover:bg-gray-900 hover:rounded-sm text-lg flex flex-row items-center px-2`}
      onClick={onExpandedHandler}
    >
      {file.isFolder ?
        <>
          <Icon name={showChildren ? 'caretDown' : 'caretRight'} className='size-4 mx-2' /> <span>{fileName}</span>
        </>
        :
        <>
          <Icon name={fileExtension} className='size-4 mx-2' /> <span>{file.name}</span>
        </>}
    </div>

    {file.isFolder && file.children && (
      <div className='pl-2'>
        {showChildren && file.children.map((child, index) => (
          <Folder key={index} file={child} level={level + 2} />
        ))}
      </div>
    )}
  </div>;
};

export default Folder;
