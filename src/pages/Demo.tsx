import { useParams } from "react-router-dom";
import { templates } from "../data/templates";
import "./Demo.css";


function Demo() {

  const { id } = useParams();


  const template = templates.find(
    (item) => item.id === id
  );


  if (!template) {
    return <h1>Demo Not Found</h1>;
  }


  return (

    <section className="demo-page">

      <h1>
        {template.title} - Live Demo
      </h1>


      <div className="demo-box">

        <img
          src={template.image}
          alt={template.title}
        />


        <h2>
          Preview Website
        </h2>


        <p>
          This is a preview of the template.
        </p>


<a
  href={template.demo}
  target="_blank"
  rel="noopener noreferrer"
  className="open-demo"
>


      </div>

    </section>

  );

}


export default Demo;