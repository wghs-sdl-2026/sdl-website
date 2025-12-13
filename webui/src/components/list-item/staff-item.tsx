import { useTranslation } from "react-i18next";

interface groupProps {
  group: string;
}

export const StaffItem = ({ group }: groupProps) => {
  const { t } = useTranslation();
  const member: string[] = t(`staff.${group}.members`)
    .split(",")
    .map((s) => s.trim());
  return (
    <div>
      <h1 className="text-2xl mb-2">{t(`staff.${group}.title`)}</h1>
      <ul className="ml-10 text-xl">
        {member.map((item: string, i: number) => (
          <li key={i} className="mb-2">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
