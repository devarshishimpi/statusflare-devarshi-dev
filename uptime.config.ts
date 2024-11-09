const pageConfig = {
  // Title for your status page
  title: "Devarshi Shimpi's Status Page",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://github.com/devarshishimpi', label: 'GitHub' },
    { link: 'https://devarshi.dev/blog', label: 'Blog' },
    { link: 'mailto:devarshishimpi@gmail.com', label: 'Email' },
    { link: 'https://bio.link/devarshishimpi', label: 'About', highlight: true },
  ],
}

const workerConfig = {
  // Write KV at most every 3 minutes unless the status changed
  kvWriteCooldownMinutes: 3,
  // Enable HTTP Basic auth for status page & API by uncommenting the line below, format `<USERNAME>:<PASSWORD>`
  // passwordProtection: 'username:password',
  // Define all your monitors here
  monitors: [
    {
      // `id` should be unique, history will be kept if the `id` remains constant
      id: 'devarshi_dev',
      // `name` is used at status page and callback message
      name: 'Personal Portfolio Site',
      // `method` should be a valid HTTP Method
      method: 'GET',
      // `target` is a valid URL
      target: 'https://devarshi.dev',
      // [OPTIONAL] `tooltip` is ONLY used at status page to show a tooltip
      // tooltip: 'This is a tooltip for this monitor',
      // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
      statusPageLink: 'https://devarshi.dev',
      // [OPTIONAL] `expectedCodes` is an array of acceptable HTTP response codes, if not specified, default to 2xx
      expectedCodes: [200],
      // [OPTIONAL] `timeout` in millisecond, if not specified, default to 10000
      timeout: 10000,
      // [OPTIONAL] headers to be sent
      headers: {
        'User-Agent': 'Uptimeflare',
        // Authorization: 'Bearer YOUR_TOKEN_HERE',
      },
      // [OPTIONAL] if specified, the response must contains the keyword to be considered as operational.
      responseKeyword: 'success',
      // [OPTIONAL] if specified, the check will run in your specified region,
      // refer to docs https://github.com/devarshishimpi/statusflare-devarshi-dev/wiki/Geo-specific-checks-setup before setting this value
      // checkLocationWorkerRoute: 'https://xxx.example.com',
    },
    {
      id: 'static_devarshi_dev',
      name: 'Static CDN',
      method: 'GET',
      target: 'https://static.devarshi.dev',
      statusPageLink: 'https://static.devarshi.dev',
      expectedCodes: [200, 307],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
      responseKeyword: 'success',
    },
    {
      id: 'cve_2024_6387_checker_devarshi_dev',
      name: 'CVE 2024 6387 Checker Website',
      method: 'GET',
      target: 'https://cve-2024-6387-checker.devarshi.dev/',
      statusPageLink: 'https://cve-2024-6387-checker.devarshi.dev/',
      expectedCodes: [200, 307],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
      responseKeyword: 'success',
    },
    {
      id: 'lunar_devarshi_dev',
      name: 'Lunar Theme Website',
      method: 'GET',
      target: 'https://lunar.devarshi.dev/',
      statusPageLink: 'https://lunar.devarshi.dev/',
      expectedCodes: [200, 307],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
      responseKeyword: 'success',
    },
    {
      id: 'data_devarshi_dev',
      name: 'Analytics Status',
      method: 'GET',
      target: 'https://data.devarshi.dev/',
      statusPageLink: 'https://data.devarshi.dev/',
      expectedCodes: [200, 307],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
      responseKeyword: 'success',
    },
    // Example TCP Monitor
    // {
    //   id: 'test_tcp_monitor',
    //   name: 'Example TCP Monitor',
    //   // `method` should be `TCP_PING` for tcp monitors
    //   method: 'TCP_PING',
    //   // `target` should be `host:port` for tcp monitors
    //   target: '1.2.3.4:22',
    //   tooltip: 'My production server SSH',
    //   statusPageLink: 'https://example.com',
    //   timeout: 5000,
    // },
  ],
  // notification: {
  //   // [Optional] apprise API server URL
  //   // if not specified, no notification will be sent
  //   appriseApiServer: "https://apprise.example.com/notify",
  //   // [Optional] recipient URL for apprise, refer to https://github.com/caronc/apprise
  //   // if not specified, no notification will be sent
  //   recipientUrl: "tgram://bottoken/ChatID",
  //   // [Optional] timezone used in notification messages, default to "Etc/GMT"
  //   timeZone: "Asia/Kolkata",
  //   // [Optional] grace period in minutes before sending a notification
  //   // notification will be sent only if the monitor is down for N continuous checks after the initial failure
  //   // if not specified, notification will be sent immediately
  //   gracePeriod: 5,
  // },
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called when there's a status change for any monitor
      // Write any Typescript code here

      // This will not follow the grace period settings and will be called immediately when the status changes
      // You need to handle the grace period manually if you want to implement it
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called EVERY 1 MINTUE if there's an on-going incident for any monitor
      // Write any Typescript code here
    },
  },
}

// Don't forget this, otherwise compilation fails.
export { pageConfig, workerConfig }
