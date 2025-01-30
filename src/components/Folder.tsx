import { useCallback, useState } from 'react';

import { IFileNodeProps } from '../constants/interfaces';
import Icon from './Icon';


const Folder = ({ file }: IFileNodeProps) => {

  const [fileName, fileExtension] = file.name.split('.');
  const [showChildren, setShowChildren] = useState(false);

  const onExpandedHandler = useCallback(() => {
    setShowChildren(!showChildren)
  }, [showChildren, setShowChildren])

  return (
    <div>
      <div
        className={`hover:cursor-pointer hover:bg-gray-900 hover:rounded-sm text-lg flex flex-row items-center`}
        onClick={onExpandedHandler}
      >
        {file.isFolder ?
          <>
            <Icon name={showChildren ? 'caretDown' : 'caretRight'} className='size-4' /><span>{fileName}</span>
          </>
          :
          <>
            <Icon name={fileExtension} className='size-4' /><span>{file.name}</span>
          </>
        }
      </div>

      {file.isFolder && file.children && (
        <div>
          {showChildren && file.children.map((child, index) => (
            <Folder key={index} file={child} />
          ))}
        </div>
      )}
    </div>
  )
};

export default Folder;
