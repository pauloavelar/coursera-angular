import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';

@Injectable()
export class PromotionService {

  getPromotions(): Promotion[] {
    return PROMOTIONS;
  }

  getPromotion(id: number): Promotion {
    return PROMOTIONS.find(promo => promo.id === id);
  }

  getFeaturedPromotion(): Promotion {
    return PROMOTIONS.find(promo => promo.featured);
  }

}
