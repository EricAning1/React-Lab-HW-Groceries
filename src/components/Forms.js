export default function Forms() {
  return (
    <div>
      <form>
        <label>
          Name:
          <input type='text' name='name' />
        </label>
        <input type='submit' value='Submit' />
      </form>

      <form action='/vegetables' method='POST'>
        Item: <input type='text' name='name' />
        <br />
        Brand: <input type='text' name='img' />
        <br />
        Unit: <input type='text' name='inventory' />
        <br />
        Quantity: <input type='string' name='price' />
        <br />
        Quantity: <input type='string' name='price' />
        <br />
        Quantity: <input type='string' name='price' />
        <input
          className='create'
          type='submit'
          name=''
          value='Create Vegetables'
        />
      </form>
    </div>
  );
}
