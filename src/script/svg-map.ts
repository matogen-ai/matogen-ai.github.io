interface Country {
  name: string;
  code: string;
  pathId: string;
}

export class SvgMap {
  constructor() {
    this.initMap();
  }

  private initMap() {
    const COUNTRIES_OF_INTEREST: Country[] = [
      { name: "South-Africa", code: "ZA", pathId: "ZA-2" },
      { name: "United States", code: "US", pathId: "Path_145-2" },
      { name: "Nigeria", code: "NG", pathId: "NG-2" }, //Nigeria
      { name: "Australia", code: "AU", pathId: "Path_43-2" },
      { name: "Botswana", code: "BW", pathId: "BW-2" }, //Botswana
      { name: "Zambia", code: "ZM", pathId: "ZM-2" }, //Zambia
      { name: "Kenya", code: "KE", pathId: "KE-2" }, //Kenya
      { name: "India", code: "IN", pathId: "IN-2" }, //India
      { name: "Sweden", code: "SE", pathId: "SE-2" }, //Sweden
      { name: "United Kingdom", code: "UK", pathId: "Path_81-2" }, //UK
      { name: "Malawi", code: "MW", pathId: "MW-2" }, //Malawi
      { name: "Malta", code: "MT", pathId: "Path_97-2" }, //Malta
      { name: "Israel", code: "IL", pathId: "IL-2" }, //Israel
    ];

    COUNTRIES_OF_INTEREST.forEach((country) => {
      this.setupHoverHandlersByPathId(country);
    });
  }

  private setupHoverHandlersByPathId(country: Country) {
    debugger;
    console.log("blah blah 22");
    //blah
    const path: any = document.getElementById(country.pathId);
    const infoSection = document.getElementById("location-info");
    if (!path) return;
    // Get the current transformation matrix
    const originalTransform = path.transform.baseVal.consolidate().matrix;

    path.classList.add("path-transition");
    // Define the hover event handler
    path.addEventListener("mouseenter", function () {
      // move hover item to last element of child to render on top of others
      path.parentElement.appendChild(path);

      // Set the transformation origin (center of the path)
      const bbox = path.getBBox();
      const centerX = bbox.x + bbox.width / 2;
      const centerY = bbox.y + bbox.height / 2;
      path.style.transformOrigin = centerX + "px " + centerY + "px";

      // change fill to country flag
      path.setAttribute("fill", "url(#pattern-" + country.code + ")");
      // path.setAttribute("fill", "#000");

      // Create a new transformation for scaling
      const scaleTransform = path.ownerSVGElement.createSVGTransform();
      scaleTransform.setScale(1.2, 1.2);
      // Add new transform to original transform
      const newTransformMatrix = originalTransform.multiply(
        scaleTransform.matrix
      );

      // Apply the new transformation matrix to path
      path.transform.baseVal.initialize(
        path.ownerSVGElement.createSVGTransformFromMatrix(newTransformMatrix)
      );

      infoSection?.replaceChildren(document.createTextNode(country.name));
      //to continue - blah
      // let h3 = document.createElement("h3");
      // h3.textContent = "Your text here blah blah";
      // infoSection?.appendChild(h3);
      // if (infoSection) infoSection.style.float = "left";
    });

    // Define the mouseleave event handler (to reset on hover out)
    path.addEventListener("mouseleave", function () {
      path.setAttribute("fill", "#27a8e0");

      // Reset the transformation to the identity matrix (no transformation)
      path.transform.baseVal.initialize(
        path.ownerSVGElement.createSVGTransformFromMatrix(originalTransform)
      );
      infoSection?.removeChild(infoSection.firstChild!);
    });
  }
}
