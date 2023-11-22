interface Country {
  name: string;
  code: string;
  pathId: string;
}

export class SvgMap {
  constructor() {
    this.initMap();
  }

  smallCountries = ["Israel", "Malta", "Malawi"];
  mediumCountries = ["United Kingdom", "Botswana", "Zambia"];

  private initMap() {
    const COUNTRIES_OF_INTEREST: Country[] = [
      { name: "South-Africa", code: "ZA", pathId: "ZA-2" },
      { name: "United States", code: "US", pathId: "Path_145-2" },
      { name: "Nigeria", code: "NG", pathId: "NG-2" },
      { name: "Australia", code: "AU", pathId: "Path_43-2" },
      { name: "Botswana", code: "BW", pathId: "BW-2" },
      { name: "Zambia", code: "ZM", pathId: "ZM-2" },
      { name: "Kenya", code: "KE", pathId: "KE-2" },
      { name: "India", code: "IN", pathId: "IN-2" },
      { name: "Sweden", code: "SE", pathId: "SE-2" },
      { name: "United Kingdom", code: "UK", pathId: "Path_81-2" },
      { name: "Malawi", code: "MW", pathId: "MW-2" },
      { name: "Malta", code: "MT", pathId: "Path_97-2" },
      { name: "Israel", code: "IL", pathId: "IL-2" },
    ];

    COUNTRIES_OF_INTEREST.forEach((country) => {
      this.setupHoverHandlersByPathId(country);
    });
  }

  private setupHoverHandlersByPathId(country: Country) {
    const path: any = document.getElementById(country.pathId);
    const infoSection = document.getElementById("location-info");
    if (!path) return;
    // Get the current transformation matrix
    const originalTransform = path.transform.baseVal.consolidate().matrix;

    path.classList.add("path-transition");
    // Define the hover event handler
    path.addEventListener("mouseenter", () => {
      // move hover item to last element of child to render on top of others
      path.parentElement.appendChild(path);

      // Set the transformation origin (center of the path)
      const bbox = path.getBBox();
      const centerX = bbox.x + bbox.width / 2;
      const centerY = bbox.y + bbox.height / 2;
      path.style.transformOrigin = centerX + "px " + centerY + "px";

      // change fill to country flag
      path.setAttribute("fill", "url(#pattern-" + country.code + ")");

      // Create a new transformation for scaling
      const scaleTransform = path.ownerSVGElement.createSVGTransform();

      if (this.smallCountries.includes(country.name))
        scaleTransform.setScale(10, 10);
      else if (this.mediumCountries.includes(country.name))
        scaleTransform.setScale(5, 5);
      else scaleTransform.setScale(1.2, 1.2);

      // Add new transform to original transform
      const newTransformMatrix = originalTransform.multiply(
        scaleTransform.matrix
      );

      // Apply the new transformation matrix to path
      path.transform.baseVal.initialize(
        path.ownerSVGElement.createSVGTransformFromMatrix(newTransformMatrix)
      );

      let header = document.createElement('h4');
      header.textContent = country.name;
      header.style.textAlign = 'left';
      
      
      // Create a new div element for the grid container
      let gridContainer = document.createElement('div');
      gridContainer.style.display = 'flex'; // use flexbox layout
      gridContainer.style.justifyContent = 'space-between'; // add space between columns

      // Create new div elements for each column
      let column1 = document.createElement('div');
      column1.style.display = 'inline-block';
      column1.style.marginRight = '1rem';
      column1.textContent = 'Consulting';
      gridContainer.appendChild(column1);

      let column2 = document.createElement('div');
      column2.style.display = 'inline-block'; 
      column2.style.marginRight = '1rem';
      column2.textContent = 'System Solutions';
      gridContainer.appendChild(column2);


      let column3 = document.createElement('div');
      column3.textContent = 'Artificial intelligence';
      column3.style.display = 'inline-block'; 
      gridContainer.appendChild(column3);
      
      infoSection?.appendChild(header);
      infoSection?.appendChild(gridContainer);

      if (infoSection) infoSection.style.float = "left";
    });

    // Define the mouseleave event handler (to reset on hover out)
    path.addEventListener("mouseleave", function () {
      path.setAttribute("fill", "#27a8e0");

      // Reset the transformation to the identity matrix (no transformation)
      path.transform.baseVal.initialize(
        path.ownerSVGElement.createSVGTransformFromMatrix(originalTransform)
      );
      while (infoSection?.firstChild) {
        infoSection.firstChild.remove();
    }
    
    });
  }
}
