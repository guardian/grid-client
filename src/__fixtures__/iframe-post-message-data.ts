import cropData from "./crop-data";
import imageData from "./image-data";

export default new MessageEvent("*", {
  data: {
    image: {
      uri: "https://api.grid.local/images/a820ad09876754cae2b1d44da01d0d9f8a83749d",
      data: imageData,
    },
    crop: {
      uri: "https://cropper.grid.local/crops",
      data: cropData,
    },
  },
});
