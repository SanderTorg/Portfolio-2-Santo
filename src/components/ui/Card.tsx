interface CardProps {
  title: string;
  children: React.ReactNode;
  image?: string;
}

export default function Card({ title, image, children }: CardProps) {
  return (
    <div className="card text-left cursor-pointer hover:shadow-lg transition-shadow duration-300 p-4 rounded-lg bg-white">
      <h2>{title}</h2>
      {image && <img src={image} alt={title} />}
      <p>{children}</p>
    </div>
  );
}
