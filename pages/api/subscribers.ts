import type { NextApiRequest, NextApiResponse } from 'next';
import mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // get subscriber count from Mailchimp
  const result = await mailchimp.lists.getListMembersInfo(
    process.env.MAILCHIMP_AUDIENCE_ID
  );

  return res.status(200).json({ count: result.total_items });
}
