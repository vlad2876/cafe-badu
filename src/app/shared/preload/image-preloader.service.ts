import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagePreloaderService {
  private readonly baseImagePath = 'assets/images';
  private readonly imagePaths: string[] = [
    `${this.baseImagePath}/bread.jpg`,
    `${this.baseImagePath}/mchadi.jpg`,
    `${this.baseImagePath}/chvishtar.jpg`,
    `${this.baseImagePath}/adjarianKhachapuri.jpg`,
    `${this.baseImagePath}/imeretianKhachapuri.jpg`,
    `${this.baseImagePath}/megrelianKhachapuri.jpg`,
    `${this.baseImagePath}/tomatoCucumber.jpg`,
    `${this.baseImagePath}/tomatoCucumberWalnuts.jpg`,
    `${this.baseImagePath}/eggplant.jpg`,
    `${this.baseImagePath}/eggplantWalnuts.jpg`,
    `${this.baseImagePath}/chicken.jpg`,
    `${this.baseImagePath}/caesar.jpg`,
    `${this.baseImagePath}/pancakes.jpg`,
    `${this.baseImagePath}/chishiBishi.jpg`,
    `${this.baseImagePath}/rice.jpg`,
    `${this.baseImagePath}/oatmeal.jpg`,
    `${this.baseImagePath}/vegetable.jpg`,
    `${this.baseImagePath}/chickenSoup.jpg`,
    `${this.baseImagePath}/gupta.jpg`,
    `${this.baseImagePath}/kharcho.jpg`,
    `${this.baseImagePath}/chashushuli.jpg`,
    `${this.baseImagePath}/ostri.jpg`,
    `${this.baseImagePath}/ojakhuri.jpg`,
    `${this.baseImagePath}/chakhokhbili.jpg`,
    `${this.baseImagePath}/beans.jpg`,
    `${this.baseImagePath}/chickenKiev.jpg`,
    `${this.baseImagePath}/dumplings.jpg`,
    `${this.baseImagePath}/ajapsandal.jpg`,
    `${this.baseImagePath}/tabaka.jpg`,
    `${this.baseImagePath}/chkmeruli.jpg`,
    `${this.baseImagePath}/frenchFries.jpg`,
    `${this.baseImagePath}/friedSulguni.jpg`,
    `${this.baseImagePath}/porkBbq.jpg`,
    `${this.baseImagePath}/chickenBbq.jpg`,
    `${this.baseImagePath}/grilledVegetables.jpg`,
    `${this.baseImagePath}/troutSideDish.jpg`,
    `${this.baseImagePath}/troutLemonJuice.jpg`,
    `${this.baseImagePath}/friedTrout.jpg`,
    `${this.baseImagePath}/barabulka.jpg`,
    `${this.baseImagePath}/mullet.jpg`,
    `${this.baseImagePath}/redWine.jpg`,
    `${this.baseImagePath}/whiteWine.jpg`,
    `${this.baseImagePath}/chaChaSm.jpg`,
    `${this.baseImagePath}/chaChaLg.jpg`,
    `${this.baseImagePath}/cognacSm.jpg`,
    `${this.baseImagePath}/cognacLg.jpg`,
    `${this.baseImagePath}/argo.jpg`,
    `${this.baseImagePath}/herzog.jpg`
  ];

  constructor() {
    this.preloadImages();
  }

  private preloadImages() {
    for (const imagePath of this.imagePaths) {
      const img = new Image();
      img.src = imagePath;
    }
  }
}
