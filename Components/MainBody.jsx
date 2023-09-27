import Card from "./Card.jsx";
import FilterComp from "./FilterComp.jsx";
export default function MainBody() {
  return (
    <div className="px-16 py-4 ">
      <div className="font-bold text-2xl my-8 ">Search Properties for Rent</div>
      <FilterComp />
      <div className=" pt-4 grid gap-4 grid-cols-3">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  );
}
