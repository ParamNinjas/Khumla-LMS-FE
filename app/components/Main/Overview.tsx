import Analytics from './Analytics'
import CurrentUser from './CurrentUser'
import Checklist from './Checklist';

const Overview = () => {
  return (
    <div className="container-fluid page__container">
                    <div className="page-section">
                      <Analytics />
                      <CurrentUser />
                      <Checklist />
          </div>
    </div>
  )
}

export default Overview