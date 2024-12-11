import { withSentryConfig } from "@sentry/nextjs"
import type { NextConfig } from "next"

const enableSentry = Boolean(process.env.SENTRY_DSN)

const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline';
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
`

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: cspHeader.replace(/\n/g, ""),
          },
        ],
      },
    ]
  },
}

const getSentryConfig = () =>
  withSentryConfig(nextConfig, {
    // For all available options, see:
    // https://github.com/getsentry/sentry-webpack-plugin#options

    org: "personal-lsj",
    project: "javascript-nextjs",

    // Only print logs for uploading source maps in CI
    silent: !process.env.CI,

    // For all available options, see:
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

    widenClientFileUpload: false,
    hideSourceMaps: true,
    disableLogger: true,
    automaticVercelMonitors: false,
  })

const CONFIG = enableSentry ? getSentryConfig() : nextConfig

export default CONFIG
