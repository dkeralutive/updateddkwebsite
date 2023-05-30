import "./OrderList.css"
import formatCurrency from '../../../utilities/FormatCurrency'
import { useStoreContext } from "../../../contexts/StoreContext"

export default function OrderList({ id, name, description, price, itemImage, qty }) {
    const { increaseOrderCount } = useStoreContext()

  return (
      <div className='orderlist-wrapper'>
          <img src={itemImage[0]} alt={name} className="orderlist-img" />
          <div className='orderlist-desc'>
              {name}
              <p>{description}</p>
          </div>
          <div className='orderlist-group'>
              <div className="orderlist-top">
                  <p className='orderlist-qty'>QTY: {qty}</p>
                  <p className='orderlist-price'>{formatCurrency(price)}</p>
                  <i className="bx bx-trash" />
              </div>
              <div className='control-buttons'>
                  <button className='ctrl-btn-plus' onClick={()=>increaseOrderCount(id)}><i className="bx bx-plus" /></button>
                  <button className='ctrl-btn-minus'><i className="bx bx-minus" /></button>
              </div>
          </div>
      </div>
  )
}
