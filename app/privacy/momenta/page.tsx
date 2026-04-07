import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Momenta Privacy Policy',
};

export default function PrivacyPolicyMomentaPage() {
  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      lineHeight: '1.6',
      color: '#e0e0e0', // 다크 모드 스타일로 변경 (앱 컨셉 유지)
      maxWidth: '800px',
      margin: '0 auto',
      padding: '40px 20px',
      backgroundColor: '#000',
    },
    title: {
      borderBottom: '2px solid #2196F3',
      paddingBottom: '10px',
      color: '#fff',
      fontSize: '2rem',
    },
    heading: {
      marginTop: '30px',
      color: '#2196F3',
      fontSize: '1.5rem',
    },
    text: {
      marginBottom: '15px',
      textAlign: 'justify',
    },
    lastUpdated: {
      color: '#868e96',
      fontStyle: 'italic',
      marginBottom: '20px',
    },
    list: {
      marginBottom: '15px',
      paddingLeft: '20px',
    },
    contactBox: {
      backgroundColor: '#1a1a1a',
      padding: '20px',
      borderRadius: '8px',
      marginTop: '40px',
      border: '1px solid #333',
    },
  };
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Privacy Policy for Momenta</h1>
      <p style={styles.lastUpdated}>Last Updated: April 08, 2026</p>

      <p style={styles.text}>
        Momenta ("we," "our," or "us") operates the Momenta (GravityTimer)
        mobile application (the "Service"). Your privacy is our top priority,
        and this policy explains how we handle your data.
      </p>

      <h2 style={styles.heading}>1. Information Collection and Use</h2>
      <p style={styles.text}>
        Momenta is designed to be a local-first productivity tool.
        <strong>
          {' '}
          We do not collect, store, or transmit any of your personal focus data
          or statistics to external servers.
        </strong>
        All content created within the app (Focus logs, Level progress, and
        Settings) is stored exclusively on your device's local storage.
      </p>

      <h2 style={styles.heading}>
        2. Google Drive Synchronization (Optional)
      </h2>
      <p style={styles.text}>
        Momenta provides an optional synchronization feature using the{' '}
        <strong>Google Drive API</strong>. This feature is disabled by default
        and only activated upon your explicit choice:
      </p>
      <ul style={styles.list}>
        <li>
          <strong>Data Access:</strong> The app requests access only to the
          specific "Application Data Folder" created by Momenta on your Google
          Drive. We cannot access your other personal files or folders.
        </li>
        <li>
          <strong>Data Transmission:</strong> Your focus data is transmitted
          directly between your device and Google's servers via encrypted
          channels.
        </li>
        <li>
          <strong>Purpose:</strong> This data is used solely to keep your focus
          history and progress in sync across multiple devices and to provide a
          backup solution.
        </li>
      </ul>

      <h2 style={styles.heading}>3. Third-Party Advertising (Google AdMob)</h2>
      <p style={styles.text}>
        To provide the "Energy Recharge" feature for free, we use{' '}
        <strong>Google AdMob</strong>. AdMob may collect and use certain data to
        serve advertisements:
      </p>
      <ul style={styles.list}>
        <li>
          <strong>Device Identifiers:</strong> AdMob may use your device's
          advertising ID (AAID/IDFA) to provide relevant ad experiences.
        </li>
        <li>
          <strong>Ad Interaction:</strong> Information about how you interact
          with ads may be collected to measure ad performance.
        </li>
      </ul>

      <h2 style={styles.heading}>4. App Permissions</h2>
      <p style={styles.text}>
        To ensure full functionality, Momenta may request the following
        permissions:
      </p>
      <ul style={styles.list}>
        <li>
          <strong>Notifications:</strong> Used to alert you when a focus session
          ends or when energy is fully recharged.
        </li>
        <li>
          <strong>Identity/Accounts:</strong> (Optional) Used for Google Login
          to facilitate the Google Drive sync feature.
        </li>
      </ul>

      <h2 style={styles.heading}>5. Children's Privacy</h2>
      <p style={styles.text}>
        Momenta is safe for users of all ages. Because the core focus data is
        stored locally and we do not knowingly collect personal information from
        children, it is compliant with global privacy standards. Advertising
        served via AdMob follows Google's policies regarding families and
        children.
      </p>

      <div style={styles.contactBox}>
        <h2 style={{ ...styles.heading, marginTop: 0 }}>6. Contact Us</h2>
        <p style={styles.text}>
          <strong>Developer:</strong> RYUIS
        </p>
        <p style={styles.text}>
          <strong>Email:</strong> yunjonglyu@gmail.com
        </p>
      </div>
    </div>
  );
}
