import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Daoxin Privacy Policy',
};

export default function PrivacyPolicyDaoxinPage() {
  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      lineHeight: '1.6',
      color: '#e0e0e0', // 몰입감을 주는 다크 모드 스타일
      maxWidth: '800px',
      margin: '0 auto',
      padding: '40px 20px',
      backgroundColor: '#000000', // 순수 블랙 배경
    },
    title: {
      borderBottom: '2px solid #00BFA5', // Daoxin의 오리엔탈/비취색(Jade Green) 무드에 맞춘 포인트 컬러
      paddingBottom: '10px',
      color: '#ffffff',
      fontSize: '2rem',
    },
    heading: {
      marginTop: '30px',
      color: '#00BFA5', // 비취색 포인트
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
      backgroundColor: '#111111',
      padding: '20px',
      borderRadius: '8px',
      marginTop: '40px',
      border: '1px solid #222222',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Privacy Policy for Daoxin</h1>
      <p style={styles.lastUpdated}>Last Updated: May 24, 2026</p>

      <p style={styles.text}>
        Daoxin ("we," "our," or "us") operates the Daoxin mobile application (the "Service"). 
        Your privacy is our utmost priority, and this policy outlines how we handle and protect your data.
      </p>

      <h2 style={styles.heading}>1. Information Collection and Use (Local-First Architecture)</h2>
      <p style={styles.text}>
        Daoxin is designed strictly as a local-first cultivation and habit-tracking tool. 
        <strong>
          {' '}
          We do not collect, store, or transmit any of your personal task logs, spiritual progress (Qi), 
          sudden realizations (Notes), or overall cultivation statistics to any external servers owned by us.
        </strong>{' '}
        All data generated within the app is stored exclusively on your device&apos;s local storage.
      </p>

      <h2 style={styles.heading}>2. Local Data Export & Import (JSON)</h2>
      <p style={styles.text}>
        To grant you complete ownership over your cultivation data, Daoxin provides a manual data management feature:
      </p>
      <ul style={styles.list}>
        <li>
          <strong>Data Control:</strong> You can export all your logs, progress, and historical stats into a structured JSON file at any time.
        </li>
        <li>
          <strong>Privacy Guaranteed:</strong> The generation, export, and import of this backup file happen entirely on your local device. 
          We have no access to the files you create or transfer through this feature.
        </li>
      </ul>

      <h2 style={styles.heading}>3. Google Drive Synchronization (Optional)</h2>
      <p style={styles.text}>
        Daoxin provides an optional synchronization feature using the <strong>Google Drive API</strong> to safeguard your progress across devices. 
        This feature is turned off by default and only activates upon your explicit action:
      </p>
      <ul style={styles.list}>
        <li>
          <strong>Data Access:</strong> The app requests permission only to the specific &quot;Application Data Folder&quot; 
          created by Daoxin on your Google Drive. We cannot view, access, or modify any other personal files or folders in your drive.
        </li>
        <li>
          <strong>Data Transmission:</strong> Your data is transmitted securely and directly between your device and Google&apos;s servers 
          via encrypted channels. No data routes through our infrastructure.
        </li>
        <li>
          <strong>Purpose:</strong> This data is utilized solely to sync your cultivation journey, breakthrough ranks, 
          and notes across multiple devices or to restore your data upon reinstallation.
        </li>
      </ul>

      <h2 style={styles.heading}>4. Third-Party Advertising (Google AdMob)</h2>
      <p style={styles.text}>
        To sustain the continuous development of the ABILITY series and offer our core services for free, 
        we integrate <strong>Google AdMob</strong>. AdMob may collect and process certain non-personal data to serve relevant advertisements:
      </p>
      <ul style={styles.list}>
        <li>
          <strong>Device Identifiers:</strong> AdMob may utilize your device&apos;s advertising identifier (AAID/IDFA) to tailor 
          and measure the performance of ad placements.
        </li>
        <li>
          <strong>Ad Interaction:</strong> Basic statistics regarding your engagement with ads may be logged by Google 
          to optimize the advertising network.
        </li>
      </ul>

      <h2 style={styles.heading}>5. App Permissions</h2>
      <p style={styles.text}>
        To ensure optimal functionality and immersion, Daoxin may request the following permissions on your device:
      </p>
      <ul style={styles.list}>
        <li>
          <strong>Notifications:</strong> Used to deliver timely reminders for your daily cultivation tasks and to notify you of major progress milestones.
        </li>
        <li>
          <strong>Identity/Accounts:</strong> (Optional) Used exclusively for Google Sign-In to establish a secure connection with the Google Drive synchronization feature.
        </li>
      </ul>

      <h2 style={styles.heading}>6. Children&apos;s Privacy</h2>
      <p style={styles.text}>
        Daoxin is entirely safe for users of all ages. Because all primary data is managed locally and we do not knowingly collect, 
        harvest, or request personal information from children, the Service complies with global privacy regulations. 
        Advertisements served through AdMob adhere strictly to Google&apos;s policy requirements regarding families and children.
      </p>

      <div style={styles.contactBox}>
        <h2 style={{ ...styles.heading, marginTop: 0 }}>7. Contact Us</h2>
        <p style={styles.text}>
          If you have any questions or insights regarding this Privacy Policy, feel free to contact the developer:
        </p>
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