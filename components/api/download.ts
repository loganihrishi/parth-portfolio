import type { NextApiRequest, NextApiResponse } from 'next';
import AWS from 'aws-sdk';

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const downloadFile = async (req: NextApiRequest, res: NextApiResponse) => {
  const { key } = req.query;

  if (!key) {
    return res.status(400).json({ error: 'Missing key parameter' });
  }

  const params = {
    Bucket: process.env.AWS_BUCKET_NAME!,
    Key: key as string,
  };

  try {
    const data = await s3.getObject(params).promise();
    res.setHeader('Content-Type', data.ContentType || 'application/octet-stream');
    res.setHeader('Content-Disposition', `attachment; filename="${key}"`);
    res.send(data.Body);
  } catch (error) {
    console.error('Error downloading file from S3:', error);
    res.status(500).json({ error: 'Error downloading file from S3' });
  }
};

export default downloadFile;