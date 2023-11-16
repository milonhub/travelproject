import image from "./desitnationdata.json"
const Destination = () => {
  return (
    <div>
      <div className="hero min-h-[500px] bg-white object-cover" style={{ backgroundImage: 'url("https://source.unsplash.com/R5scocnOOdM/1920x500")' }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="text-5xl pb-2 font-bold text-white">United Kingdom</h1>
            <h1 className="mb-5 text-2xl font-medium">Home/Desination/<span className="text-red-600">United Kingdom</span></h1>
          </div>
        </div>
      </div>

      <div className="bg-base-200 flex flex-row justify-center">
        <div className="flex flex-col gap-8 p-8">
          <img src="https://source.unsplash.com/-KzcQ05W3ss/550x350" className="w-[600px] h-[350px] rounded-lg shadow-2xl" />
          <div className="flex flex-row gap-4">
            {image.map((image) => {
              const { id, url } = image;
              return (
                <article key={id} className="w-[300px] h-[280px]">
                  <img src={url} alt="pic" />
                </article>
              )

            })}
          </div>
        </div>
        <div className="p-4">
          <h1 className="text-3xl mb-4">City Map</h1>
          <iframe allowfullscreen="true" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.3765798140857!2d88.6350608737754!3d24.368199864781495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbf02db6d04b59%3A0xaa58eb411ea3ec5c!2sUniversity%20of%20Rajshahi!5e0!3m2!1sen!2sbd!4v1700172839470!5m2!1sen!2sbd" width="600px" height="450px" className="h-[300px]"></iframe>
          <div className="overflow-x-auto mt-6 bg-slate-300 p-8">
            <caption className="text-2xl">Weather</caption>
            <table className="table">
              <tbody>

                <tr>

                  <td>Jan-Feb</td>
                  <td>12-16 deg</td>
                </tr>
                <tr>

                  <td>Mar-Apr</td>
                  <td>12-16 deg</td>
                </tr>

                <tr>

                  <td>May-jun</td>
                  <td>12-16 deg</td>
                </tr>
                <tr>

                  <td>July-Agust</td>
                  <td>12-16 deg</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Destination