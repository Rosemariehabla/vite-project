<table className="cost-table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Unit Cost</th>
      <th>Quantity</th>
      <th>Total Cost</th>
    </tr>
  </thead>
  <tbody>
    {items.map((item) => (
      <tr key={item.name}>
        <td>{item.name}</td>
        <td>₱{item.unitCost}</td>
        <td>{item.quantity}</td>
        <td>₱{item.unitCost * item.quantity}</td>
      </tr>
    ))}
  </tbody>
  <tfoot>
  <tr>
    <td colSpan="3"><strong>Grand Total</strong></td>
    <td><strong>₱{grandTotal}</strong></td>
  </tr>
</tfoot>
</table>
