// @ts-nocheck
import { Link } from "react-router-dom";
import "./TemplateCard.css";

type Template = {
  id: string;
  title: string;
  category: string;
  price: string;
  image: string;
  description: string;
};

type Props = {
  template: Template;
};

function TemplateCard({ template }: Props) {

  return (
    <div className="template-card">

      <img
        className="template-image"
        src={template.image}
        alt={template.title}
      />

      <div className="template-content">

        <h2>
          {template.title}
        </h2>

        <p>
          {template.category}
        </p>

        <p>
          {template.description}
        </p>

        <strong>
          {template.price}
        </strong>

        <br />

        <Link to={`/templates/${template.id}`}>
          View Details
        </Link>

      </div>

    </div>
  );
}

export default TemplateCard;