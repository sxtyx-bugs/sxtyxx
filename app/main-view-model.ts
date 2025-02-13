import { Observable } from '@nativescript/core';

export class HelloWorldModel extends Observable {
  private _isAnalyzing: boolean = true;
  private _analysisProgress: number = 0;
  private _analysisStatus: string = 'Analyzing frame...';
  private _showProductDetail: boolean = false;
  
  // Current video data
  private _currentVideo: string = 'https://example.com/sample-video.mp4';
  private _currentProduct: string = 'Zara Red Dress';
  private _currentLocation: string = 'Tokyo Tower';
  private _currentCelebrity: string = 'Taylor Swift - 98% match';

  // Selected product details
  private _selectedProduct = {
    name: 'Zara Sequin Dress',
    price: '$89.99',
    rating: '4.2',
    variants: 'Available in 5 colors',
    image: 'https://example.com/dress-image.jpg'
  };

  constructor() {
    super();
    this.startAnalysis();
  }

  // Getters and setters
  get isAnalyzing(): boolean {
    return this._isAnalyzing;
  }

  get analysisProgress(): number {
    return this._analysisProgress;
  }

  get analysisStatus(): string {
    return this._analysisStatus;
  }

  get showProductDetail(): boolean {
    return this._showProductDetail;
  }

  get currentVideo(): string {
    return this._currentVideo;
  }

  get currentProduct(): string {
    return this._currentProduct;
  }

  get currentLocation(): string {
    return this._currentLocation;
  }

  get currentCelebrity(): string {
    return this._currentCelebrity;
  }

  get selectedProduct(): any {
    return this._selectedProduct;
  }

  // Methods
  private startAnalysis() {
    const interval = setInterval(() => {
      this._analysisProgress += 10;
      this.notifyPropertyChange('analysisProgress', this._analysisProgress);
      
      if (this._analysisProgress >= 100) {
        clearInterval(interval);
        this._isAnalyzing = false;
        this.notifyPropertyChange('isAnalyzing', false);
      }
    }, 500);
  }

  onProductTap() {
    this._showProductDetail = true;
    this.notifyPropertyChange('showProductDetail', true);
  }

  closeProductDetail() {
    this._showProductDetail = false;
    this.notifyPropertyChange('showProductDetail', false);
  }

  onLocationTap() {
    console.log('Location tapped');
  }

  onCelebrityTap() {
    console.log('Celebrity tapped');
  }

  onBuyTap() {
    console.log('Buy button tapped');
  }

  onSaveTap() {
    console.log('Save button tapped');
  }

  onHomeTab() {
    console.log('Home tab tapped');
  }

  onSavedTab() {
    console.log('Saved tab tapped');
  }

  onCameraTab() {
    console.log('Camera tab tapped');
  }
}