
import { useCallback, useState } from 'react';
import { IFileNodeProps } from '../constants/interfaces';
import Icon from './Icon';

const Folder = ({ file }: IFileNodeProps) => {

  const [name, extension] = file.name.split('.')
  const [showItems, setShowItem] = useState<boolean | null>(null)

  const onShowItems = useCallback(() => {
    setShowItem(!showItems);
  }, [setShowItem, showItems])

  return (
    <div>
      <div className='flex flex-row items-center justify-start rounded-md px-2 hover:bg-gray-900 hover:cursor-pointer' onClick={onShowItems}>
        {
          file.isFolder ? <Icon name={showItems ? 'caretDown' : 'caretRight'} className='size-4' /> : <Icon name={extension} className='size-4' />
        }
        <span className='px-1'>{file.name}</span>
      </div>
      <div className='ml-4'>
        {file.isFolder && file.children && showItems && file.children.map((item, index) => {
          return <Folder key={file.name + index} file={item} />
        })}
      </div>
    </div>
  )
};

export default Folder;
