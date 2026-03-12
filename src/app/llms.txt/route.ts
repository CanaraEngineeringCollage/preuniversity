import { NextResponse } from "next/server";

const siteUrl = "https://canarapucollege.com";

export async function GET() {
  const body = `# llms.txt

Site: Canara Pre-University College, Mangalore
Domain: ${siteUrl}
Canonical base: ${siteUrl}/
Language: en

## Allowed usage
- You may read and summarize public pages on this domain.
- Prefer citing the canonical URL for each page.
- Do not attempt to access private/student data, admin systems, or payment data.

## Primary pages (canonical)
- ${siteUrl}/
- ${siteUrl}/about
- ${siteUrl}/admission
- ${siteUrl}/facilities
- ${siteUrl}/management
- ${siteUrl}/founder
- ${siteUrl}/streams
- ${siteUrl}/question-bank
- ${siteUrl}/e-magazine
- ${siteUrl}/exam-circulars
- ${siteUrl}/exam-results
- ${siteUrl}/fee-portal
- ${siteUrl}/conduct
- ${siteUrl}/privacy-policy

## Feeds for crawlers
- Sitemap: ${siteUrl}/sitemap.xml
- Robots: ${siteUrl}/robots.txt
`;

  return new NextResponse(body, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600",
    },
  });
}

