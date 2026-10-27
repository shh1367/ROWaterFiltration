import { site } from '../data/content.js';

export default function AnnouncementBar() {
  return (
    <div className="announcement">
      <div className="announcement__inner">
        <span className="announcement__dot" aria-hidden="true" />
        <span>{site.announcement}</span>
        <a className="announcement__link" href="#shop">
          دیدن محصولات
        </a>
      </div>
    </div>
  );
}
