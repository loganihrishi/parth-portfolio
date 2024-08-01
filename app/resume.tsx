'use client';

import { useEffect, useState } from 'react';

const Resume = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Set loaded to true when the component mounts
    setLoaded(true);

    // Call handleDownload to initiate the download
    handleDownload();
  }, []);

  const handleDownload = () => {
    const url = 'https://threads-clone-local-parth.s3.eu-north-1.amazonaws.com/Parth_s_Resume.pdf';
    const a = document.createElement('a');
    a.href = url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.click();
  };

  return (
    <div id="resume" className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-900">
      {loaded ? (
        <h1 className="text-xl text-gray-700 dark:text-gray-300">Downloading...</h1>
      ) : (
        <h1 className="text-xl text-gray-700 dark:text-gray-300">Loading...</h1>
      )}
    </div>
  );
};

export default Resume;
