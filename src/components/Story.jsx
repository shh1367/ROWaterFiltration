import { site } from '../data/content.js';
import { ArrowLeftIcon, CheckIcon } from './Icons.jsx';
import WaterScene from './art/WaterScene.jsx';

export default function Story() {
  const { story } = site;

  return (
    <section className="section story" id="about" aria-labelledby="story-title">
      <div className="shell story__grid">
        <div className="story__body reveal">
          <span className="eyebrow">{story.eyebrow}</span>
          <h2 className="title-lg" id="story-title">
            {story.title}
          </h2>
          <p className="story__lead">{story.lead}</p>
          <p className="lede">{story.body}</p>

          <ul className="story__points">
            {story.points.map((point) => (
              <li className="story__point" key={point}>
                <CheckIcon />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <a className="text-link" href={story.cta.href}>
            {story.cta.label}
            <ArrowLeftIcon className="btn__icon" />
          </a>
        </div>

        <div className="story__media reveal">
          <WaterScene className="story__scene" />
          <span className="story__badge">از طبیعت تا خانه شما</span>
        </div>
      </div>
    </section>
  );
}
