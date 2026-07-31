import { useState } from "react";
import TemplateCard from "../components/TemplateCard";
import { templates } from "../data/templates";
import "./Templates.css";


function Templates() {

  const [search, setSearch] = useState("");


  const filteredTemplates = templates.filter((template) =>
    template.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );


  return (

    <section 
      className="templates-page"
      id="templates"
    >


      <h1>
        Premium Templates
      </h1>


      <input
        className="search-bar"
        type="text"
        placeholder="Search templates..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />


      <div className="templates-container">


        {filteredTemplates.map((template) => (

          <TemplateCard
            key={template.id}
            template={template}
          />

        ))}


      </div>


    </section>

  );

}


export default Templates;