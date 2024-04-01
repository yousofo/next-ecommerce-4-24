import WhiteBtn from "../btns/whiteBtn";

export default function BigLandingCard({img,children, className=""}: Readonly<{img:string,className:string, children: React.ReactNode; }>) {
  return (
    <figure className={`${className} `}>
      <figcaption>
        <h2 className="text-4xl lg:text-5xl font-semibold">{children}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum.</p>
        <WhiteBtn>Buy Now</WhiteBtn>
      </figcaption>
      <div className="img max-w-[520px]">
        <img src={img} alt="baby wear" className="w-full"/>
      </div>
    </figure>
  )
}