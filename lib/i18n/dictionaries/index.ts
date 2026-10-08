import { Locale, TranslationSchema } from '../types';
import { en } from './en';
import { ko } from './ko';
import { ja } from './ja';
import { zhTW } from './zh-TW';

export const dictionaries: Record<Locale, TranslationSchema> = {
  en,
  ko,
  ja,
  'zh-TW': zhTW,
};
