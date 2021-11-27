interface CarouselObject {
  imgName: string,
  imgTitle: string,
  imgDesc: string
}

export class HomeService {
  getCarouselImages(): CarouselObject[] {
    return [
      {
        "imgName" : "Step and Repeat.jpg",
        "imgTitle" : "First slide label",
        "imgDesc" : "Some representative placeholder content for the first slide."
      },
      {
        "imgName" : "Zig Zag.jpg",
        "imgTitle" : "Second slide label",
        "imgDesc" : "Some representative placeholder content for the first slide."
      },
      {
        "imgName" : "Wavy Pastel.jpg",
        "imgTitle" : "Third slide label",
        "imgDesc" : "Some representative placeholder content for the first slide."
      },
    ];
  }
}