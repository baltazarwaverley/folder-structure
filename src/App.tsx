import CodeEditor from './components/CodeEditor';
import { files } from './constants/data';
import Folder from './components/Folder';

export default function App() {
  return (
    <div className="p-5 bg-gray-950 min-h-screen flex flex-row overflow-hidden">
      <div className='w-1/4 bg-gray-950 border border-gray-700 text-gray-200 p-5'>
        <Folder file={files} />
      </div>
      <div className="w-3/4 bg-gray-900 border border-gray-700 flex justify-center items-center">
        <CodeEditor />
      </div>
    </div>
  );
}
