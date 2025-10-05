import MenuGrid from "@/components/MenuGrid";

const ITEMS = [
  {
    id: "cap",
    name: "Cappuccino",
    price: 4.25,
    description: "Double espresso, steamed milk, silky foam.",
    image: "https://images.unsplash.com/photo-1512568400610-62da28bc8a13?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: "latte",
    name: "Vanilla Latte",
    price: 5.00,
    description: "House vanilla syrup + velvety microfoam.",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: "drip",
    name: "Drip Coffee",
    price: 3.00,
    description: "Freshly brewed, medium roast.",
    image: "https://images.unsplash.com/photo-1518057111178-44a106bad636?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "croissant",
    name: "Butter Croissant",
    price: 3.75,
    description: "Flaky, buttery, baked every morning.",
    image: "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "avotoast",
    name: "Avocado Toast",
    price: 7.50,
    description: "Sourdough, smashed avocado, chili flakes.",
    image: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: "muffin",
    name: "Blueberry Muffin",
    price: 3.50,
    description: "Studded with blueberries, lemon zest top.",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1600&auto=format&fit=crop"
  }
];

export const metadata = { title: "Menu · Sunrise Café" };

export default function MenuPage() {
  return (
    <section className="section">
      <h2>Menu</h2>
      <p className="lead">Our favorites, made fresh daily.</p>
      <MenuGrid items={ITEMS} />
    </section>
  );
}
