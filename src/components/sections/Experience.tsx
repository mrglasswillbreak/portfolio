export function Experience() {
  return (
    <section
      id="experience"
      className="section shell experience-section"
      aria-labelledby="experience-heading"
    >
      <div>
        <p className="eyebrow section-index">03 / Along the way</p>
        <h2 id="experience-heading">
          Always <span className="serif-word">learning.</span>
        </h2>
      </div>
      <div className="experience-list">
        <article>
          <span className="eyebrow">Sep 2025 — Present</span>
          <div>
            <h3>Full-stack JavaScript learning</h3>
            <p className="experience-org">
              The Odin Project · Independent study
            </p>
            <p>
              Building web applications while developing my skills in
              JavaScript, React, Node.js, and collaborative Git workflows.
            </p>
          </div>
          <span className="experience-type">Development</span>
        </article>
        <article>
          <span className="eyebrow">Nov 2018 — Dec 2020</span>
          <div>
            <h3>Graphic Designer</h3>
            <p className="experience-org">Adebayo Tech Cafe</p>
            <p>
              Created vector graphics, event materials, and campaign visuals — a
              foundation in visual communication that still informs my work.
            </p>
          </div>
          <span className="experience-type">Design</span>
        </article>
      </div>
    </section>
  );
}
