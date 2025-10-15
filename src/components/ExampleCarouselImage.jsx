export default function ExampleCarouselImage({ text }) {
  return (
    <img
      className="d-block w-100"
      src="/images/slide1.jpg"   // or use props if needed
      alt={text || "Carousel slide"}
    />
  );
}
// hey developers note:
// no work of this component now