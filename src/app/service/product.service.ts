import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iproduct } from 'src/interface/product';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProduct(): Observable<Iproduct[]> {
    return this.http.get<Iproduct[]>('http://localhost:3000/products');
  }
  createProduct(product: Iproduct): Observable<Iproduct> {
    return this.http.post<Iproduct>('http://localhost:3000/products', product);
  }
  updateProduct(id: string, product: Iproduct): Observable<Iproduct> {
    return this.http.put<Iproduct>(
      `http://localhost:3000/products/${id}`,
      product
    );
  }
  deleteProduct(id: string): Observable<Iproduct> {
    return this.http.delete<Iproduct>(`http://localhost:3000/products/${id}`);
  }
  getProductById(id: string): Observable<Iproduct> {
    return this.http.get<Iproduct>(`http://localhost:3000/products/${id}`);
  }
}
