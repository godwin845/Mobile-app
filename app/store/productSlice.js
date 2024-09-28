import { createSlice } from '@reduxjs/toolkit';
import P1 from '../../assets/p1.jpg';
import P2 from '../../assets/p2.jpg';
import P3 from '../../assets/p3.jpg';
import P4 from '../../assets/p4.jpg';
import P5 from '../../assets/p5.jpg';
import P6 from '../../assets/p6.jpg';
import P7 from '../../assets/p7.jpg';
import P8 from '../../assets/p8.jpg';
import P9 from '../../assets/p9.jpg';
import P10 from '../../assets/p10.jpg';
import P11 from '../../assets/p11.jpg';
import P12 from '../../assets/p12.jpg';
import P13 from '../../assets/p13.jpg';
import P14 from '../../assets/p14.jpg';
import P15 from '../../assets/p15.jpg';
import P16 from '../../assets/p16.jpg';
import P17 from '../../assets/p17.jpg';
import P18 from '../../assets/p18.jpg';
import P19 from '../../assets/p19.jpg';
import P20 from '../../assets/p20.jpg';

const initialState = {
  data: [
    { id: 1, name: 'Product 1', image: P1, price: 39999 },
    { id: 2, name: 'Product 2', image: P2, price: 49999 },
    { id: 3, name: 'Product 3', image: P3, price: 59999 },
    { id: 4, name: 'Product 4', image: P4, price: 25999 },
    { id: 5, name: 'Product 5', image: P5, price: 39999 },
    { id: 6, name: 'Product 6', image: P6, price: 59999 },
    { id: 7, name: 'Product 7', image: P7, price: 49999 },
    { id: 8, name: 'Product 8', image: P8, price: 59999 },
    { id: 9, name: 'Product 9', image: P9, price: 39999 },
    { id: 10, name: 'Product 10', image: P10, price: 49999 },
    { id: 11, name: 'Product 11', image: P11, price: 39999 },
    { id: 12, name: 'Product 12', image: P12, price: 25999 },
    { id: 13, name: 'Product 13', image: P13, price: 39999 },
    { id: 14, name: 'Product 14', image: P14, price: 49999 },
    { id: 15, name: 'Product 15', image: P15, price: 25999 },
    { id: 16, name: 'Product 16', image: P16, price: 59999 },
    { id: 17, name: 'Product 17', image: P17, price: 39999 },
    { id: 18, name: 'Product 18', image: P18, price: 79999 },
    { id: 19, name: 'Product 19', image: P19, price: 25999 },
    { id: 20, name: 'Product 20', image: P20, price: 49999 }
  ]
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetchProducts(state, action) {
      state.data = action.payload;
    }
  }
});

export const { fetchProducts } = productSlice.actions;
export default productSlice.reducer;
