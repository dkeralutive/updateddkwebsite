import "../../css/shop/DeliveryBox.css"

export default function DeliveryBox({ title, label, image }) {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="delivery-box box-2"
    >
      <div>
        <h2>{title}</h2>
        <span>{label}</span>
      </div>
    </div>
  );
}
