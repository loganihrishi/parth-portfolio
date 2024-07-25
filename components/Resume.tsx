'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Resume = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the S3 URL
    window.location.href = 'https://threads-clone-local-parth.s3.eu-north-1.amazonaws.com/Parth_s_Resume.pdf';
  }, []);

  return null;
};

export default Resume;
