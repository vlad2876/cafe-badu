export abstract class BaseSectionComponent {
  expandedDishPath: string = '';

  protected readonly imageUrl = 'assets/images';

  expandDish(imagePath: string) {
    this.expandedDishPath = imagePath;
  }

  closeExpandedDish() {
    this.expandedDishPath = '';
  }
}
