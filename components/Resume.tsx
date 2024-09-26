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
    const url = 'https://docs.google.com/document/d/1z1FCToE24ocjeD984sE6zEvEhFdKjzS0jPnFZCXh-SU/edit?usp=sharing';
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
