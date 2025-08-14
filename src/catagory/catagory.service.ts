import { Injectable } from '@nestjs/common';

@Injectable()
export class CatagoryService {
  getCatagory() {
    return ['mobile', 'tablet', 'laptop'];
  }
}
