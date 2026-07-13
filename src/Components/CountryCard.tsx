interface CountryCardProps {
  image: any;
  title: string;
  content: string;
}

export default function CountryCard({
  image,
  title,
  content,
}: CountryCardProps) {
  return (
    <div className="explanation">
      <img
        src={image}
        alt={title}
        className="explanation-img"
      />
      <div className="explanation-text">
        <p className="title-country">{title}</p>
        <div className="line-country" />
        <p className="text-country">{content}</p>
      </div>
    </div>
  );
}
