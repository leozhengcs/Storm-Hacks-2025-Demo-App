import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section className="hero section">
        <div>
          <h1>Your daily cup of cozy.</h1>
          <p>Small-batch coffee, warm pastries, and friendly faces. Drop in or order ahead.</p>
          <div className="hero-cta">
            <Link href="/menu" className="btn">View Menu</Link>
            <Link href="/order" className="btn secondary">Order Online</Link>
          </div>
        </div>
        <div>
          <Image
            src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1600&auto=format&fit=crop"
            alt="Coffee and croissant"
            width={1200}
            height={800}
            style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 14 }}
            priority
          />
        </div>
      </section>

      <section className="section">
        <h2>What we’re about</h2>
        <p className="lead">Thoughtfully sourced beans, baked-daily pastries, and a space to slow down.</p>
      </section>

      <section className="section">
        <h2>Hours</h2>
        <p>Mon-Fri: 7:00-5:00 · Sat-Sun: 8:00-4:00</p>
      </section>
    </>
  );
}
