const { withContentlayer } = require('next-contentlayer');

/**
 * @type {import('next').NextConfig}
 */
module.exports = withContentlayer({
  swcMinify: true,
  reactStrictMode: true,
  images: {
    domains: [
      'i.scdn.co', // Spotify Album Art
      'pbs.twimg.com', // Twitter Profile Picture
      'i.pravatar.cc', // Random Profile Picture
      'static.wixstatic.com', // Wix Images
      'media.licdn.com', // LinkedIn Pictures
      'dummyimage.com', // Dummy Images
      'drive.google.com', // Google Drive Images
      'is3-ssl.mzstatic.com', // Apple Images
      'is2-ssl.mzstatic.com', // Apple Images
      'is1-ssl.mzstatic.com', // Apple Images
      'optimise2.assets-servd.host', // Optimise Images
      'www.grandrapidsdeveloper.com' // My Images
    ]
  },
  experimental: {
    legacyBrowsers: false
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders
      }
    ];
  }
  // pending this preact update: https://github.com/preactjs/preact-render-to-string/pull/259
  /*
  webpack: (config, { dev, isServer }) => {
    // Replace React with Preact only in client production build

    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        'react/jsx-runtime.js': 'preact/compat/jsx-runtime',
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat'
      });
    }

    return config;
  }
  */
});

// https://nextjs.org/docs/advanced-features/security-headers
const ContentSecurityPolicy = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' *.youtube.com *.twitter.com vercel.live;
    child-src *.youtube.com *.google.com *.twitter.com vercel.live;
    style-src 'self' 'unsafe-inline' *.googleapis.com;
    img-src * blob: data:;
    media-src 'none';
    connect-src *;
    font-src 'self';
`;

const securityHeaders = [
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\n/g, '')
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload'
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()'
  }
];
