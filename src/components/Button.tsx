import { useState } from 'react';

interface DownloadButtonProps {
  css: string;
}

const Button = ({ css }: DownloadButtonProps): JSX.Element => {
  const [fileName, setFileName] = useState<string>('modified.css');

  const handleFileNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setFileName(event.target.value);
  };

  const handleClick = (): void => {
    const element = document.createElement('a');
    element.setAttribute(
      'href',
      `data:text/plain;charset=utf-8,${encodeURIComponent(css)}`
    );
    element.setAttribute('download', fileName);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="mt-4">
      <label htmlFor="fileName" className="mr-4 text-primary">
        File:
      </label>
      <input
        type="text"
        id="fileName"
        value={fileName}
        onChange={handleFileNameChange}
        className="border border-gray-500 rounded-md p-2"
      />
      <button
        onClick={handleClick}
        className="bg-blue-500 hover:bg-blue-600 text-primary rounded-md px-4 py-2 ml-2"
      >
        Download
      </button>
    </div>
  );
};

export default Button;
