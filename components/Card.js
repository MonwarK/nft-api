export default function Card({ punk }) {
  const { 
    token_id: id,
    name, 
    traits, 
    image_original_url : image 
  } = punk;

  return (
    <div className="bg-[#263749] rounded-lg text-white m-2 cursor-pointer hover:animate-pulse shadow-md">
      <img
        className="rounded-t-lg"
        src={image}
        alt=""
      />
      <div className="p-4">
        <h3 className="text-xl font-medium">{name}</h3>
        <h4 className="text-gray-400 font-medium">#{id}</h4>
        <div className="flex items-center mt-2">
          <img
            className="w-5 h-5 object-contain"
            src="/assets/weth.png"
            alt=""
          />
          <p>{traits[0].value}</p>
        </div>
      </div>
    </div>
  )
}
