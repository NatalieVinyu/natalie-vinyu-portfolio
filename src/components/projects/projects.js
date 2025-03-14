//named export

export const Projects = ({ title, image, link}) => {
  return (
    <div className='container mx-auto bg-cyan-300'>
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white ">
        <div>
          <h1 className="text-4xl">Oh So Heavenly</h1>
          <img src="public/images/Screenshot 2025-03-14 at 09.22.24.png"/>
          <div className="flex gap-20">
            <a>GitHub</a>
            <a>Project</a>
          </div>
        </div>

      </div>
      projects
    </div>
  )
};