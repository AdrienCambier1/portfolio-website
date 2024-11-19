interface TitleSectionProps {
  title: string;
}

export default function TitleSection({ title }: TitleSectionProps) {
  return (
    <div className="title-section">
      <h1>{title}</h1>
      <div className="h1-underline" />
    </div>
  );
}
