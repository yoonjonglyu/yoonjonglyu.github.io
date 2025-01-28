import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
};

export default function PrivacyPolicyPage() {
  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        lineHeight: '1.6',
        margin: '0',
        padding: '20px',
        backgroundColor: '#f9f9f9',
        color: '#333',
      }}>
      <h1 style={{ color: '#444' }}>개인정보 처리방침</h1>
      <p>
        본 개인정보 처리방침은 귀하가 제공하는 개인정보가 어떻게 수집, 사용,
        공유 및 보호되는지에 대해 설명합니다. 당사는 관련 법령 및 규정을
        준수하여 개인정보를 안전하게 처리하기 위해 최선을 다하고 있습니다.
      </p>

      <hr
        style={{ border: '0', borderTop: '1px solid #ccc', margin: '20px 0' }}
      />

      <section>
        <h2 style={{ color: '#444' }}>1. 개인정보의 수집 및 이용 목적</h2>
        <p>
          당사는 다음과 같은 목적을 위해 Google API를 통해 개인정보를 수집하고
          이용합니다:
        </p>
        <ul>
          <li>서비스 제공: 귀하가 요청한 서비스 및 기능을 제공하기 위해.</li>
          <li>사용자 인증: Google 계정 로그인을 통한 사용자 식별 및 인증.</li>
          <li>사용자 경험 개선: 맞춤형 서비스 제공 및 기능 최적화.</li>
          <li>법적 의무 준수: 관련 법령 및 규정을 준수하기 위해.</li>
        </ul>
      </section>

      <section>
        <h2 style={{ color: '#444' }}>2. 수집하는 개인정보 항목</h2>
        <p>Google API를 통해 다음과 같은 개인정보가 수집될 수 있습니다:</p>
        <ul>
          <li>Google 계정 정보: 이름, 이메일 주소, 프로필 사진 등.</li>
          <li>
            Google API를 통해 제공되는 기타 데이터: 귀하의 동의를 기반으로
            수집되는 데이터(예: Google Drive 파일, 캘린더 이벤트 등).
          </li>
        </ul>
      </section>

      <section>
        <h2 style={{ color: '#444' }}>3. 개인정보의 보유 및 이용 기간</h2>
        <p>수집된 개인정보는 다음 기준에 따라 보유 및 이용됩니다:</p>
        <ul>
          <li>서비스 제공 목적 달성 시까지.</li>
          <li>관련 법령에서 정한 기간 동안 보유.</li>
          <li>사용자의 요청이 있을 경우 즉시 삭제.</li>
        </ul>
      </section>

      <section>
        <h2 style={{ color: '#444' }}>4. 개인정보의 제3자 제공 및 위탁</h2>
        <p>
          당사는 귀하의 개인정보를 원칙적으로 제3자에게 제공하지 않습니다. 다만,
          아래의 경우에 한하여 제공될 수 있습니다:
        </p>
        <ul>
          <li>법령에 의거한 요청이 있는 경우.</li>
          <li>사용자 동의가 있는 경우.</li>
          <li>
            Google API 서비스 제공을 위해 필요한 경우(예: Google과의 데이터
            처리).
          </li>
        </ul>
      </section>

      <section>
        <h2 style={{ color: '#444' }}>5. 개인정보 보호를 위한 조치</h2>
        <p>
          당사는 귀하의 개인정보를 안전하게 보호하기 위해 다음과 같은 조치를
          취합니다:
        </p>
        <ul>
          <li>
            데이터 암호화: Google API를 통해 수집된 데이터는 암호화되어 저장 및
            전송됩니다.
          </li>
          <li>접근 권한 제한: 개인정보 접근 권한을 최소한으로 제한합니다.</li>
          <li>
            정기 보안 점검: 시스템 및 네트워크의 보안 상태를 정기적으로
            점검합니다.
          </li>
        </ul>
      </section>

      <section>
        <h2 style={{ color: '#444' }}>6. 사용자의 권리</h2>
        <p>귀하는 다음과 같은 권리를 행사할 수 있습니다:</p>
        <ul>
          <li>개인정보 열람 요청.</li>
          <li>개인정보 수정 및 삭제 요청.</li>
          <li>개인정보 처리 정지 요청.</li>
        </ul>
        <p>권리 행사를 원하실 경우, 당사에 문의하시면 신속히 처리하겠습니다.</p>
      </section>

      <section>
        <h2 style={{ color: '#444' }}>7. 문의처</h2>
        <p>
          개인정보 처리방침에 대한 질문 또는 문의가 있으시면 아래로 연락해
          주시기 바랍니다:
        </p>
        <div style={{ marginTop: '10px' }}>
          <p>
            이메일:{' '}
            <a href='mailto:yunjonglyu@gmail.com'>yunjonglyu@gmail.com</a>
          </p>
          {/*           <p>전화번호: 000-0000-0000</p>
          <p>주소: [주소를 여기에 기입하세요]</p> */}
        </div>
      </section>

      <section>
        <h2 style={{ color: '#444' }}>8. 변경 사항 안내</h2>
        <p>
          본 개인정보 처리방침은 변경될 수 있으며, 변경 시 사전에 공지하여
          드립니다. 변경된 내용은 공지일로부터 효력이 발생합니다.
        </p>
      </section>

      <hr
        style={{ border: '0', borderTop: '1px solid #ccc', margin: '20px 0' }}
      />

      <footer>
        <p>
          <strong>부칙:</strong> 본 개인정보 처리방침은 2025년 1월 29일부터
          시행됩니다.
        </p>
      </footer>
    </div>
  );
}
