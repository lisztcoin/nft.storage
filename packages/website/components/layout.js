import Head from 'next/head'
import Footer from './footer.js'
import Navbar from './navbar.js'
import Loading from './loading'
import { useUser } from '../lib/user'
import { getVersion } from '../lib/api'
import { getStatusPageSummary } from '../lib/statuspage-api'
import { useQuery } from 'react-query'

const MaintenanceBanner = () => {
  let maintenanceMessage = ''

  const { data: statusPageData, error: statusPageError } = useQuery(
    'get-statuspage-summary',
    () => getStatusPageSummary()
  )
  const scheduledMaintenances =
    statusPageData?.scheduled_maintenances.filter(
      (/** @type {{ status: string; }} */ maintenance) =>
        maintenance.status !== 'completed'
    ) || []

  const { data: apiVersionData, error: apiVersionError } = useQuery(
    'get-version',
    () => getVersion(),
    {
      enabled:
        (statusPageData && scheduledMaintenances.length === 0) ||
        statusPageError !== null,
    }
  )

  if (scheduledMaintenances.length > 0) {
    maintenanceMessage =
      statusPageData.scheduled_maintenances[0].incident_updates[0].body
  }

  if (apiVersionData && apiVersionData.mode !== 'rw' && !maintenanceMessage) {
    maintenanceMessage =
      'The NFT.Storage API is currently undergoing maintenance...'
  }

  if (statusPageError) {
    console.log(statusPageError)
  }

  if (apiVersionError) {
    console.log(apiVersionError)
  }

  if (maintenanceMessage) {
    return (
      <div className="bg-yellow bb b--black" style={{ zIndex: 50 }}>
        <div className="lh-copy mw9 tc center pv3 ph3">
          <span className="f4">⚠</span> {maintenanceMessage}
        </div>
      </div>
    )
  } else {
    return null
  }
}

/**
 * @typedef {import('react').ReactChildren} Children
 * @typedef {(props: import('./types.js').LayoutChildrenProps) => Children} ChildrenFn
 */
/**
 *
 * @param {import('./types.js').LayoutProps & {children: ChildrenFn}} props
 * @returns
 */
export default function Layout({
  callback,
  needsUser = false,
  children,
  redirectTo,
  redirectIfFound = false,
  title = 'NFT Storage - Free decentralized storage and bandwidth for NFTs on IPFS and Filecoin.',
  description = 'NFT Storage is a brand new service, built specifically for storing off-chain NFT data on IPFS and Filecoin.',
  navBgColor = 'bg-nsorange',
}) {
  const { user, status } = useUser({
    redirectTo,
    redirectIfFound,
    enabled: needsUser,
  })
  const shouldWaitForUser = needsUser && status === 'loading'

  return (
    <div className="sans-serif flex flex-column min-vh-100">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nft.storage" />
        <meta
          property="og:image"
          content="https://nft.storage/images/social.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@protocollabs" />
        <meta name="twitter:creator" content="@protocollabs" />
      </Head>
      {shouldWaitForUser ? (
        <Loading />
      ) : callback ? (
        <>
          <Loading />
          {children({ user })}
        </>
      ) : (
        <>
          <MaintenanceBanner />
          <Navbar bgColor={navBgColor} user={user} />
          {children({ user })}
          <Footer />
        </>
      )}
    </div>
  )
}
