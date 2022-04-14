import React from 'react'
import { Link } from 'react-router-dom';

const Cart = ({ cart, deleteCartItem, addToCart, clearItem }) => {

    const cartItems = cart;
    const total = cartItems.reduce((price, item) => price + item.qty * item.price, 0)



    return (

        <div className='cart'>
            {cart.length < 1 ? <div className='empty'><h1>SƏBƏT BOŞDUR</h1> <Link className='go-prd' to="/">ALIŞ VERIŞƏ DAVAM..</Link></div> :
            <>
            
            <div className='cart-item'>
                <table>
                    <tr className='tr-item2'>
                        <th>MƏHSUL</th>
                        <th>QİYMƏT</th>
                        <th>SAYI</th>
                        <th>CƏMİ</th>
                    </tr>
                    <br />
                    {cart.map((item) => (
                        <tr className='tr-item'>
                            <td><i onClick={()=>clearItem(item)} class="fa-solid fa-trash"></i><img src={item.img} alt="" />{item.title.slice(0,18)}</td>
                            <td>{item.price} AZN</td>
                            <td className='btn-item'>
                                <button onClick={()=>deleteCartItem(item)}>-</button>
                                <span>{item.qty}</span>
                                <button onClick={()=>addToCart(item)}>+</button>
                            </td>
                            <td><h4>{(item.price*item.qty).toFixed(2)} AZN</h4></td>
                        </tr>
                    ))}

                </table>
            </div>

            <div className='cart-total'>
                <h3 className='sebetim'>SƏBƏTİM</h3>
                <div><h5>CƏMİ</h5><h6>{total.toFixed(2)} AZN</h6></div>
                <div><h5>ÇATDIRILMA</h5><h6>Pulsuz çatdırılma
                    Çatdırılma variantları ödəmə zamanı yenilənəcəkdir.</h6></div>
                <div><h5>ÜMUMİ MƏBLƏĞ</h5><h3>{total.toFixed(2)} AZN</h3></div>
                <button>DAVAM</button>
            </div>
            </>
            }
        </div>
    )
}

export default Cart