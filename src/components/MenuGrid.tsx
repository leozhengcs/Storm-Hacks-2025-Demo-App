import Image from "next/image";

export default function MenuGrid({ items }: { items: any }) {
  return (
    <div className="grid">
      {items.map((item: any) => (
        <article key={item.id} className="card">
          <Image
            src={item.image}
            alt={item.name}
            width={600}
            height={400}
            style={{ width: "100%", height: "220px", objectFit: "cover" }}
            priority
          />
          <div className="pad">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p className="price">${item.price.toFixed(2)}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
