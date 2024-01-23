import { Carousel } from "@material-tailwind/react";

export default function MainContent() {
  return (
    <section className="h-full">
      <img
        src="bg-img.png"
        alt="cover-bg"
        className="fixed h-lvh w-full object-cover -z-10"
      />
    </section>
  );
}
