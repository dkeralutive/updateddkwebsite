import { Link } from "react-router-dom";
import "../../../pages/General/UserProfile/UserProfile.css";
import mobileView from "../../../utilities/mobileView";

interface UserCardProps {
  title: string;
  subtitle: string;
}

export default function UserCard({ title, subtitle }: UserCardProps) {
  return (
    <Link
      to={title.trim().toLowerCase().replace(" ", "-")}
      className="userCard-container"
    >
      <div>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      <i
        className={`bx bx-chevron-right bx-${mobileView() ? "sm" : "md"}`}
        style={{ color: "#d5d5d5" }}
      />
    </Link>
  );
}
