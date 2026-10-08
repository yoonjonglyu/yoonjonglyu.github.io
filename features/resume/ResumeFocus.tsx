import { type FC } from 'react';
import ReadItem from '@components/molecules/ReadItem';
import { useTranslation } from '@hooks/useTranslation';

const ResumeFocus: FC = () => {
  const { t } = useTranslation();

  return (
    <ReadItem
      desc={t.resume.focusDesc}
      highlight={t.resume.focusHighlights}
    />
  );
};

export default ResumeFocus;
