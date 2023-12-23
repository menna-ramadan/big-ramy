import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  baseUrl = 'http://3.65.32.166';
  constructor(private http: HttpClient) {}

  getcourses() {
    return this.http.get(
      `${this.baseUrl}/api/v2/storefront/products?filter[sub_product_type]=course&filter[product_type]=digital`
    );
  }

  getcourseDetails(id: any) {
    return this.http.get(`${this.baseUrl}/api/v2/storefront/products?product_ID=${id}`);
  }
}
