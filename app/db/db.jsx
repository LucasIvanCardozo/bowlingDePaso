export async function getPosts() {
  return [
    {
      id: 0,
      name: 'cafeteria',
      subcategoriasBool: false,
      data: [
        {
          name: 'cafe',
          data: [
            { name: 'Solo' },
            { name: 'Jamón y queso' },
            { name: 'Queso y panenta' },
            { name: 'Cheddar y panceta' },
            { name: 'Cheddar, panceta y cebolla caramelizada' },
          ],
          adicional: [{ name: 'Papitas pay' }],
        },
        {
          name: 'submarino',
          data: [
            { name: 'Solo' },
            { name: 'Jamón y queso' },
            { name: 'Queso y panenta' },
            { name: 'Cheddar y panceta' },
            { name: 'Cheddar, panceta y cebolla caramelizada' },
          ],
          adicional: [{ name: 'Papitas pay' }],
        },
        {
          name: 'chocolatada',
          data: [
            { name: 'Solo' },
            { name: 'Jamón y queso' },
            { name: 'Queso y panenta' },
            { name: 'Cheddar y panceta' },
            { name: 'Cheddar, panceta y cebolla caramelizada' },
          ],
          adicional: [{ name: 'Papitas pay' }],
        },
      ],
    },
    { id: 1, name: 'bebidas', subcategoriasBool: false, data: [] },
    {
      id: 2,
      name: 'comidas',
      subcategoriasBool: true,
      data: [
        { id: 0, name: 'tapeo', data: [] },
        { id: 1, name: 'hamburguesas', data: [] },
        { id: 2, name: 'pizzas', data: [] },
        {
          id: 3,
          name: 'sandwiches',
          data: [
            {
              name: 'super panchos',
              data: [
                { name: 'Solo' },
                { name: 'Jamón y queso' },
                { name: 'Queso y panenta' },
                { name: 'Cheddar y panceta' },
                { name: 'Cheddar, panceta y cebolla caramelizada' },
              ],
              adicional: [{ name: 'Papitas pay' }],
            },
            {
              name: 'sanguchitos',
              data: [
                { name: 'Solo' },
                { name: 'Jamón y queso' },
                { name: 'Queso y panenta' },
                { name: 'Cheddar y panceta' },
                { name: 'Cheddar, panceta y cebolla caramelizada' },
              ],
              adicional: [{ name: 'Papitas pay' }],
            },
            {
              name: 'milanesitas',
              data: [
                { name: 'Solo' },
                { name: 'Jamón y queso' },
                { name: 'Queso y panenta' },
                { name: 'Cheddar y panceta' },
                { name: 'Cheddar, panceta y cebolla caramelizada' },
              ],
              adicional: [{ name: 'Papitas pay' }],
            },
          ],
        },
        { id: 4, name: 'guarniciones', data: [] },
      ],
    },
    { id: 3, name: 'postres', subcategoriasBool: false, data: [] },
  ];
}
