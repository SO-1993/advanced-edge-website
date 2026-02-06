import { useEffect, useMemo, useRef } from "react";
import { useLocation } from "react-router-dom";

// New Driveways
const drivewaysItems = [
  {
    file: "driveway7.jpg",
    text: "Modern driveway with granite slab path and lighting",
  },
  { file: "driveway1.jpeg", text: "Front garden: prior to driveway work commencing" },
  { file: "driveway5.jpeg", text: "Front garden: prior to driveway work commencing" },
  { file: "driveway2.jpeg", text: "Prep work begins: digging out stone" },
  { file: "driveway3.jpeg", text: "Aco drains and block border installed, ready for block paving" },
  { file: "driveway6.jpg", text: "Block paving phase complete" },
  { file: "dway11.jpeg", text: "Footpath area prepped prior to granite slab installation" },
  {
    file: "block_paving_driveway.jpg",
    text: "Block paving driveway with granite slab path and lighting",
  },
  { file: "dway9.jpeg", text: "Driveway lifted and relaid with new inspection chambers installed" },
  { file: "dway10.jpeg", text: "Aco channel damaged, in need of replacing" },
  { file: "dway7.jpeg", text: "Driveway: before being lifted and relaid" },
  {
    file: "double_driveway2.jpeg",
    text: "Double driveway prepped, ready for finished tarmac",
  },
  {
    file: "double_driveway1.jpeg",
    text: "Double driveway prepped with electrical ducting; ready for car charging points to be installed",
  },
  {
    file: "driveway8.jpg",
    text: "Block paved driveway installed with new edgings and aco drainage improvements",
  },
  { file: "another_driveway1.jpeg", text: "New edgings, ground prepped, ready for block paving" },
  {
    file: "another_driveway2.jpeg",
    text: "Tired worn driveway before installation of new blockpaving",
  },
];

// Patios & Paving
const patiosAndPavingItems = [
  {
    file: "patio_slabs.jpg",
    text: "Patio slabs laid and gardens topsoiled throughout",
  },
  {
    file: "patio_extension.jpg",
    text: "Patio extension completed using buff riven paving",
  },
  {
    file: "kandla_grey.jpg",
    text: "Kandla Grey porcelain slabs laid for a modern patio",
  },
  {
    file: "buff_riven.jpg",
    text: "Side access finished using buff riven slabs",
  },

  {
    file: "sleeper_wall.jpg",
    text: "Sleeper retaining wall installed to level uneven ground",
  },
  { file: "steps.jpg", text: "Steps installed for level garden access" },
  {
    file: "nhbc_compliant.jpg",
    text: "Entrance steps constructed to NHBC compliant slabs",
  },
  {
    file: "shed_base.jpg",
    text: "Shed base installed behind garage, utilising unused space",
  },
  {
    file: "kandla_grey_porcelain.jpg",
    text: "Kandla Grey porcelain with charcoal block border",
  },

  // "/assets/images/gravel_pathway.jpeg",
  // text:
  //to add here
];

// Groundworks & Drainage
const groundworksAndDrainageItems = [
  {
    file: "footpath1.jpeg",
    text: "3-metre wide public footpath formed; ready for tarmac",
  },
  {
    file: "footpath2.jpeg",
    text: "3-metre wide public footpath formed; ready for tarmac",
  },
  {
    file: "footpath3.jpeg",
    text: "3-metre wide public footpath formed; ready for tarmac",
  },
  {
    file: "footpath4.jpeg",
    text: "3-metre wide public footpath formed; installing radius edging on footpath",
  },
  {
    file: "footpath6.jpeg",
    text: "3-metre wide public footpath formed; initial tarmcing completed; ready for finishing tarmac",
  },
  {
    file: "footpath5.jpeg",
    text: "3-metre wide public footpath formed; initial tarmcing completed; ready for finishing tarmac",
  },
  {
    file: "excevation.jpg",
    text: "Precise excavation for water main connection",
  },
  {
    file: "concrete_floors.jpg",
    text: "Concrete floors poured, ready for garage build",
  },

  {
    file: "waste_pipe_1.jpeg",
    text: "Waste pipe connection for WC",
  },
  {
    file: "waste_pipe_2.jpeg",
    text: "Waste pipe connection for WC",
  },
  {
    file: "waste_pipe_3.jpeg",
    text: "Waste pipe connection for WC",
  },
  {
    file: "waste_pipe_4.jpeg",
    text: "Waste pipe connection for WC",
  },

  {
    file: "internal_drainage_1.jpeg",
    text: "Internal drainage installed for new build property",
  },
  {
    file: "internal_drainage_2.jpeg",
    text: "Internal drainage installed for new build property",
  },
  {
    file: "internal_drainage_3.jpeg",
    text: "Internal drainage installed for new build property",
  },
  {
    file: "installed_gravelled_1.jpeg",
    text: "Land installed; gravelled to prevent silt from entering balancing pond",
  },
  {
    file: "installed_gravelled_2.jpeg",
    text: "Land installed; gravelled to prevent silt from entering balancing pond",
  },
  {
    file: "installed_gravelled_3.jpeg",
    text: "Land installed; gravelled to prevent silt from entering balancing pond",
  },
];

// Landscaping & Remedial Work
const landscapingAndRemedialWorkItems = [
  { file: "garden5.jpeg", text: "Finished garden project" },
  { file: "garden6.jpg", text: "Finished garden project" },
  { file: "garden2.jpeg", text: "Garden foundations laid" },
  { file: "garden4.jpeg", text: "New slabs laid in garden" },
  { file: "garden1.jpeg", text: "Original image of garden prior to work being commenced" },
  {
    file: "garden_transformation.jpg",
    text: "Complete garden transformation with porcelain patio and turf",
  },
  { file: "trampoline4.jpeg", text: "Trampoline project: completed" },
  { file: "trampoline3.jpeg", text: "Trampoline project: laying the foundations" },
  { file: "trampoline2.jpeg", text: "Trampoline project: digging the hole" },
  { file: "trampoline1.jpeg", text: "Trampoline project: before work commenced" },

];

function GallerySection({ title, items, sectionRef }) {
  return (
    <section className="gallery-section" ref={sectionRef} aria-label={title}>
      <h1>{title}</h1>

      <div className="gallery-images">
        {items.map((item) => {
          const src = `/assets/images/${item.file}`;

          return (
            <div key={item.file} className="image-container">
              <img src={src} alt={item.text} loading="lazy" decoding="async" />
              <div className="hover-text">{item.text}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Gallery() {
  const location = useLocation();

  const drivewaysRef = useRef(null);
  const patiosRef = useRef(null);
  const groundworksRef = useRef(null);
  const landscapingRef = useRef(null);

  const sectionMap = useMemo(
    () => ({
      "New Driveways": drivewaysRef,
      "Patios & Paving": patiosRef,
      "Groundworks & Drainage": groundworksRef,
      "Landscaping & Remedial Work": landscapingRef,
    }),
    []
  );

  const scrollWithOffset = (element) => {
    const header = document.querySelector(".header");
    const headerOffset = header?.offsetHeight || 0;

    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition =
      elementPosition + window.pageYOffset - headerOffset - 16;

    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  };

  useEffect(() => {
    const sectionName = location.state?.section;
    if (!sectionName) return;

    const targetRef = sectionMap[sectionName];
    if (!targetRef?.current) return;

    requestAnimationFrame(() => {
      scrollWithOffset(targetRef.current);
    });
  }, [location.state, sectionMap]);

  return (
    <div className="gallery-page">
      <GallerySection
        title="New Driveways"
        items={drivewaysItems}
        sectionRef={drivewaysRef}
      />

      <GallerySection
        title="Patios & Paving"
        items={patiosAndPavingItems}
        sectionRef={patiosRef}
      />

      <GallerySection
        title="Groundworks & Drainage"
        items={groundworksAndDrainageItems}
        sectionRef={groundworksRef}
      />

      <GallerySection
        title="Landscaping & Remedial Work"
        items={landscapingAndRemedialWorkItems}
        sectionRef={landscapingRef}
      />
    </div>
  );
}

export default Gallery;
