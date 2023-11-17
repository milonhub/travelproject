import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import image from "./desitnationdata.json";
import PopularEnglandimage from "./popularEnglandimage";
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

      <div className="w-[70%] p-10 mx-8">
        <h1 className="text-3xl my-6 font-bold">About Uk</h1>
        <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore totam magnam aperiam eos iste dolor eius accusamus praesentium ducimus debitis odio minima nemo beatae ab repellat cupiditate deleniti eveniet, eligendi aliquid, sunt dignissimos, tempora dolorum. Deleniti perferendis et neque. Optio praesentium dicta facere distinctio omnis molestias, laboriosam amet odio nisi debitis voluptatibus nesciunt repellat et hic provident adipisci neque. Delectus vel iusto esse enim quasi tenetur rerum quas consequatur odio earum facilis rem, explicabo ipsa, voluptates aspernatur! Ipsum, est vero!</p>

        <br />
        <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem explicabo necessitatibus, dignissimos a eveniet eos, reprehenderit officiis consequatur illum ea, et quibusdam repudiandae nostrum ratione doloribus numquam distinctio. Sit vel mollitia, id rem praesentium laudantium minima blanditiis dolorum in eos reprehenderit, voluptatem, porro omnis molestiae magnam est? Eaque maxime beatae ex distinctio, tenetur voluptatem vitae molestias natus consequatur nihil, officia facere quidem debitis asperiores quia aperiam sunt soluta saepe fugit modi voluptate ipsa officiis esse? Ducimus facere odit dicta perspiciatis debitis aliquid molestiae consectetur libero dolores magnam, reiciendis sequi, deleniti unde temporibus ea dolor nobis ut perferendis quod omnis et!lorem200
        </p>
        <br />
        <p className="text-xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius quasi officia rerum excepturi similique quidem, ab numquam fuga, harum non laborum porro quisquam itaque possimus. Optio dolorum fuga eum, est a voluptatum eveniet saepe illo corrupti, consequatur quae facilis dolores autem neque fugiat distinctio. Quibusdam architecto rem voluptate amet impedit totam expedita inventore explicabo mollitia autem, minus consequatur obcaecati dolorum! Adipisci dicta veniam quis non asperiores sapiente numquam voluptatibus temporibus! Tempore temporibus dignissimos labore est eaque accusamus quis cum, aliquid quae excepturi sequi beatae illum quam nostrum recusandae odio, quisquam esse quasi! Officia ad quaerat eius libero, odio beatae id animi! Minus voluptates officiis earum repudiandae modi distinctio quidem et omnis velit ea debitis magni, incidunt quae totam, voluptatem quia laboriosam tenetur fugit dolorum ipsam fuga qui iste amet. Maxime quis pariatur, dolor ipsum iste at impedit molestiae vel culpa. Nobis commodi dolorum accusamus dignissimos doloremque modi incidunt perspiciatis est nostrum sunt dolores quaerat accusantium veniam explicabo ab odit, corporis aperiam. Ad vitae nesciunt officiis ut autem atque sequi aperiam eos repellat, incidunt, iure omnis laudantium? Reprehenderit perspiciatis dolore tenetur minus quaerat, ullam consequuntur numquam voluptate ipsa error? Provident delectus tenetur architecto sed unde nemo voluptates quod? Quasi, omnis maiores?</p>
        <br />
        <br />
        <h1 className="text-3xl font-bold">Basic Information</h1>

        <div className=" mt-6 bg-slate-300 p-8">

          <table className="table">
            <tbody>

              <tr>

                <td>Name</td>
                <td>United States</td>
              </tr>
              <tr>

                <td>Capital</td>
                <td>Washington, D.C.</td>
              </tr>

              <tr>

                <td>Currency</td>
                <td>United States Dollar (USD)</td>
              </tr>
              <tr>

                <td>language</td>
                <td>English</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="p-16">
        <div className="flex flex-row justify-between"><h1 className='text-4xl font-bold mx-28'>Popular Tourist in Uk</h1>
          <p className="text-xl mr-32">see all <FontAwesomeIcon icon="faArrowRight" className="text-xl" /></p></div>
        <PopularEnglandimage />
      </div>
      <div className="p-16">
        <div className="flex flex-row justify-between"><h1 className='text-4xl font-bold mx-28'>Activities in Uk</h1>
          <p className="text-xl mr-32">see all</p></div>
        <PopularEnglandimage />
      </div>
    </div>
  )
}

export default Destination