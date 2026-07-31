import { useParams } from "react-router-dom";
import { templates } from "../data/templates";
import "./TemplateDetail.css";
import { Link } from "react-router-dom";

function TemplateDetail() {

  const { id } = useParams();


  const template = templates.find(
    (item) => item.id === id
  );


  if (!template) {
    return (
      <section>
        <h1>
          Template Not Found
        </h1>
      </section>
    );
  }


  return (
  <section className="detail-page">

    <div className="detail-image">

      <img
        src={template.image}
        alt={template.title}
      />

    </div>


    <div className="detail-content">

      <h1>
        {template.title}
      </h1>


      <p className="category">
        {template.category}
      </p>


      <p>
        {template.description}
      </p>


      <h2>
        {template.price}
      </h2>


      <div className="detail-buttons">

        <button className="buy-btn">
          Buy Template
        </button>


<Link
  to={`/demo/${template.id}`}
  className="demo-btn"
>
  Live Demo
</Link>


      </div>


    </div>

  </section>
);
}


export default TemplateDetail;