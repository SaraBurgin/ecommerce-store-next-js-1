require('dotenv').config();
const postgres = require('postgres');

//I want to declare a new constant (sql) the result is based on wether the dATABASE_URL is available. If it is available, I want to use it if not I call postgres as empty function.

const sql = process.env.DATABASE_URL
  ? postgres(process.env.DATABASE_URL, { ssl: { rejectUnauthorized: false } })
  : postgres();

export async function getAllProducts() {
  const products = await sql`
  SELECT * FROM products;
  `;
  return products;
}
// isso tb estava no modelo antigo. la em baixo
// export async function getAllProducts() {
//   const products = await sql`
//     SELECT * FROM products;
//   `;
//   return products;
// }

export async function getProductById(id) {
  const products = await sql`
    SELECT * FROM products
    WHERE id = ${id}
  `;
  return products[0];
}

// const defaultProducts = [
//   {
//     id: '1',
//     name: 'Karen Oslen',
//     description:
//       'Provide beauty services, such as shampooing, cutting, coloring, and styling hair, and massaging and treating scalp. May also apply makeup, dress wigs, perform hair removal, and provide nail and skin care services.',

//     shortDescription: 'Curly hair specialist.',
//     price: '€ 40.00',
//     image: '/karenoslen.jpg',
//     instragramUrl:
//       'https://www.instagram.com/colorbymattrez/?utm_source=ig_embed',
//   },

//   {
//     id: '2',
//     name: 'Marco Rodrigues',
//     description:
//       'Provide beauty services, such as shampooing, cutting, coloring, and styling hair, and massaging and treating scalp. May also apply makeup, dress wigs, perform hair removal, and provide nail and skin care services.',

//     shortDescription: 'Hair Design Specialist.',
//     price: '€ 50.00',
//     image: '/marcorodrigues.jpeg',
//     instragramUrl:
//       'https://www.instagram.com/colorbymattrez/?utm_source=ig_embed',
//   },

//   {
//     id: '3',
//     name: 'Leticia Lopes',
//     description:
//       'Provide beauty services, such as shampooing, cutting, coloring, and styling hair, and massaging and treating scalp. May also apply makeup, dress wigs, perform hair removal, and provide nail and skin care services.',
//     shortDescription: 'Balayage, ombre & hair colouring techniques specialist.',
//     price: '€ 60.00',
//     image: '/leticialopes.jpg',
//     instragramUrl:
//       'https://www.instagram.com/colorbymattrez/?utm_source=ig_embed',
//   },

//   {
//     id: '4',
//     name: 'Manoela Monteiro',
//     description:
//       'Provide beauty services, such as shampooing, cutting, coloring, and styling hair, and massaging and treating scalp. May also apply makeup, dress wigs, perform hair removal, and provide nail and skin care services.',
//     shortDescription: 'Hair extensions specialist.',
//     price: '€ 60.00',
//     image: '/manoelamonteiro.jpg',
//     instragramUrl:
//       'https://www.instagram.com/colorbymattrez/?utm_source=ig_embed',
//   },
// ];

// const sql = process.env.DATABASE_URL
//   ? postgres(process.env.DATABASE_URL, { ssl: { rejectUnauthorized: false } })
//   : postgres();

// ** aqui parou onde tava a DB antiga
// const sql = postgres();

/** To create your Products database table, execute the following command into your PSQL console: 
  
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR  NOT NULL,
  description TEXT NOT NULL,
  short_description TEXT NOT NULL,
  price DECIMAL NOT NULL,
  image VARCHAR  NOT NULL,
  instagram_url VARCHAR  NOT NULL
);

To insert your products into the newly created database table, execute the following commands:

INSERT 
  INTO products (name, description, short_description, price, image, instagram_url)
  values (
    'Karen Oslen', 
    'Provide beauty services, such as shampooing, cutting, coloring, and styling hair, and massaging and treating scalp. May also apply makeup, dress wigs, perform hair removal, and provide nail and skin care services.',
    'Curly hair specialist.',
    40.0,
    '/karenoslen.jpg',
    'https://www.instagram.com/colorbymattrez/?utm_source=ig_embed'
  );

  INSERT 
  INTO products (name, description, short_description, price, image, instagram_url)
  values (
    'Marco Rodrigues', 
    'Provide beauty services, such as shampooing, cutting, coloring, and styling hair, and massaging and treating scalp. May also apply makeup, dress wigs, perform hair removal, and provide nail and skin care services.',
    'Hair Design Specialist.',
    50.0,
    '/marcorodrigues.jpeg',
    'https://www.instagram.com/colorbymattrez/?utm_source=ig_embed'
  );

  INSERT 
  INTO products (name, description, short_description, price, image, instagram_url)
  values (
    'Leticia Lopes', 
    'Provide beauty services, such as shampooing, cutting, coloring, and styling hair, and massaging and treating scalp. May also apply makeup, dress wigs, perform hair removal, and provide nail and skin care services.',
    'Balayage, ombre & hair colouring techniques specialist.',
    60.0,
    '/leticialopes.jpg',
    'https://www.instagram.com/colorbymattrez/?utm_source=ig_embed'
  );

INSERT 
  INTO products (name, description, short_description, price, image, instagram_url)
  values (
    'Manoela Monteiro', 
    'Provide beauty services, such as shampooing, cutting, coloring, and styling hair, and massaging and treating scalp. May also apply makeup, dress wigs, perform hair removal, and provide nail and skin care services.',
    'Hair extensions specialist.',
    60.0,
    '/manoelamonteiro.jpg',
    'https://www.instagram.com/colorbymattrez/?utm_source=ig_embed'
  );
  
  DROP TABLE products;

 */

//return defaultProducts.find(product => product.id === id);
