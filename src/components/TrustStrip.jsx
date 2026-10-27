import { site } from '../data/content.js';
import { DropletIcon, FilterIcon, SupportIcon, TruckIcon } from './Icons.jsx';

const icons = {
  droplet: DropletIcon,
  filter: FilterIcon,
  truck: TruckIcon,
  support: SupportIcon,
};

export default function TrustStrip() {
  return (
    <div className="trust" id="trust">
      <div className="shell">
        <ul className="trust__panel reveal">
          {site.trust.map((item) => {
            const Icon = icons[item.icon] ?? DropletIcon;
            return (
              <li className="trust__item" key={item.label}>
                <span className="trust__icon">
                  <Icon />
                </span>
                <span className="trust__label">{item.label}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
