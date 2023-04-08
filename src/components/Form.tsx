import Button from './Button';
import Footer from './Footer';
import Navbar from './Nav';
import converter from './Converter';
import { useState } from 'react';

function Form(): JSX.Element {
  const [originalCss, setOriginalCss] = useState<string>('');
  const [modifiedCss, setModifiedCss] = useState<string>('');

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const cssFile = event.target.files?.[0];
    if (!cssFile) return;
    const cssText = await cssFile.text();
    setOriginalCss(cssText);

    const modifiedCssText = converter(cssText);
    setModifiedCss(modifiedCssText);
  };

  return (
    <div className="p-4 h-screen">
      <Navbar />
      <h1 className="text-[#f5f5f4] text-lg font-bold uppercase sm:text-3xl md:text-5xl lg:text-7xl xl:lg:text-9xl mb-9 ">
        CSS Unit Converter
      </h1>
      <div className=" mb-20 block md:flex ">
        <label htmlFor="cssFile" className="mr-4 text-primary ">
          Upload CSS file:
        </label>
        <input
          className="text-primary "
          type="file"
          id="cssFile"
          accept=".css"
          onChange={handleFileUpload}
        />
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <h2 className="text-xl font-bold mb-2 text-primary">Original CSS</h2>
          <textarea
            className="w-full h-64 border border-gray-500 rounded-md p-2"
            readOnly
            value={originalCss}
          />
        </div>
        <div className="w-full md:w-1/2 md:ml-4 mt-4 md:mt-0">
          <h2 className="text-xl font-bold mb-2 text-primary">Modified CSS</h2>
          <textarea
            className="w-full h-64 border border-gray-500 rounded-md p-2"
            readOnly
            value={modifiedCss}
            placeholder="CSS will be display here"
          />
        </div>
      </div>
      <div className="text-center mt-6">
        <span className="text-red-400">*</span>
        <p className="text-xl font-bold inline-block ml-1 text-primary">
          16px = 1em
        </p>
      </div>
      <div className="text-center  text-normal text-white ">
        If you have a request to add or a problem with the website's feature(s),
        please submit it{' '}
        <span className="underline cursor-pointer">
          {' '}
          <a href="https://github.com/ChristopherAlphonse/CssConverter/issues/new ">
            here
          </a>{' '}
        </span>
        .
      </div>
      {modifiedCss && <Button css={modifiedCss} />}
      <Footer />
    </div>
  );
}

export default Form;
