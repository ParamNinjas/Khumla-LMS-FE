import { NextPage } from 'next'

const PageBanner: NextPage<{name: string}> = ({name}) => {
  return (
      <>
        <div className="pt-32pt">
          <div className="container page__container d-flex flex-column flex-md-row align-items-center text-center text-sm-left">
            <div className="flex d-flex flex-column flex-sm-row align-items-center mb-24pt mb-md-0">
              <div className="mb-24pt mb-sm-0 mr-sm-24pt">
                <h2 className="mb-0">{name}</h2>
                <ol className="breadcrumb p-0 m-0">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">{name}</li>
                </ol>
              </div>
            </div>
          </div>
          </div>
      </>
  )
}

export default PageBanner