import { TranslationSchema } from '../types';

export const ja: TranslationSchema = {
  nav: {
    resume: '経歴書',
    work: '制作実績',
    archive: 'アーカイブ',
  },
  footer: {
    designedBy: 'Designed by YOONJONGRYU(github:yoonjonglyu)',
    rights: 'All rights reserved.',
  },
  home: {
    title1: 'Building Products.',
    title2: 'Architecting Systems.',
    subtitle1: 'スケーラブルなUIシステムを設計し、',
    subtitle2: '実際のプロダクトとして提供・展開します。',
    projects: 'プロジェクト',
    packages: 'パッケージ',
    loading: 'リソースを読み込み中...',
    refreshNotice: '画面が表示されない場合は、ページを再読み込みしてください。',
  },
  resume: {
    focusTitle: 'フォーカス',
    workTitle: '職務経歴',
    skillsTitle: 'スキル',
    contactTitle: '連絡先',
    headerRole: 'ソフトウェアエンジニア＆UIアーキテクト · AIエージェント＆モバイルセキュリティ',
    headerSummaryBold: 'AIエージェントハーネスからオンデバイスセキュリティアプリ、UIアーキテクチャまで実製品を自ら設計・リリースするエンジニアです。',
    headerSummaryText: 'LLM自律エージェント基盤（Brain）、ゼロ知識暗号化モバイルアプリ（SeedVault）、デザインシステム構築に深い専門性を備えています。',
    focusDesc: `スケーラブルなUIシステム、オンデバイスセキュリティ、自律AIエージェントアーキテクチャの設計に特化したエンジニアです。

• LLMの自律推論とツール実行を制御するエージェントハーネス（Brain）および多層ガードレールシステムの構築
• TypeScript、React 19、Next.js 16、Storybookによるコンポーネント駆動型デザインシステムおよび多言語Webの設計
• Argon2idとAES-256-GCMによるゼロ知識モバイルセキュリティアプリ（SeedVault）のGoogle Play正式リリース・運用
• 高パフォーマンスなPWA（Serwist）やオンデバイスAIビジョンなど、オフラインファースト環境の実装

要件定義やアーキテクチャ設計から暗号学、AIオーケストレーション、ストア公開まで全工程を単独で完遂します。`,
    focusHighlights: [
      'ソフトウェアエンジニア',
      'AIエージェント',
      'UIアーキテクト',
      'TypeScript',
      'React 19',
      'Next.js 16',
      'Storybook',
      'PWA',
      'オフラインファースト',
      'オンデバイスセキュリティ',
      'Argon2id',
      'Brain Harness',
    ],
    skillCategories: {
      ai: 'AI＆エージェント基盤',
      frontend: 'フロントエンド＆設計',
      mobile: 'モバイル＆ハイブリッド',
      security: 'セキュリティ＆暗号化',
      state: '状態管理＆スタイリング',
      tooling: 'テスト＆ビルドツール',
    },
  },
  archive: {
    backToArchive: '← アーカイブに戻る',
    github: 'GitHub',
    npm: 'NPM',
    website: 'ウェブサイト',
  },
  common: {
    language: '言語',
  },
};
