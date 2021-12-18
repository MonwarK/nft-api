export default function Preview({ punk }) {
  const {
    token_id: id,
    name,
    image_original_url: image,
    traits,
    owner
  } = punk;

  return (
    <div className="md:h-96 p-5 md:flex">
      <div>
        <img
          className="w-full md:w-auto md:h-full object-cover rounded-3xl"
          src={image}
          alt=""
        />
      </div>
      <div className="flex-1 p-4 md:flex flex-col justify-between">
        <div>
          <h1 className="text-3xl md:text-6xl font-bold text-white">{name}</h1>
          <h2 className="text-xl md:text-5xl text-gray-400 font-bold my-5">#{id}</h2>
        </div>

        <div className="flex space-x-2 items-center text-white max-w-full">
          <img
            className="w-10 h-10 rounded-full"
            src={owner.profile_img_url}
            alt=""
          />
          <p className="font-semibold truncate">{owner.address}</p>
        </div>
      </div>
    </div>
  )
}
