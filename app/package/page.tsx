import { Metadata } from 'next';

import PackageContents from '../../features/package/PackageContents';

export const metadata: Metadata = {
  title: 'package',
  description: 'package',
};

export default function PackagePage() {
  return <PackageContents />;
}
