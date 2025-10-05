"use client"
import { useMemo, useState } from "react";

const ITEMS = [
  { id: "cap", name: "Cappuccino", price: 4.25 },
  { id: "latte", name: "Vanilla Latte", price: 5.0 },
  { id: "drip", name: "Drip Coffee", price: 3.0 },
  { id: "croissant", name: "Butter Croissant", price: 3.75 },
  { id: "avotoast", name: "Avocado Toast", price: 7.5 },
  { id: "muffin", name: "Blueberry Muffin", price: 3.5 },
];

export default function OrderPage() {
  const [quantities, setQuantities] = useState(
    Object.fromEntries(ITEMS.map((i) => [i.id, 0]))
  );
  const [name, setName] = useState("");
  const [pickup, setPickup] = useState("ASAP");
  const [notes, setNotes] = useState("");

  const subtotal = useMemo(
    () => ITEMS.reduce((sum, i) => sum + i.price * (quantities[i.id] || 0), 0),
    [quantities]
  );
  const taxRate = 0.07;
  const tax = +(subtotal * taxRate).toFixed(2);
  const total = +(subtotal + tax).toFixed(2);

  const updateQty = (id: any, val: any) => {
    const n = Math.max(0, Math.min(99, Number(val) || 0));
    setQuantities((q) => ({ ...q, [id]: n }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const items = ITEMS.filter((i) => quantities[i.id] > 0).map((i) => ({
      id: i.id,
      name: i.name,
      qty: quantities[i.id],
      price: i.price,
    }));

    if (items.length === 0) {
      alert("Add at least one item to your order.");
      return;
    }
    const payload = { name, pickup, notes, items, subtotal, tax, total };
    // In real life, POST `payload` to an API endpoint.
    alert(
      `Thanks, ${name || "friend"}! Your order is in.\n\n${items
        .map((i) => `${i.qty} × ${i.name}`)
        .join("\n")}\n\nTotal: $${total.toFixed(2)} (incl. tax)`
    );
  };

  return (
    <section className="section">
      <h2>Order Online</h2>
      <p className="lead">
        Place a pickup order—your drink will be ready when you arrive.
      </p>

      <form onSubmit={handleSubmit}>
        <table className="order-table">
          <thead>
            <tr>
              <th style={{ width: "45%" }}>Item</th>
              <th style={{ width: "15%" }}>Price</th>
              <th style={{ width: "20%" }}>Quantity</th>
              <th style={{ width: "20%" }}>Line Total</th>
            </tr>
          </thead>
          <tbody>
            {ITEMS.map((item) => {
              const qty = quantities[item.id] || 0;
              const line = +(qty * item.price).toFixed(2);
              return (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>
                    <input
                      className="qty-input"
                      type="number"
                      min="0"
                      max="99"
                      value={qty}
                      onChange={(e) => updateQty(item.id, e.target.value)}
                    />
                  </td>
                  <td>${line.toFixed(2)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className="section">
          <label>
            Your name
            <br />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g., Alex"
              style={{
                width: "100%",
                padding: 10,
                borderRadius: 8,
                border: "1px solid var(--border)",
              }}
              required
            />
          </label>
        </div>

        <div className="section">
          <label>
            Pickup time
            <br />
            <select
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              style={{
                width: "100%",
                padding: 10,
                borderRadius: 8,
                border: "1px solid var(--border)",
              }}
            >
              <option>ASAP</option>
              <option>In 15 minutes</option>
              <option>In 30 minutes</option>
              <option>Top of the hour</option>
            </select>
          </label>
        </div>

        <div className="section">
          <label>
            Notes (optional)
            <br />
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Any special instructions?"
              rows={3}
              style={{
                width: "100%",
                padding: 10,
                borderRadius: 8,
                border: "1px solid var(--border)",
              }}
            />
          </label>
        </div>

        <div className="total">
          <div>
            <div>Subtotal: ${subtotal.toFixed(2)}</div>
            <div>Tax (7%): ${tax.toFixed(2)}</div>
            <div style={{ fontWeight: 800 }}>Total: ${total.toFixed(2)}</div>
          </div>
          <button type="submit" className="btn">
            Place Order
          </button>
        </div>
      </form>
    </section>
  );
}
