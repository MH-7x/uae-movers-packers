export function getFAQs(For: string) {
  if (!For) return [];
  switch (For) {
    case "home-moving":
      console.log("home-moving");

      return;
    case "office-moving":
      console.log("home-moving");
      return;
    case "heavy-goods-moving":
      return;
    case "apartment-moving":
      return;
    case "small-or-single-furniture-moving":
      return;
    case "moving-and-cargo-packing":
      return;
    case "appliances-moving":
      return;
    default:
      break;
  }
}
