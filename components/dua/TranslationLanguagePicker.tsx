import SegmentedControl from '../SegmentedControl';
import type { DuaTranslationLanguage } from '../../types/dua';

const OPTIONS: DuaTranslationLanguage[] = ['auto', 'en', 'dv'];

interface Props {
  value: DuaTranslationLanguage;
  onChange: (value: DuaTranslationLanguage) => void;
  labels: Record<DuaTranslationLanguage, string>;
}

/** A three-way Automatic/English/Dhivehi picker for the dua translation-language preference, built on the app's existing SegmentedControl. */
export default function TranslationLanguagePicker({ value, onChange, labels }: Props) {
  return (
    <SegmentedControl
      segments={OPTIONS.map((key) => ({ key, label: labels[key] }))}
      selectedKey={value}
      onChange={(key) => onChange(key as DuaTranslationLanguage)}
    />
  );
}
